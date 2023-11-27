import { DiscriptiveItem } from "@/pages/Home/MainBanner/style";
import { OrderDiscriptionContainer } from "./styles";
import { defaultTheme } from "@/styles/themes/default";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";
import { paymentTranslation } from "@/utils/paymentMethodTranslation";

export function OrderDescription() {
  const { deliveryInfo } = useContext(CoffeeBuyingListContext)
  const { street, number, neighborhood, uf, city, paymentMethod } = deliveryInfo
  return(
    <OrderDiscriptionContainer>
      <DiscriptiveItem $bgcolor={defaultTheme["purple-500"]}>
        <div className="svg__container">
          {<MapPin weight="fill"/>}
        </div>
        <div className="address__description">
          <p>Entrega em <strong>{street}, {number}</strong></p>
          <p>{neighborhood} - {city}, {uf}</p>
        </div>
      </DiscriptiveItem>

      <DiscriptiveItem $bgcolor={defaultTheme["yellow-500"]}>
        <div className="svg__container">
          {<Timer weight="fill"/>}
        </div>
        <div className="address__description">
          <p>Previsão de entrega</p>
          <p><strong>20 min - 30 min</strong></p>
        </div>
      </DiscriptiveItem>

      <DiscriptiveItem $bgcolor={defaultTheme["yellow-800"]}>
        <div className="svg__container">
          {<CurrencyDollar weight="fill"/>}
        </div>
        <div className="address__description">
          <p>Pagamento na entrega</p>
          <p><strong>{paymentTranslation(paymentMethod)}</strong></p>
        </div>
      </DiscriptiveItem>
    </OrderDiscriptionContainer>
  )
}