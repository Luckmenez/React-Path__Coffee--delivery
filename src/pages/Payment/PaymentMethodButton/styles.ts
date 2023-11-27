import { styled } from "styled-components";


export const PaymentMethodContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const PaymentMethodButton = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  border: 0px;

  color: ${(props) => props.theme["base-text"]};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  &:focus {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }

  &:hover {
    cursor: pointer;
  }
`