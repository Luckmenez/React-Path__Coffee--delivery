import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/globals"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CofeeBuyingContextProvider } from "./contexts/CoffeeBuyingList"

// export const CoffeeContext = createContext({})

function App() {

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CofeeBuyingContextProvider>
          <Router/>
        </CofeeBuyingContextProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
