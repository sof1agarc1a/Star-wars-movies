import React, { useState } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons";
import { Movie } from "./types/Movie.types";
import { convertToRoman } from "./utils/convertToRoman";

interface SearchProps {
  setFilteredMovies: (movies: Movie[]) => void;
  movies: Movie[];
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px 0 48px;
  border: 1px solid #d7dae0;
  border-radius: 4px;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 16px;
`;

const NoResult = styled.div`
  position: absolute;
  top: 100px;
`;

const ResetText = styled.span`
  margin-left: 4px;
  font-weight: 600;
  opacity: 1;
  transition: 0.2s;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Search = ({ setFilteredMovies, movies }: SearchProps) => {
  const [query, setQuery] = useState<string>("");
  const [noResult, setNoResult] = useState<boolean>(false);

  const onQuerySearch = (query: string) => {
    const regex = RegExp(`.*${query.toLowerCase().split("").join(".*")}.*`);

    const filteredMovies = movies?.filter(({ title, episode_id }) =>
      `Episode ${convertToRoman(episode_id)} ${title}`
        .toLowerCase()
        .match(regex)
    );

    query && filteredMovies.length === 0
      ? setNoResult(true)
      : setNoResult(false);

    setFilteredMovies(filteredMovies);
  };

  return (
    <Wrapper>
      <SearchIconWrapper>
        <SearchIcon size={18} color="#444444" />
      </SearchIconWrapper>

      <SearchInput
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(query) => {
          setQuery(query.target.value);
          onQuerySearch(query.target.value);
        }}
      />

      {noResult && (
        <NoResult>
          No results.
          <ResetText
            onClick={() => {
              setQuery("");
              onQuerySearch("");
            }}
          >
            Reset search.
          </ResetText>
        </NoResult>
      )}
    </Wrapper>
  );
};
