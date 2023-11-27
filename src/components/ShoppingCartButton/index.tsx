import { useContext } from "react";
import { ShoppingCartButtonContainer } from "./style";
import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";

interface ShoppingCartButtonProps {
  bgColor?: string;
  cartFillColor?: string
  onclick?: Function
  showNumber?: boolean
}


export function ShoppingCartButton({ 
  bgColor = "yellow-300", 
  cartFillColor = "yellow-800",
  onclick = () => {},
  showNumber = false,
}:ShoppingCartButtonProps){
  const {selectedCoffeesList } = useContext(CoffeeBuyingListContext)
  return(
    <ShoppingCartButtonContainer 
      onClick={() => onclick()} 
      $bgColor={bgColor} 
      $cartFillColor={cartFillColor}
      $showNumber={showNumber}
    >
      <ShoppingCart size={20} weight="fill" color=""/>
      <div>{selectedCoffeesList.length}</div>
    </ShoppingCartButtonContainer>
  )
}