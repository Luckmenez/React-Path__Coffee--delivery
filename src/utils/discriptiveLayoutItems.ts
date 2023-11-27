import { defaultTheme } from "@/styles/themes/default"
import { ShoppingCart, Package, Timer } from "@phosphor-icons/react"

export const discriptiveItems = [
  {
    id: 1,
    icon: ShoppingCart,
    discription: 'Compra simples e segura',
    bgColor: defaultTheme["yellow-800"]
  },
  {
    id: 2,
    icon: Package,
    discription: 'Embalagem mantém o café intacto',
    bgColor: defaultTheme["base-text"]
  },
  {
    id: 3,
    icon: Timer,
    discription: 'Entrega rápida e rastreada',
    bgColor: defaultTheme["yellow-500"]
  },
  {
    id: 4,
    icon: Timer,
    discription: 'O café chega fresquinho até você',
    bgColor: defaultTheme["purple-500"]
  },
]


export type discriptiveItemsTypes = typeof discriptiveItems[0]