import React from "react";
import * as S from "../DragBox.style";

const EmptyState = () => (
  <S.InnerBox>
    <S.FlexBox>
      <S.Icon />
      <S.Text>분석할 파일을 드래그하거나 선택해주세요.</S.Text>
      <S.Text>.csv, .xlsx, .xls 확장자 파일만 업로드할 수 있습니다.</S.Text>
    </S.FlexBox>
  </S.InnerBox>
);

export default EmptyState;
