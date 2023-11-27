import { ContainerStyles } from "./Container.styles";

interface ContainerProps {
  children: React.ReactNode
  contrastedContainer?: boolean
}

export function Container({children, contrastedContainer = false}:ContainerProps){
  return(
    <ContainerStyles $contrastedContainer={contrastedContainer}>
      {children}
    </ContainerStyles>
  )
}