import { styled } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";


export const ShoppingCartButtonContainer = styled.div<{
    $bgColor: keyof DefaultTheme, 
    $cartFillColor: keyof DefaultTheme
    $showNumber: boolean
  }>`
  background: ${(props) => props.theme[props.$bgColor]};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & svg {
    fill: ${(props) => props.theme[props.$cartFillColor]};
  }

  &:hover{
    cursor: pointer;
  }

  & > div {
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme[props.$cartFillColor]};
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    border-radius: 100%;
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: Roboto;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    visibility: ${(props) => props.$showNumber ? 'visible' : 'hidden'};
  }
`