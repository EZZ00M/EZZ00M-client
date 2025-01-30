import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  gap: 50px;
  margin: 20px 30px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  color: #0a5dfe;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin: 5px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
  }
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
    line-height: 160%;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    line-height: 140%;
  }
`;
