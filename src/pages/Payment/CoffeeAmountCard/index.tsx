import { SideBoardedCard } from "@/components/SideBoardedCard/styles";
import { CoffeeAmountCardContainer } from "./styles";
import { SubmitionButtonContainer } from "../SubmitionButton/style";


import { SelectedCoffeeList } from "../SelectedCoffeeList";
import { useContext } from "react";
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";
import { useFormContext } from "react-hook-form";

interface FormData {
  cep: string,
  street: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  uf: string,
  paymentMethod: string,
  selectedCoffeList: Object,
}

export function CoffeeAmountCard(){
  const { selectedCoffeesList } = useContext(CoffeeBuyingListContext)
  const { formState: {errors} } = useFormContext<FormData>()

  const totalPaymentAmount = selectedCoffeesList.reduce((acc, curr) => curr.coffeePrice * curr.selectedAmount + acc,0)
  
  return(
    <CoffeeAmountCardContainer>
      <h2>Cafés selecionados</h2>
      <SideBoardedCard $cardWidth="28rem" $cardHeigth="auto">  
        <SelectedCoffeeList/>
        <div className="payment--amount__container">
          <div className="items__value">
            <span className="items--text">Total de items</span>
            <span className="items--amount">R$ {totalPaymentAmount}</span>
          </div>
          <div className="items__value">
            <span className="items--text">Entrega</span>
            <span className="items--amount">R$ 3,50</span>
          </div>
          <div className="items__value">
            <span className="total__items--text">Total</span>
            <span className="total__items--amount">R$ {totalPaymentAmount + 3.5}</span>
          </div>
        </div>
        <SubmitionButtonContainer type="submit">Confirmar Pedido</SubmitionButtonContainer>
      </SideBoardedCard>
      <div className="errors__container">
        {errors?.cep && <p>-{errors?.cep.message}</p>}
        {errors?.street && <p>-{errors?.street.message}</p>}
        {errors?.number && <p>-{errors?.number.message}</p>}
        {errors?.complement && <p>-{errors?.complement.message}</p>}
        {errors?.neighborhood && <p>-{errors?.neighborhood.message}</p>}
        {errors?.city && <p>-{errors?.city.message}</p>}
        {errors?.uf && <p>-{errors?.uf.message}</p>}
        {errors?.paymentMethod && <p>-{errors?.paymentMethod.message}</p>}
        {errors?.selectedCoffeList && <p>-{errors?.selectedCoffeList.message}</p>}
      </div>
    </CoffeeAmountCardContainer>
  )
}