import { CoffeeListContainer, SnackTypes, BuyerInfoContainer } from "./styles";
import { SideBoardedCard } from "@/components/SideBoardedCard/styles";
import { Image } from "@/components/Image";
import { CoffeeAmountSelector } from "@/components/CoffeeAmountSelector";
import { useContext } from "react";
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";



export function CoffeeList(){
  const { coffeeItemList, handleCoffeeListAmountChange, handleCoffeeSelection } = useContext(CoffeeBuyingListContext)

  return(
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>
      <div>
        { 
          coffeeItemList.map((coffeeItem) => {
            return (
              <SideBoardedCard key={coffeeItem.id}>
                <Image src={coffeeItem.coffeeImg}/>
                <div className="snacks__container">
                  {
                    coffeeItem.snackType.map((snack) => (
                      <SnackTypes key={snack.id}>
                        {snack.discription}
                      </SnackTypes>
                    ))
                  }
                </div>
                <h4>{coffeeItem.coffeeTitle}</h4>
                <p>{coffeeItem.coffeeDiscription}</p>
                <BuyerInfoContainer>
                  <div className="buyer__container">
                    <span className="money__type">R$</span>
                    <span className="coffee__value">{coffeeItem.coffeePrice.toString().replace(".",",")}</span>
                  </div>
                  <div>
                    <CoffeeAmountSelector 
                      handleAddCoffeAmount={() => handleCoffeeListAmountChange("plus", coffeeItem.id, coffeeItem.selectedAmount)}
                      handleDecreaseCoffeeAmount={()=> handleCoffeeListAmountChange("minus", coffeeItem.id, coffeeItem.selectedAmount)}
                      handleCoffeeSelection={() => handleCoffeeSelection(coffeeItem)}
                      selectedCoffeeAmount={coffeeItem.selectedAmount}
                    />
                  </div>
                </BuyerInfoContainer>
              </SideBoardedCard>
            )
          }
        )}
      </div>
    </CoffeeListContainer>
  )
}