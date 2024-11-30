import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  min-width: 300px;
  height: 70px;
  padding: 10px 20px;
  border-bottom: 1px solid #d3d3d3;
  background-color: white;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80%;
`;

export const Logo = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
`;

export const Menu = styled.div`
  display: flex;
  font-size: 16px;
`;
