import { styled } from "styled-components";



export const SelectedCoffeeListContainer = styled.div`
  width: 100%;

  .coffee__amount--container{
    display: flex;
    flex-direction: column;
  }

  .selected--coffee__amount{
    display: flex;
    gap: 1.25rem;
  }

  .selected--coffee__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    gap: 1.25rem;
    margin: 24px 0;
    
    &:first-child{
      margin-top: 0;
    }

    & img {
      width: 64px;
      height: 64px;
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
    }

  }

  .coffee__price{
    color: ${(props) => props.theme["base-text"]};
    text-align: right;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */
  }

  hr {
    width: 100%;
    stroke-width: 1px;
    border-top: 1px solid ${(props) => props.theme["base-button"]};
  }
`