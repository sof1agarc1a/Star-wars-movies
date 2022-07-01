import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 50%; */
  height: 60px;
  border-bottom: 1px solid #d7dae0;
  background-color: #f5f7fc;
`;

export const NavigationBar = () => {
  return (
    <Wrapper>
      <p> Nav</p>
      {/* <Filter />
      <Search /> */}
    </Wrapper>
  );
};
