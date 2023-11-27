import { styled } from "styled-components";

export const CoffeeAmountCardContainer = styled.div`
  h2 {
    margin-bottom: 0.9rem;
  }

  .items__value {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .items--text {
      color: ${(props) => props.theme["base-text"]};
      text-align: right;
      font-family: Roboto;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    .items--amount {
      color: ${(props) => props.theme["base-text"]};
      text-align: right;
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    .total__items--text {
      color: ${(props) => props.theme["base-subtitle"]};
      text-align: right;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    .total__items--amount {
      color: ${(props) => props.theme["base-subtitle"]};
      text-align: right;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  }

  .payment--amount__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin: 24px 0;
  }

  .errors__container {
    margin: 1rem;
    color: red;
  }
`