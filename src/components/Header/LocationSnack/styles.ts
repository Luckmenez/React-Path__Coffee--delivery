import { styled } from "styled-components";


export const LocationSnackContainer = styled.div`
  display: flex;
  padding: .5rem;
  justify-content: center;
  align-items: center;
  gap: .25rem;
  border-radius: 6px;

  font-size: .875rem;
  line-height: 130%;

  color: ${(props) => props.theme["purple-300"]};

  background: ${(props) => props.theme["purple-100"]};
`