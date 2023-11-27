import { styled } from "styled-components";




export const PaymentContainer = styled.div`
  & form {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    width: 100%;
    gap: 1rem;
  
    & h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: 'Baloo 2';
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }
  }
`

export const FormCard = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["base-card"]};
  width: 100%;
  margin-top: 0.9rem;
`