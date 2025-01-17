import React from "react";
import Header from "../components/Header/Header";
import * as S from "../pages/ZoomAnalyzePage.style";
import DragBox from "../components/DragBox/DragBox";
import Explanation from "../components/Explanation/Explanation";
import Footer from "../components/Footer/Footer";

const ZoomAnalyzePage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          <Footer />
        </S.Container>
      </div>
    </>
  );
};

export default ZoomAnalyzePage;
