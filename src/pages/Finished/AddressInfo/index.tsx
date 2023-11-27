import { OrderDescription } from "../OrderDiscription";
import { AddressInfoCardContainer } from "./styles";


export function AddressInfo(){
  return(
    <AddressInfoCardContainer>
      <OrderDescription/>
    </AddressInfoCardContainer>
  )
}