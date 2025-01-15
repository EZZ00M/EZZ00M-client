import styled from "styled-components";
import { FaXmark, FaFileArrowUp } from "react-icons/fa6";

export const FileDropContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: lightgray;
  border-radius: 16px;
  margin: 10px 0;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const FileListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: lightgray;
  border-radius: 16px;
  margin: 10px 0;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const HiddenInput = styled.input`
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
  height: 100%;
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
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DownloadButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-evenly;
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const StyledFilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 12px;
`;

export const StyledFlexBox = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
  border-radius: 16px;
  max-height: 400px;
`;

export const StyledFileName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 500;
  color: #343a40;
`;

export const FileIcon = styled(FaXmark)`
  color: #e03131;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #c92a2a;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
