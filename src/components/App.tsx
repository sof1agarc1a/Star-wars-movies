import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { SelectedMovieInfo } from "./SelectedMovieInfo";
import { MovieItem } from "./MovieItem";
import { Search } from "./Search";
import { Movie } from "./types/Movie.types";

const NavigationWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  height: 70px;
  border-bottom: 1px solid #d7dae0;
  background-color: #f5f7fc;
`;

const Wrapper = styled.div`
  display: flex;
`;

const MoviesList = styled.div`
  width: 50%;
  border-left: 1px solid #d7dae0;
`;

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(`https://swapi.dev/api/films/`);
      const fetchData = await data.json();
      setMovies(fetchData.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <NavigationWrapper>
        <Filter />
        <Search />
      </NavigationWrapper>

      <Wrapper>
        <MoviesList>
          {movies?.map((movie, index) => (
            <MovieItem
              key={index}
              movie={movie}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </MoviesList>

        <SelectedMovieInfo movie={selectedMovie} />
      </Wrapper>
    </>
  );
};
