import { Container } from "@/components/Container/Container";
import { MainBanner } from "./MainBanner";
import { CoffeeList } from "./CoffeeList";


export function Home(){
  return(
    <>    
      <Container contrastedContainer>
        <MainBanner/>
      </Container>
      <Container>
        <main>
          <CoffeeList/>
        </main>
      </Container>
    </>
  )
}