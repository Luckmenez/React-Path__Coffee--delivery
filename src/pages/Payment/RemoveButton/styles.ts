import { styled } from "styled-components";


export const RemoveButtonContainer = styled.button`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  border: 0;

  color: ${(props) => props.theme["base-text"]};
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  & svg {
    fill: ${(props) => props.theme["purple-500"]};
  }
`