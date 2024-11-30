import styled from "styled-components";
import { FaFileArrowUp } from "react-icons/fa6";

export const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 400px;
  background-color: lightgray;
  border-radius: 16px;
  margin: 30px 0;
  padding: 20px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

// 파일 X 경우의 드래그박스
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 2px dashed white;
  border-radius: 16px;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 250px;
  justify-content: center;
  align-content: center;
`;

export const Icon = styled(FaFileArrowUp)`
  display: flex;
  width: 100px;
  height: 100px;
  color: white;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 26px;
  font-weight: 800;
  color: white;
`;

// 파일 O 경우의 드래그박스
export const FileName = styled.p`
  color: white;
  font-size: 22px;
`;

export const Analyzer = styled.button`
  width: auto;
  height: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
  background-color: white;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;
