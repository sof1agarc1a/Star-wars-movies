import React from "react";
import styled from "styled-components";

const SortButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  color: #4c4c4c;
  background-color: #fafbff;
  border: 1px solid #d7dae0;
  border-radius: 4px;
`;

export const Filter = () => {
  return <SortButton>Sort by...</SortButton>;
};
