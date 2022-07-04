import React from "react";
import styled from "styled-components";
import { MovieItem } from "./MovieItem";
import { Movie } from "./types/Movie.types";

interface MoviesListProps {
  loading: boolean;
  filteredMovies?: Movie[];
  selectedMovie?: Movie;
  setSelectedMovie: (movie: Movie) => void;
}

const MoviesListWrapper = styled.div<{ loading?: boolean }>`
  width: 50%;
  border-left: 1px solid #d7dae0;

  ${({ loading }) =>
    loading &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const MoviesList = ({
  loading,
  filteredMovies,
  selectedMovie,
  setSelectedMovie,
}: MoviesListProps) => {
  if (loading) {
    return <MoviesListWrapper loading>Loading movies...</MoviesListWrapper>;
  }

  return (
    <MoviesListWrapper>
      {filteredMovies?.map((movie, index) => (
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
