import React from "react";
import Header from "../components/Header/Header";
import * as S from "../pages/ZoomAnalyzePage.style";
import DragBox from "../components/DragBox/DragBox";
import Ad from "../components/Ad";
import Explanation from "../components/Explanation/Explanation";

const ZoomAnalyzePage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Text>줌 로그 분석 프로그램</S.Text>
        <S.SmallText>
          복잡한 줌 로그 파일을 쉽게 분석해 정리하세요.
          <br />
          누가 얼마나 있었는지 쉽게 알 수 있습니다.
        </S.SmallText>
        <DragBox />
        <Explanation />
      </S.Container>
    </>
  );
};

export default ZoomAnalyzePage;
