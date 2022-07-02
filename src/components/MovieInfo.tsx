import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  padding: 40px;
  border-left: 1px solid #d7dae0;
`;

const Title = styled.h2`
  font-weight: 600;
`;

const Description = styled.p`
  margin-top: 16px;
  line-height: 24px;
  color: #4c4c4c;
`;

const Director = styled.p`
  margin-top: 16px;
  color: #4c4c4c;
`;

export const MovieInfo = () => {
  return (
    <Wrapper>
      <Title> Movie title </Title>
      <Description>
        {" "}
        hejj jhdfjdsfjhds jhdfjdsfjhds jhdfjdsfjhds jhdfjdsfjhds jhdfjdsfjhds
        jhdfjdsfjhds jhdfjdsfjhds jhdfjdsfjhds{" "}
      </Description>
      <Director>Directed by: Invin </Director>
    </Wrapper>
  );
};
