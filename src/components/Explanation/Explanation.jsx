import ExplanationList from "./ExplanationList";
import * as S from "./Explanation.style";

const Explanation = () => {
  return (
    <>
      <S.Wrapper>
        {ExplanationList.map((explanation, index) => (
          <S.Container key={index}>
            <S.Icon>{explanation.icon}</S.Icon>
            <S.Title>{explanation.title}</S.Title>
            <S.Content>{explanation.content}</S.Content>
          </S.Container>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Explanation;
