import React from "react";
import styled from "styled-components";

interface MovieProps {
  title: string;
  releaseDate: string;
  episodeId: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #d7dae0;
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

const convertToRoman = (number: number) => {
  const romanNumbers = [
    "-",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  return romanNumbers[number];
};

export const MovieItem = ({ title, releaseDate, episodeId }: MovieProps) => {
  const romanNumber = convertToRoman(episodeId);

  return (
    <Wrapper>
      <div>
        <EpisodeNumber> Episode {episodeId} </EpisodeNumber>
        <EpisodeTitle>
          Episode {romanNumber} - {title}
        </EpisodeTitle>
      </div>
      <EpisodeDate>{releaseDate}</EpisodeDate>
    </Wrapper>
  );
};
