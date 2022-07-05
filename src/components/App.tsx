import React, { useCallback, useEffect, useState } from "react";
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

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([] as Movie[]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMovies = useCallback(async () => {
    const data = await fetch(`https://swapi.dev/api/films/`);
    const fetchData = await data.json();
    setMovies(fetchData.results);
    setFilteredMovies(fetchData.results);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <NavigationWrapper>
        <Filter
          movies={movies}
          setFilteredMovies={(filteredMovies) =>
            setFilteredMovies([...filteredMovies])
          }
        />
        <Search setFilteredMovies={setFilteredMovies} movies={movies} />
      </NavigationWrapper>

      <Wrapper>
        <MoviesList
          loading={loading}
          filteredMovies={filteredMovies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />

        <SelectedMovieInfo movie={selectedMovie} />
      </Wrapper>
    </>
  );
};
