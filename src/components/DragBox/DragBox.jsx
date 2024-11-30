import React, { useState } from "react";
import * as S from "./DragBox.style";

const DragBox = () => {
  const [file, setFile] = useState(null);

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

  const handleAnalyze = async () => {
    try {
      const response = await axios.get(`/api/ezzoom`);

      const fileUrl = response.data.url;

      if (fileUrl) {
        window.open(fileUrl, "_blank");
      } else {
        throw new Error("파일 URL이 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("명단 분석 다운로드 중 오류 발생:", error);
      alert("명단 분석에 오류가 생겼습니다. 다시 시도해 주세요.");
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
              </S.FlexBox>
            </S.InnerBox>
          ) : (
            <S.FlexBox>
              <S.FileName>{file.name}</S.FileName>
              <S.Analyzer onClick={handleAnalyze}>로그 분석하기</S.Analyzer>
            </S.FlexBox>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default DragBox;
