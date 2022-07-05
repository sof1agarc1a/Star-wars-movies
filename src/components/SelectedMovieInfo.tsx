import React from "react";
import styled from "styled-components";
import { Movie } from "./types/Movie.types";
import { convertToRoman } from "./utils/convertToRoman";

interface SelectedMovieInfoProps {
  movie?: Exclude<Movie, "release_date">;
}

const Wrapper = styled.div<{ selectedMovie?: Movie }>`
  width: 50%;
  height: calc(100vh - 70px);
  padding: 40px;
  border-left: 1px solid #d7dae0;

  ${({ selectedMovie }) =>
    !selectedMovie &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `};

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #d7dae0;
  }
`;

const Title = styled.h2`
  font-weight: 600;
`;

const Description = styled.p`
  margin: 16px 0 32px;
  line-height: 24px;
  color: #4c4c4c;
`;

const Text = styled.p`
  margin-top: 16px;
  color: #4c4c4c;
`;

const NoResult = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const SelectedMovieInfo = ({ movie }: SelectedMovieInfoProps) => {
  if (!movie) {
    return (
      <Wrapper selectedMovie={movie}>
        <NoResult>No movie selected</NoResult>
      </Wrapper>
    );
  }

  const {
    title,
    director,
    producer,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
  } = movie;

  return (
    <Wrapper selectedMovie={movie}>
      <Title>
        Episode {convertToRoman(episodeId)} - {title}
      </Title>
      <Description>{openingCrawl}</Description>
      <Text>Directed by: {director} </Text>
      <Text>Produced by: {producer} </Text>
    </Wrapper>
  );
};
