import React from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons";

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

export const Search = () => {
  return (
    <Wrapper>
      <SearchIconWrapper>
        <SearchIcon size={18} color="#444444" />
      </SearchIconWrapper>
      <SearchInput type="text" placeholder="Type to search..." />
    </Wrapper>
  );
};
