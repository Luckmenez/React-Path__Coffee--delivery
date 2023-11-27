import { Container } from "@/components/Container/Container";
import { PaymentContainer } from "./styles";
import { AddressForm } from "./AddressForm";
import { CoffeeAmountCard } from "./CoffeeAmountCard";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Zod from 'zod'
import { useContext } from "react";
import { CoffeeBuyingListContext } from "@/contexts/CoffeeBuyingList";
import { useNavigate } from "react-router-dom";
import { PaymentMethodsEnabled } from "@/utils/paymentMethodTranslation";

export function PaymentPage() {
  const navigate = useNavigate()

  const { selectedCoffeesList, handlePayment } = useContext(CoffeeBuyingListContext)

  const selectedCoffeeSchema = Zod.object(
    {
      id: Zod.number(),
      coffeePrice: Zod.number(),
      selectedAmount: Zod.number(),
    },
  )

  const coffeePaymentValidationSchema = Zod.object({
    cep: Zod.string().min(1,'Informe um cep').max(9, 'Informe um cep válido'),
    street: Zod.string().min(1,'Informe a rua'),
    number: Zod.string().min(1,'Informe o número da rua'),
    complement: Zod.string().optional(),
    neighborhood: Zod.string().min(1, 'Informe um bairro'),
    city: Zod.string().min(1,'Informe uma cidade'),
    uf: Zod.string().min(1,'Informe um estado'),
    paymentMethod: Zod.string().min(1,'Informe um método de pagamento').refine((payment) => {
      return payment === "creditCard" || "debitCard" || "money"
    }),
    selectedCoffeList: Zod.array(selectedCoffeeSchema)
  })

  type cofeePaymentData = Zod.infer<typeof coffeePaymentValidationSchema>
  
  const coffeePaymentForm = useForm<cofeePaymentData>({
    resolver: zodResolver(coffeePaymentValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: '',
      selectedCoffeList: selectedCoffeesList,
    }
  })

  const { handleSubmit, getValues } = coffeePaymentForm

  function handleCoffeePayment() {
    const deliveryInfo = getValues()
    handlePayment({
      cep: deliveryInfo.cep,
      city: deliveryInfo.city,
      neighborhood: deliveryInfo.neighborhood,
      number: deliveryInfo.number,
      paymentMethod: deliveryInfo.paymentMethod as PaymentMethodsEnabled,
      selectedCoffeList: [...deliveryInfo.selectedCoffeList],
      street: deliveryInfo.street,
      uf: deliveryInfo.uf,
      complement: deliveryInfo.complement
    })
    navigate('/finished')
  }

  return(
    <>
      <Container>
        <PaymentContainer>
          <form onSubmit={handleSubmit(handleCoffeePayment)}>
            <FormProvider {...coffeePaymentForm}>
              <AddressForm/>
              <CoffeeAmountCard/>
            </FormProvider>
          </form>
        </PaymentContainer>
      </Container>
    </>
  )
}