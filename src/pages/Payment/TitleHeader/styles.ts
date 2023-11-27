import { styled } from "styled-components";


export const TitleHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  & div {
    & h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; 
    }
  
    & p {
      display: flex;
      height: 1.3125rem;
      flex-direction: column;
      justify-content: center;
      align-self: stretch;
      color: ${(props) => props.theme["base-text"]};
      font-family: Roboto;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
`