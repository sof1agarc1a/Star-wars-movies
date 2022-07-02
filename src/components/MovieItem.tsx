import React from "react";
import styled from "styled-components";
import { Movie } from "./types/Movie.types";
import { convertToRoman } from "./utils/convertToRoman";

interface MovieItemProps {
  movie: Movie;
  selectedMovie?: Movie;
  setSelectedMovie: (movie: Movie) => void;
}

const Wrapper = styled.div<{ activate: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #d7dae0;
  cursor: ${({ activate }) => !activate && "pointer"};
  background-color: ${({ activate }) => activate && "#ebeef5"};

  &:hover {
    background-color: ${({ activate }) => !activate && "#f5f7fc"};
  }
`;

const EpisodeTitle = styled.span`
  margin-left: 20px;
  font-weight: 500;
`;

const EpisodeNumber = styled.span`
  color: #4c4c4c;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const EpisodeDate = styled.span`
  color: #4c4c4c;
`;

export const MovieItem = ({
  movie,
  selectedMovie,
  setSelectedMovie,
}: MovieItemProps) => {
  const { title, release_date: releaseDate, episode_id: episodeId } = movie;

  return (
    <Wrapper
      activate={selectedMovie?.episode_id === episodeId}
      onClick={() => setSelectedMovie(movie)}
    >
      <div>
        <EpisodeNumber> Episode {episodeId} </EpisodeNumber>
        <EpisodeTitle>
          Episode {convertToRoman(episodeId)} - {title}
        </EpisodeTitle>
      </div>
      <EpisodeDate>{releaseDate}</EpisodeDate>
    </Wrapper>
  );
};
