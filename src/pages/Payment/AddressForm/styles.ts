import { styled } from "styled-components";


export const AddressFormContainer = styled.div`
  flex: 0 0 60%;
  .address__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    & div {
      display: flex;
      gap: 0.75rem;
    }

    .input__fixed {
      max-width: 12.5rem;
    }

    .uf__input {
      max-width: 3.75rem;
    }
    
  }

  .error__input{
    display: flex;
    flex-direction: column;
  }
`