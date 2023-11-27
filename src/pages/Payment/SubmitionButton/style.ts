import { styled } from "styled-components";


export const SubmitionButtonContainer = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["yellow-500"]};

  &:hover {
    cursor: pointer;
  }
`