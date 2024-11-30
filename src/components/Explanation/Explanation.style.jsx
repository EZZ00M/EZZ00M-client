import styled from "styled-components";

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
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
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
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
