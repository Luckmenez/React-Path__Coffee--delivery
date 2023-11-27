import { styled } from "styled-components";



export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  margin-top: 2rem;
  margin-bottom: 9.83rem;

  & > div {
    display: flex;
    gap: 3.375rem;
    flex-wrap: wrap;
    justify-content: start;
  }

  & h2 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const SnackTypes = styled.div`
  margin-top: 0.25rem;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border: 100px;
  background: ${(props) => props.theme["yellow-300"]};
  border-radius: 100px;

  color: ${(props) => props.theme["yellow-800"]};
  font-family: Roboto, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 13px */
  text-transform: uppercase;
`

export const BuyerInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2.0625rem;
  

  .coffee__value {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  .money__type {
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
  }
`