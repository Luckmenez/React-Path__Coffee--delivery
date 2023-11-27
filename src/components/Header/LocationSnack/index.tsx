import { LocationSnackContainer } from "./styles";
import { MapPin } from "@phosphor-icons/react"



export function LocationSnack(){
  return(
  <LocationSnackContainer>
    <MapPin size={22} weight="fill"/>
    Porto Alegre, RS
  </LocationSnackContainer>)
}