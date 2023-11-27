import { styled } from "styled-components";



export const CoffeeBuyOptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeAmountSelectorContainer = styled.div`
  display: flex;
  height: 2rem;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 10px;
  gap: 0.5rem;
  padding: 0.5rem;

  & svg {
    fill: ${(props) => props.theme["purple-500"]};
  }

  & svg:hover {
    cursor: pointer;
  }
`
