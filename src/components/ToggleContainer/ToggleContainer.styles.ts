import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxshadow};
`;
