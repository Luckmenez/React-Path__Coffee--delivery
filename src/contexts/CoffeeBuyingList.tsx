import { IDeliveryInfo, selectedCoffeePrice } from "@/@types/deliveryInfo";
import { coffeeListItemsMock } from "@/utils/coffeeListItems";
import { PaymentMethodsEnabled } from "@/utils/paymentMethodTranslation";
import { createContext, useState } from "react";

export type coffeeType = typeof coffeeListItemsMock

interface coffeeContextType {
  coffeeItemList: coffeeType
  handleCoffeeListAmountChange: (operationType: 'plus'| 'minus'|'remove', id: number, selectedAmount:number) => void,
  selectedCoffeesList: coffeeType,
  handleCoffeeSelection: (coffeeSelection: any) => void,
  handlePayment: (deliveryInfo: IDeliveryInfo) => void
  deliveryInfo: IDeliveryInfo
}

export const CoffeeBuyingListContext = createContext({} as  coffeeContextType)

interface coffeeBuyingContextProviderProps {
  children: React.ReactNode
}

export function CofeeBuyingContextProvider({children}:coffeeBuyingContextProviderProps){
  const [ coffeeItemList, setCoffeItemList ] = useState<coffeeType>(coffeeListItemsMock)
  const [ selectedCoffeesList, setSelectedCoffeesList ] = useState<coffeeType>([])
  const [ deliveryInfo, setDeliveryInfo] = useState<IDeliveryInfo>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
    paymentMethod: '' as PaymentMethodsEnabled,
    selectedCoffeList: [] as selectedCoffeePrice[],
  })

  

  function handleCoffeeListAmountChange(operationType: "plus"|"minus"|"remove", id:number, selectedAmount:number){
    const changeAmountFunction = {
      plus: () => {
        const selectedCoffeeItem = coffeeItemList.find((coffeeItem) => coffeeItem.id === id)
        if (selectedCoffeeItem) {
          selectedCoffeeItem.selectedAmount++
          setCoffeItemList([ ...coffeeItemList ])
        }
      },
      minus: () => {
        if(selectedAmount > 0){
          const selectedCoffeeItem = selectedCoffeesList.find((coffeeItem) => coffeeItem.id === id)
          if (selectedCoffeeItem) {
            selectedCoffeeItem.selectedAmount--
            setCoffeItemList([ ...coffeeItemList ])
          }
        }
      },
      remove: () => {
        if(selectedAmount > 0) {
          const updatedCoffeList = selectedCoffeesList.filter((cofeeItem) => cofeeItem.id !== id)
          setSelectedCoffeesList([ ...updatedCoffeList ])

          console.log(updatedCoffeList)
        }
      }
    }
    changeAmountFunction[operationType]()
  }

  function handleCoffeeSelection(coffeeItem: any) {
    const coffeeIndexOrNotExists = selectedCoffeesList.indexOf(coffeeItem)

    if(coffeeIndexOrNotExists < 0){
      return setSelectedCoffeesList((state) => [...state, coffeeItem])
    }

    const updatedCoffeeList = selectedCoffeesList.map((coffee, index) => {
      if(coffeeIndexOrNotExists === index){
        return coffeeItem
      }
      return coffee
    })
    console.log('qq ',updatedCoffeeList)
    setSelectedCoffeesList([...updatedCoffeeList])
  }

  function handlePayment(deliveryInfo: IDeliveryInfo) {
    setDeliveryInfo({
      ...deliveryInfo, 
      complement: deliveryInfo.complement ? deliveryInfo.complement : '',
    })
  }

  return(
    <CoffeeBuyingListContext.Provider value={{         
      coffeeItemList, 
      handleCoffeeListAmountChange,
      selectedCoffeesList,
      handleCoffeeSelection,
      deliveryInfo,
      handlePayment,
    }}>
      {children}
    </CoffeeBuyingListContext.Provider>
  )
}

