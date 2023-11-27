import { Container } from "@/components/Container/Container";
import { FinishedContainer } from "./styles";
import { AddressInfo } from "./AddressInfo";
import Ilustration from "@/assets/Illustration.svg"




export function Finished() {
  return(
    <Container>
      <FinishedContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span className="subtitle">Agora é só aguardar que logo o café chegará até você</span>
        <div className="address__info--container">
          <AddressInfo/>
          <img src={Ilustration} alt="" />
        </div>
      </FinishedContainer>
    </Container>
  )
}