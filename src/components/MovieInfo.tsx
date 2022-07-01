import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-left: 1px solid #d7dae0;
  padding: 40px;
`;

const Title = styled.h2``;

const Description = styled.p``;

export const MovieInfo = () => {
  return (
    <Wrapper>
      <Title> Movie title </Title>
      <Description> hejj jhdfjdsfjhds </Description>
    </Wrapper>
  );
};
