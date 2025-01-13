import React, { useState } from "react";
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

  const filterValidFiles = (fileList) => {
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

  const handleFileChange = (event) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      const validFiles = filterValidFiles(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setTotalPdfUrl(null);
      setDetailPdfUrls([]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const droppedFiles = Array.from(event.dataTransfer.files);
      const validFiles = filterValidFiles(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
      setTotalPdfUrl(null);
      setDetailPdfUrls([]);
    }
  };

  const downloadFile = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogAnalyze = async (time, count) => {
    if (!files || files.length === 0) {
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
      <S.Container
        htmlFor='HiddenInput'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <S.Input
          id='HiddenInput'
          type='file'
          accept='.csv,.xlsx,.xls'
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <S.Wrapper className='wrapper'>
          {files.length === 0 ? (
            <EmptyState />
          ) : (
            !totalPdfUrl && (
              <FileSelectedState
                files={files}
                onAnalyze={() => setModalOpen(true)}
              />
            )
          )}
          {totalPdfUrl && (
            <AnalysisCompleteState
              totalPdfUrl={totalPdfUrl}
              detailPdfUrls={detailPdfUrls}
              downloadFile={downloadFile}
            />
          )}
        </S.Wrapper>
      </S.Container>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(time, count) => handleLogAnalyze(time, count)}
        fileCount={files.length}
      />
    </>
  );
};

export default DragBox;
