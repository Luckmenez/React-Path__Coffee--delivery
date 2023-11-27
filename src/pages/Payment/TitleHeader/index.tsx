import { cloneElement } from "react";
import { TitleHeaderContainer } from "./styles";

interface ITitleHeader {
  Icon?: JSX.Element
  title?: string
  subtitle?: string
}


export function TitleHeader({Icon, title, subtitle}:ITitleHeader){
  return(
  <TitleHeaderContainer>
    {Icon && cloneElement(Icon, { size: 24 })}
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </TitleHeaderContainer>
  )
}