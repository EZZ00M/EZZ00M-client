import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/mediaQueries";

export const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  min-width: 400px;
  height: 70px;
  padding: 10px 20px;
  border-bottom: 1px solid #d3d3d3;
  background-color: #ffffff;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 60px;
    padding: 6px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export const Logo = styled.img`
  display: flex;
  height: 100%;
  cursor: pointer;
`;
