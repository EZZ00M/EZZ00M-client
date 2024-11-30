import React from "react";
import styled from "styled-components";

const Ad = () => {
  return (
    <>
      <Container>
        <Text>광고</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 728px;
  width: 728px;
  min-height: 90px;
  background-color: gray;
`;

const Text = styled.div`
  color: white;
  font-size: 22px;
`;

export default Ad;
