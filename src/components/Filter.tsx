import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "./icons";

interface FilterProps {
  filter?: "Episode" | "Year" | "None";
  setFilter: (filter: "Episode" | "Year" | "None") => void;
}

const SortButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 0 16px;
  font-weight: 500;
  color: #4c4c4c;
  background-color: #fafbff;
  border: 1px solid #d7dae0;
  border-radius: 4px;
  cursor: pointer;
`;

const SortModal = styled.div<{ openModal: boolean }>`
  visibility: ${({ openModal }) => (openModal ? `initial` : `hidden`)};
  opacity: ${({ openModal }) => (openModal ? `1` : `0`)};
  transition: 0.15s;
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
  cursor: pointer;
  background-color: ${({ active }) => active && "#ebeef5"};

  &:hover {
    background-color: ${({ active }) => !active && "#fafbff"};
  }
`;

export const Filter = ({ filter, setFilter }: FilterProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <SortButton onClick={() => setOpenModal(!openModal)}>
        Sort by...
      </SortButton>

      <SortModal openModal={openModal}>
        <SortByText>Sort by</SortByText>

        <CloseIconWrapper onClick={() => setOpenModal(false)}>
          <CloseIcon size={16} />
        </CloseIconWrapper>

        <SortOption
          active={filter === "Episode"}
          onClick={() => setFilter(filter === "Episode" ? "None" : "Episode")}
        >
          Episode
        </SortOption>
        <SortOption
          active={filter === "Year"}
          onClick={() => setFilter(filter === "Year" ? "None" : "Year")}
        >
          Year
        </SortOption>
      </SortModal>
    </>
  );
};
