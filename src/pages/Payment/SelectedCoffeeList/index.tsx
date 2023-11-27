import { useContext } from "react";
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";
import { CoffeeAmountSelectorContainer } from "@/components/CoffeeAmountSelector/styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { RemoveButtonContainer } from "../RemoveButton/styles";
import { Image } from "@/components/Image";
import { SelectedCoffeeListContainer } from "./styles";
import { useFormContext } from "react-hook-form";


export function SelectedCoffeeList() {
  const { selectedCoffeesList, handleCoffeeListAmountChange } = useContext(CoffeeBuyingListContext)
  const { setValue } = useFormContext()
  return(
    <>
      {
        selectedCoffeesList.map((selectedCoffee) => {
          return(
            <SelectedCoffeeListContainer key={selectedCoffee.id}>            
              <div className="selected--coffee__container">
                <div className="selected--coffee__amount">
                  <Image src={selectedCoffee.coffeeImg}/>
                  <div className="coffee__amount--container">
                    <span>{selectedCoffee.coffeeTitle}</span>
                    <div>
                      <CoffeeAmountSelectorContainer>
                        <Plus size={14} weight="light" onClick={() => {
                          handleCoffeeListAmountChange("plus", selectedCoffee.id, selectedCoffee.selectedAmount)
                          setValue('paymentMethod',selectedCoffeesList)
                          
                        }}/>
                          { selectedCoffee.selectedAmount }
                        <Minus size={14} weight="light" onClick={() => {
                          handleCoffeeListAmountChange("minus", selectedCoffee.id, selectedCoffee.selectedAmount)
                          setValue('paymentMethod',selectedCoffeesList)
                        }}/>
                      </CoffeeAmountSelectorContainer>
                      <RemoveButtonContainer onClick={() => {
                        handleCoffeeListAmountChange("remove", selectedCoffee.id, selectedCoffee.selectedAmount)
                      }}>
                        <Trash size={16}/> Remover
                      </RemoveButtonContainer>
                    </div>
                  </div>
                </div>
                <span className="coffee__price">R$ {selectedCoffee.coffeePrice}</span>
              </div>
              <hr />
            </SelectedCoffeeListContainer>
          )
        })
      }
    </>
  )
}