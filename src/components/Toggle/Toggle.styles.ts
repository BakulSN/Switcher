import { styled } from "styled-components";

export const ToggleButton = styled.button<{ $active: boolean }>`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${({ $active }) => ($active ? "#8f9eaf" : "#E0E0E0")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#8b75b3" : "#cfcfcf")};
  }

  &:disabled {
    background: ##999;
    color: #999;
    cursor: not-allowed;
  }
`;
