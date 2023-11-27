import { InputContainer } from "@/components/Input/styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { TitleHeader } from "../TitleHeader";
import { FormCard } from "../styles";
import { AddressFormContainer } from "./styles";
import { useFormContext } from 'react-hook-form'
import { PaymentMethodButton, PaymentMethodContainer } from "../PaymentMethodButton/styles";
import { defaultTheme } from "@/styles/themes/default";

interface FormData {
  cep: string,
  street: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  uf: string,
  paymentMethod: string,
  selectedCoffeList: Object,
}

export function AddressForm(){
  const { register, setValue, formState: {errors} } = useFormContext<FormData>()

  return(
    <AddressFormContainer>
      <h2>Complete seu pedido</h2>
      <FormCard>
        <TitleHeader 
          subtitle="Informe o endereço onde deseja receber seu pedido" 
          title="Endereço de entrega" 
          Icon={<MapPinLine color={defaultTheme["yellow-800"]}/>}
        />
        <div className="address__content">
          <InputContainer placeholder="Cep" $inputWidth={'12.5rem'} {...register("cep", {required: true})}/>
          <InputContainer placeholder="Rua" $inputWidth="100%" {...register("street", {required: true})}/>
          <div>
            <InputContainer className="input__fixed" placeholder="Número" {...register("number", {required: true})}/>
            <InputContainer placeholder="Complemento opicional" $textSpaceBetween="justify" {...register("complement")}/>
          </div>
          <div>
            <InputContainer className="input__fixed" placeholder="Bairro" {...register("neighborhood", {required: true})}/>
            <InputContainer placeholder="Cidade" {...register("city", {required: true})}/>
            <InputContainer className="uf__input" placeholder="UF" {...register("uf", {required: true})}/>
          </div>
        </div>
      </FormCard>
      <FormCard>
        <TitleHeader 
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          title="Pagamento"
          Icon={<CurrencyDollar color={defaultTheme["purple-500"]}/>}
        />
        <PaymentMethodContainer>
          <PaymentMethodButton type="button" onClick={() => setValue('paymentMethod',"creditCard")}>
            <CreditCard size={16} color={defaultTheme["purple-500"]}/>
            Cartão de crédito
          </PaymentMethodButton>
          <PaymentMethodButton type="button" onClick={() => setValue('paymentMethod',"debitCard")}>
            <Bank size={16} color={defaultTheme["purple-500"]}/>
            Cartão de débito
          </PaymentMethodButton>
          <PaymentMethodButton type="button" onClick={() => setValue('paymentMethod',"money")}>
            <Money size={16} color={defaultTheme["purple-500"]}/>
            Dinheiro
          </PaymentMethodButton>
        </PaymentMethodContainer>
      </FormCard>
    </AddressFormContainer>
  )
}