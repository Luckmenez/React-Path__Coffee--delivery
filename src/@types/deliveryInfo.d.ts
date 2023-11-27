import { coffeeType } from "@/contexts/CoffeeBuyingList";
import { PaymentMethodsEnabled } from "@/utils/paymentMethodTranslation";

export interface selectedCoffeePrice {
  id: number
  coffeePrice: number
  selectedAmount: number
}

export interface IDeliveryInfo {
  cep: string,
  street: string,
  number: string,
  complement?: string,
  neighborhood: string,
  city: string,
  uf: string,
  paymentMethod: PaymentMethodsEnabled,
  selectedCoffeList: selectedCoffeePrice[]
}