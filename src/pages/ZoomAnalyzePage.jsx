import * as S from "../pages/ZoomAnalyzePage.style";
import Header from "../components/Header/Header";
import DragBox from "../components/DragBox/DragBox";
import Explanation from "../components/Explanation/Explanation";
import Footer from "../components/Footer/Footer";

const ZoomAnalyzePage = () => {
  return (
    <S.ZoomAnalyzePage>
      <Header />
      <S.Container>
        <S.Title>줌 로그 분석 프로그램</S.Title>
        <S.SubTitle>
          복잡한 줌 로그 파일을 쉽게 분석해 정리하세요.
          <br />
          누가 얼마나 있었는지 쉽게 알 수 있습니다.
        </S.SubTitle>
        <DragBox />
        <Explanation />
        <Footer />
      </S.Container>
    </S.ZoomAnalyzePage>
  );
};

export default ZoomAnalyzePage;
