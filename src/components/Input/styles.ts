import { styled } from "styled-components";

export const InputContainer = styled.input<{
  $inputWidth?: string
  $textSpaceBetween?: string
}>`
  display: flex;
  width: ${(props) => props.$inputWidth || '100%'};
  padding: 12px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  flex: 1 0 0;
  color: ${(props) => props.theme["base-label"]};
  font-family: Roboto;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align-last: ${(props) => props.$textSpaceBetween || "auto"};
`