import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d7dae0;
  padding: 20px 24px;
`;

export const MovieItem = () => {
  return (
    <Wrapper>
      <div>
        <span> Episode 4 </span>
        <span> Episode IV - A New Hope </span>
      </div>
      <span> 1955-06-25 </span>
    </Wrapper>
  );
};
