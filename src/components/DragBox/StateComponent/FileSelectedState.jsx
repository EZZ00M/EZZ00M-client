import React from "react";
import * as S from "../DragBox.style";

const FileSelectedState = ({ files, onAnalyze, onRemove, onAddFiles }) => (
  <S.InnerBox>
    <S.StyledFilesContainer>
      {files.map((file) => (
        <S.StyledFlexBox key={file.name}>
          <S.StyledFileName>
            <span>{file.name}</span>
            <div>
              <S.FileIcon
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(file.name);
                }}
              />
            </div>
          </S.StyledFileName>
        </S.StyledFlexBox>
      ))}
    </S.StyledFilesContainer>

    <S.ButtonContainer>
      <S.Button onClick={onAnalyze}>로그 분석하기</S.Button>
      <S.Button
        onClick={(e) => {
          e.stopPropagation();
          onAddFiles();
        }}
      >
        파일 추가하기
      </S.Button>
    </S.ButtonContainer>
  </S.InnerBox>
);

export default FileSelectedState;
