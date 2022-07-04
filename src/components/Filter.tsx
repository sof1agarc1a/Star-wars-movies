import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "./icons";
import { Movie } from "./types/Movie.types";

interface FilterProps {
  setFilteredMovies: (movies: Movie[]) => void;
  movies: Movie[];
}

const SortButton = styled.button<{ openModal: boolean }>`
  width: 100px;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  color: #4c4c4c;
  background-color: ${({ openModal }) => (openModal ? `#ebeef5` : `#fafbff`)};
  border: 1px solid #d7dae0;
  border-radius: 4px;
  cursor: pointer;
`;

const SortModal = styled.div`
  position: fixed;
  top: 60px;
  width: 240px;
  height: 200px;
  background-color: white;
  border: 1px solid #d7dae0;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.1);
  z-index: 10;
`;

const SortByText = styled.p`
  width: 100%;
  padding: 8px;
  font-weight: 500;
  border-bottom: 1px solid #d7dae0;
`;

const ResetText = styled.span`
  position: absolute;
  top: 10px;
  right: 32px;
  font-size: 0.7rem;
  cursor: pointer;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 9px;
  right: 8px;
  cursor: pointer;
`;

const SortOption = styled.p<{ active: boolean }>`
  width: 100%;
  padding: 8px 24px;
  color: #4c4c4c;
  font-size: 0.8rem;
  font-weight: 500;
  border-bottom: 1px solid #d7dae0;
  background-color: ${({ active }) => active && "#ebeef5"};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => !active && "#fafbff"};
  }
`;

const sortMovies = (
  filter: "Episode" | "Year" | "None",
  setFilter: (filter: "Episode" | "Year" | "None") => void,
  setFilteredMovies: (movies: Movie[]) => void,
  movies: Movie[]
) => {
  const filteredMovies = movies?.sort((a, b) => {
    // filter by episode
    if (filter === "Episode") {
      return a.episode_id - b.episode_id;
    }
    // filter by date/year
    if (filter === "Year") {
      return parseInt(a.release_date) - parseInt(b.release_date);
    }
    // shuffle randomly when sort gets reset
    return 0.5 - Math.random();
  });

  setFilteredMovies(filteredMovies);
  setFilter(filter);
};

export const Filter = ({ movies, setFilteredMovies }: FilterProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<"Episode" | "Year" | "None">("None");

  return (
    <>
      <SortButton
        openModal={openModal}
        onClick={() => setOpenModal(!openModal)}
      >
        Sort by...
      </SortButton>

      {openModal && (
        <SortModal>
          <SortByText>Sort by</SortByText>

          {filter !== "None" && (
            <>
              <ResetText
                onClick={() =>
                  sortMovies("None", setFilter, setFilteredMovies, movies)
                }
              >
                Reset
              </ResetText>

              <CloseIconWrapper
                role="button"
                aria-label="cross-icon"
                onClick={() =>
                  sortMovies("None", setFilter, setFilteredMovies, movies)
                }
              >
                <CloseIcon size={16} />
              </CloseIconWrapper>
            </>
          )}

          <SortOption
            active={filter === "Episode"}
            onClick={() =>
              sortMovies(
                filter === "Episode" ? "None" : "Episode",
                setFilter,
                setFilteredMovies,
                movies
              )
            }
          >
            Episode
          </SortOption>

          <SortOption
            active={filter === "Year"}
            onClick={() =>
              sortMovies(
                filter === "Year" ? "None" : "Year",
                setFilter,
                setFilteredMovies,
                movies
              )
            }
          >
            Year
          </SortOption>
        </SortModal>
      )}
    </>
  );
};
