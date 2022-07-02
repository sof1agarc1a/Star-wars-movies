import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { MovieInfo } from "./MovieInfo";
import { MovieItem } from "./MovieItem";
import { Search } from "./Search";

type Movies = {
  title: string;
  release_date: string;
  episode_id: number;
};

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
  const [movies, setMovies] = useState<Movies[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(`https://swapi.dev/api/films/`);
      const fetchData = await data.json();
      setMovies(fetchData.results);
    };
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <NavigationWrapper>
        <Filter />
        <Search />
      </NavigationWrapper>

      <Wrapper>
        <MoviesList>
          {movies?.map(
            (
              { title, release_date: releaseDate, episode_id: episodeId },
              index
            ) => (
              <MovieItem
                key={index}
                title={title}
                releaseDate={releaseDate}
                episodeId={episodeId}
              />
            )
          )}
        </MoviesList>

        <MovieInfo />
      </Wrapper>
    </>
  );
};
