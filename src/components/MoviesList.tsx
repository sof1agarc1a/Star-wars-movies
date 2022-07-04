import React from "react";
import styled from "styled-components";
import { MovieItem } from "./MovieItem";
import { Movie } from "./types/Movie.types";

interface MoviesListProps {
  movies?: Movie[];
  selectedMovie?: Movie;
  setSelectedMovie: (movie: Movie) => void;
}

const MoviesListWrapper = styled.div`
  width: 50%;
  border-left: 1px solid #d7dae0;
`;

export const MoviesList = ({
  movies,
  selectedMovie,
  setSelectedMovie,
}: MoviesListProps) => {
  return (
    <MoviesListWrapper>
      {movies?.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </MoviesListWrapper>
  );
};
