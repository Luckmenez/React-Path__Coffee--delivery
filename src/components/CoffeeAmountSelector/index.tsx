import { Minus, Plus } from "@phosphor-icons/react";
import { ShoppingCartButton } from "../ShoppingCartButton";
import { CoffeeAmountSelectorContainer, CoffeeBuyOptionsContainer } from "./styles";

interface CoffeeAmountSelectorProps {
  selectedCoffeeAmount: number,
  handleAddCoffeAmount: Function,
  handleDecreaseCoffeeAmount: Function,
  handleCoffeeSelection: (coffeeSelection: any) => void
}


export function CoffeeAmountSelector({ 
    selectedCoffeeAmount, 
    handleAddCoffeAmount, 
    handleDecreaseCoffeeAmount,
    handleCoffeeSelection 
  }:CoffeeAmountSelectorProps
  ){  
  return(
    <CoffeeBuyOptionsContainer>
      <CoffeeAmountSelectorContainer>
        <Plus size={14} weight="light" onClick={() => handleAddCoffeAmount()}/>
          { selectedCoffeeAmount }
        <Minus size={14} weight="light" onClick={() => handleDecreaseCoffeeAmount()}/>
      </CoffeeAmountSelectorContainer>
      <ShoppingCartButton 
        onclick={handleCoffeeSelection}
        bgColor="purple-300"
        cartFillColor="white"
      />
    </CoffeeBuyOptionsContainer>
    )
}