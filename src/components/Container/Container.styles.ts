import { styled } from "styled-components";



export const ContainerStyles = styled.div<{$contrastedContainer:boolean}>`
  width: 100%;
  padding: 0rem 10rem;

  ${(props) => props.$contrastedContainer ?   'backdrop-filter: contrast(0.98)' : ''}
`