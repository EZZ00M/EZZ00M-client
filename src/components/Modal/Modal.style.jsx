import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 40%;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
`;

export const FormRow = styled.div`
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px 12px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #ffffff;
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
