import { styled } from "styled-components";


export const FinishedContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  & h1 {
    color: ${(props) => props.theme["yellow-800"]};
    font-family: Baloo 2;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; 
  }

  .subtitle {
    color: var(--base-subtitle, #403937);
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .address__info--container {
    display: flex;
    justify-content: space-between;
  }
`