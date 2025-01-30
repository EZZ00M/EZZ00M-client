import styled from "styled-components";
import { BREAKPOINTS } from "../styles/mediaQueries";

export const ZoomAnalyzePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  height: 100vh;
  padding-top: 100px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding-top: 80px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 800;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 36px;
    font-weight: 700;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 26px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
  }
`;
