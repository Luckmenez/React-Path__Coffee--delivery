import styled from "styled-components";


export const SideBoardedCard = styled.div<{
  $cardWidth?:string,
  $cardHeigth?:string
  }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 6px 36px;
  width: ${(props) => props.$cardWidth ? props.$cardWidth : '16rem'};
  height: ${(props) => props.$cardHeigth ? props.$cardHeigth : '19.375rem'};
  background: ${(props) => props.theme["base-card"]};
  padding: 1.25rem 1.5rem;


  img {
    margin-bottom: 0.5rem;
  }

  .snacks__container {
    display: flex;
    gap: 0.25rem;
  }

  & h4 {
    margin-top: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  & p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    line-height: 130%;
    margin-top: 0.5rem;
  }
`