import styled from "styled-components";
import { FaFile, FaFileArrowUp } from "react-icons/fa6";

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
  width: 80%;
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

export const FileName = styled.p`
  color: white;
  font-size: 22px;
`;

export const Button = styled.button`
  display: flex;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DownloadButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const StyledFlexBox = styled.div`
  display: grid;
  gap: 20px;
  padding: 30px;
  border-radius: 16px;
  max-height: 400px;
`;

export const FileIcon = styled(FaFile)`
  margin-right: 8px;
  color: #fff;
`;

export const StyledFileName = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 20px;
  color: white;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledFilesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 4px;
`;
