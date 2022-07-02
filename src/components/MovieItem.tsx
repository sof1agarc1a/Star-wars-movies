import React from "react";
import styled from "styled-components";

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

export const MovieItem = ({ title, releaseDate, episodeId }) => {
  return (
    <Wrapper>
      <div>
        <EpisodeNumber> Episode 4 </EpisodeNumber>
        <EpisodeTitle> Episode IV - A New Hope </EpisodeTitle>
      </div>
      <EpisodeDate> 1955-06-25 </EpisodeDate>
    </Wrapper>
  );
};
