import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { SelectedMovieInfo } from "./SelectedMovieInfo";
import { Search } from "./Search";
import { Movie } from "./types/Movie.types";
import { MoviesList } from "./MoviesList";

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

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [filter, setFilter] = useState<"Episode" | "Year" | "None">("None"); // move to App

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
        <Filter
          filter={filter}
          setFilter={setFilter}
          setMovies={setMovies}
          movies={movies}
        />
        <Search />
      </NavigationWrapper>

      <Wrapper>
        <MoviesList
          movies={movies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />

        <SelectedMovieInfo movie={selectedMovie} />
      </Wrapper>
    </>
  );
};
