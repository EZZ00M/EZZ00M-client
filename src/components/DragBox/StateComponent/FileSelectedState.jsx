import React from "react";
import * as S from "../DragBox.style";

const FileSelectedState = ({ files, onAnalyze }) => (
  <>
    <S.InnerBox>
      <S.StyledFilesContainer>
        {files.map((file) => (
          <S.StyledFileName key={file.name}>
            <S.FileIcon />
            {file.name}
          </S.StyledFileName>
        ))}
      </S.StyledFilesContainer>
      <S.Button onClick={onAnalyze}>로그 분석하기</S.Button>
    </S.InnerBox>
  </>
);

export default FileSelectedState;
