import React, { useState } from "react";
import * as S from "./Modal.style";

const Modal = ({ isOpen, onClose, onSubmit, fileCount }) => {
  const [time, setTime] = useState("");
  const [count, setCount] = useState("");
  if (!isOpen) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        {fileCount > 1 && (
          <S.FormRow>
            <S.StyledLabel>
              최소 이수 횟수를 입력해주세요:
              <S.StyledInput
                type='text'
                placeholder='예) 3'
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </S.StyledLabel>
          </S.FormRow>
        )}
        <S.FormRow>
          <S.StyledLabel>
            최소 이수 시간(분)을 입력해주세요:
            <S.StyledInput
              type='text'
              placeholder='예) 30'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </S.StyledLabel>
        </S.FormRow>

        <S.SubmitButton
          onClick={() => {
            onSubmit(time, count);
            onClose();
          }}
        >
          전송
        </S.SubmitButton>
      </S.ModalBox>
    </S.Backdrop>
  );
};

export default Modal;
