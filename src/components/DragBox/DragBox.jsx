import React, { useRef, useState } from "react";
import * as S from "./DragBox.style";
import axios from "axios";
import Modal from "../Modal/Modal";
import EmptyState from "./StateComponent/EmptyState";
import FileSelectedState from "./StateComponent/FileSelectedState";
import AnalysisCompleteState from "./StateComponent/AnalysisCompleteState";

const validExtensions = [".csv", ".xlsx", ".xls"];
const address = import.meta.env.VITE_SERVER_URL;

const DragBox = () => {
  const [files, setFiles] = useState([]);
  const [totalPdfUrl, setTotalPdfUrl] = useState(null);
  const [detailPdfUrls, setDetailPdfUrls] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const validateFiles = (fileList) => {
    const validFiles = fileList.filter((file) =>
      validExtensions.includes(file.name.substring(file.name.lastIndexOf(".")))
    );
    if (validFiles.length !== fileList.length) {
      alert(
        "지원하지 않는 파일 형식입니다. .csv, .xlsx, .xls 파일만 업로드 해주세요."
      );
    }
    return validFiles;
  };

  const handleFileUpload = (newFiles) => {
    const validFiles = validateFiles(newFiles);
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    resetAnalysisResults();
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      handleFileUpload(Array.from(event.target.files));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileUpload(Array.from(event.dataTransfer.files));
  };

  const resetAnalysisResults = () => {
    setTotalPdfUrl(null);
    setDetailPdfUrls([]);
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleLogAnalyze = () => {
    if (files.length === 0) {
      alert("파일을 선택해주세요.");
      return;
    }
    setModalOpen(true);
  };

  const handleLogAnalyzeSubmit = async (time, count) => {
    if (files.length === 0) {
      alert("파일을 선택해주세요.");
      return;
    }

    try {
      let response;
      if (files.length === 1) {
        const formData = new FormData();
        formData.append("zoomLogFile", files[0]);
        response = await axios.post(
          `${address}/api/ezzoom/single?completionTime=${time}`,
          formData
        );
      } else {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("zoomLogFileList", file);
        });
        response = await axios.post(
          `${address}/api/ezzoom/multi?completionTime=${time}&completionCount=${count}`,
          formData
        );
      }
      if (response?.status === 200) {
        if (files.length === 1) {
          const analyzedFile = response.data.analyzedFile;
          
          setTotalPdfUrl(analyzedFile);
          setDetailPdfUrls([]);
        } else {
          const { totalAnalyzedFile, detailAnalyzedFileList } = response.data;

          setTotalPdfUrl(totalAnalyzedFile);
          setDetailPdfUrls(detailAnalyzedFileList);
        }
        alert("분석이 완료되었습니다! 아래 버튼을 통해 PDF를 다운로드하세요.");
      } else if (response?.status === 401) {

        alert("파일의 양식이 올바르지 않습니다.");
      } else if (response?.status === 422) {
        alert("분석에 실패하였습니다.");
      } else if (response?.status === 500) {
        alert(
          "파일 저장에 실패하였습니다. 서버 에러, 관리자에게 문의 바랍니다."
        );
      }
    } catch {
      alert("파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <>
      {files.length === 0 ? (
        <S.FileDropContainer
          htmlFor='fileInput'
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <EmptyState />
        </S.FileDropContainer>
      ) : (
        <S.FileListContainer
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {!totalPdfUrl ? (
            <FileSelectedState
              files={files}
              onAnalyze={handleLogAnalyze}
              onRemove={handleRemoveFile}
              onAddFiles={() => fileInputRef.current?.click()}
            />
          ) : (
            <AnalysisCompleteState
              totalPdfUrl={totalPdfUrl}
              detailPdfUrls={detailPdfUrls}
              downloadFile={(url) => {
                const link = document.createElement("a");
                link.href = url;
                link.download = "result.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          )}
        </S.FileListContainer>
      )}

      <S.HiddenInput
        id='fileInput'
        ref={fileInputRef}
        type='file'
        accept='.csv,.xlsx,.xls'
        multiple
        onChange={handleFileChange}
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleLogAnalyzeSubmit}
        fileCount={files.length}
      />
    </>
  );
};

export default DragBox;
