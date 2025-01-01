import React, { useEffect, useState } from "react";
import * as S from "./DragBox.style";
import axios from "axios";
const address = import.meta.env.VITE_SERVER_URL;

const DragBox = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (file) {
      const validExtensions = [".csv", ".xlsx", "xls"];
      const fileExtensions = file.name.substring(file.name.lastIndexOf("."));

      if (!validExtensions.includes(fileExtensions)) {
        alert(
          "지원하지 않는 파일 형식입니다. .csv, .xlsx, .xls 파일만 업로드 해주세요."
        );
        setFile(null);
      }
    }
  }, [file]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleLogAnalyze = async () => {
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("zoomLogFile", file);

    try {
      const response = await axios.post(`${address}/api/ezzoom`, formData);

      if (response.status === 200) {
        const downloadUrl = response.data;
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "analyzed_log.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert("다운로드가 완료되었습니다!");
        window.location.reload();
      } else if (response.status === 401) {
        alert("파일의 양식이 올바르지 않습니다.");
      }
    } catch (error) {
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
          accept='.csv, .xlsx, .xls'
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <S.Wrapper>
          {!file ? (
            <S.InnerBox>
              <S.FlexBox>
                <S.Icon />
                <S.Text>분석할 파일을 드래그하거나 선택해주세요.</S.Text>
                <S.Text>
                  .csv, .xlsx, .xls 확장자 파일만 업로드할 수 있습니다.
                </S.Text>
              </S.FlexBox>
            </S.InnerBox>
          ) : (
            <S.FlexBox>
              <S.FileName>{file.name}</S.FileName>
              <S.Analyzer onClick={handleLogAnalyze}>로그 분석하기</S.Analyzer>
            </S.FlexBox>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default DragBox;
