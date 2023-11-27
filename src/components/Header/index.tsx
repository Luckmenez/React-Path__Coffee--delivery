import { LocationSnack } from "./LocationSnack";
import { Image} from '@/components/Image'
import { HeaderContainer, ButtonsContainer } from "./styles";
import { ShoppingCartButton } from "../ShoppingCartButton";
import { useNavigate } from "react-router-dom"
import Logo from "@/assets/Logo.svg"


export function Header(){
  const navigate = useNavigate()

  function navigateToPayment() {
    navigate("/payment")
  }

  return(
    <HeaderContainer>
      <Image src={Logo}/>
      <ButtonsContainer>
        <LocationSnack/>
        <ShoppingCartButton onclick={navigateToPayment} showNumber/>
      </ButtonsContainer>
    </HeaderContainer>
  )
}