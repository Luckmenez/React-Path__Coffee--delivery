import ExpressoCoffee from "@/assets/CoffeeListImg/expresso_tradicional.svg"
import ExpressoAmericano from "@/assets/CoffeeListImg/expresso_americano.svg"
import ExpressoCremoso from "@/assets/CoffeeListImg/expresso_cremoso.svg"
import ExpressoGelado from "@/assets/CoffeeListImg/expresso_gelado.svg"
import CafeComLeite from "@/assets/CoffeeListImg/cafe_com_leite.svg"
import Latte from "@/assets/CoffeeListImg/latte.svg"
import Capuccino from "@/assets/CoffeeListImg/capuccino.svg"
import Macchiato from "@/assets/CoffeeListImg/macchiato.svg"
import Mocaccino from "@/assets/CoffeeListImg/mocaccino.svg"
import ChocolateQuente from "@/assets/CoffeeListImg/chocolate_quente.svg"
import Cubano from "@/assets/CoffeeListImg/cubano.svg"
import Havaiano from "@/assets/CoffeeListImg/havaiano.svg"
import Arabe from "@/assets/CoffeeListImg/arabe.svg"
import Irlandes from "@/assets/CoffeeListImg/irlandes.svg"

export const coffeeListItemsMock = [
  {
    id: 1,
    coffeeImg: ExpressoCoffee,
    snackType: [{ 
      id: 1,
      discription: "Tradicional"
    }],
    coffeeTitle: "Expresso Tradicional",
    coffeeDiscription: "O tradicional café feito com água quente e grãos moídos",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 2,
    coffeeImg: ExpressoAmericano,
    snackType: [{ 
      id: 1,
      discription: "Tradicional"
    }],
    coffeeTitle: "Expresso Americano",
    coffeeDiscription: "Expresso diluído, menos intenso que o tradicional",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 3,
    coffeeImg: ExpressoCremoso,
    snackType: [{ 
      id: 1,
      discription: "Tradicional"
    }],
    coffeeTitle: "Expresso Cremoso",
    coffeeDiscription: "Café expresso tradicional com espuma cremosa",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 4,
    coffeeImg: ExpressoGelado,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Gelado"
      }
    ],
    coffeeTitle: "Expresso Gelado",
    coffeeDiscription: "Bebida preparada com café expresso e cubos de gelo",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 5,
    coffeeImg: CafeComLeite,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Café com Leite",
    coffeeDiscription: "Meio a meio de expresso tradicional com leite vaporizado",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 6,
    coffeeImg: Latte,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Latte",
    coffeeDiscription: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 7,
    coffeeImg: Capuccino,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Capuccino",
    coffeeDiscription: "Bebida com canela feita de doses iguais de café, leite e espuma",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 8,
    coffeeImg: Macchiato,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Macchiato",
    coffeeDiscription: "Café expresso misturado com um pouco de leite quente e espuma",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 9,
    coffeeImg: Mocaccino,
    snackType: [
      { 
        id: 1,
        discription: "Tradicional"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Mocaccino",
    coffeeDiscription: "Café expresso com calda de chocolate, pouco leite e espuma",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 10,
    coffeeImg: ChocolateQuente,
    snackType: [
      { 
        id: 1,
        discription: "Especial"
      },
      {
        id:2,
        discription: "Com Leite"
      }
    ],
    coffeeTitle: "Chocolate Quente",
    coffeeDiscription: "Bebida feita com chocolate dissolvido no leite quente e café",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 11,
    coffeeImg: Cubano,
    snackType: [
      { 
        id: 1,
        discription: "Especial"
      },
      {
        id:2,
        discription: "Alcoolico"
      },
      {
        id:3,
        discription: "Gelado"
      }
    ],
    coffeeTitle: "Cubano",
    coffeeDiscription: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 12,
    coffeeImg: Havaiano,
    snackType: [
      { 
        id: 1,
        discription: "Especial"
      },
    ],
    coffeeTitle: "Havaiano",
    coffeeDiscription: "Bebida adocicada preparada com café e leite de coco",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 13,
    coffeeImg: Arabe,
    snackType: [
      { 
        id: 1,
        discription: "Especial"
      },
    ],
    coffeeTitle: "Árabe",
    coffeeDiscription: "Bebida preparada com grãos de café árabe e especiarias",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
  {
    id: 14,
    coffeeImg: Irlandes,
    snackType: [
      { 
        id: 1,
        discription: "Especial"
      },
      { 
        id: 2,
        discription: "Alcoólico"
      },
    ],
    coffeeTitle: "Irlandês",
    coffeeDiscription: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    coffeePrice: 9.99,
    selectedAmount: 0,
  },
]