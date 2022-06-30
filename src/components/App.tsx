import React from "react";
import { MovieInfo } from "./MovieInfo";
import { MoviesList } from "./MoviesList";
import { NavigationBar } from "./NavigationBar";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <MoviesList />
      <MovieInfo />
    </>
  );
};
