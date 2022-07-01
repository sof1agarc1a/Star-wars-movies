import React from "react";
import styled from "styled-components";
import { MovieInfo } from "./MovieInfo";
import { MovieItem } from "./MovieItem";
import { NavigationBar } from "./NavigationBar";

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid gray; */
`;

const MoviesList = styled.div`
  width: 50%;
  /* height: 100vh; */
  border-left: 1px solid #d7dae0;
  /* padding: 40px; */
`;

export const App = () => {
  return (
    <>
      <NavigationBar />

      <Wrapper>
        <MoviesList>
          <MovieItem />
        </MoviesList>

        <MovieInfo />
      </Wrapper>
    </>
  );
};
