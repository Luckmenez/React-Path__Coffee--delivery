import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { PaymentPage } from "./pages/Payment";
import { Finished } from "./pages/Finished";

export function  Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/finished" element={<Finished/>}/>
      </Route>
    </Routes>
  )
}