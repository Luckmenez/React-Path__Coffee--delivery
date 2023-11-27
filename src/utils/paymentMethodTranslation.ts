export type PaymentMethodsEnabled = "creditCard" | "debitCard" | "money"

export function paymentTranslation(payment: PaymentMethodsEnabled) {
  const paymentTranslation = {
    creditCard: "Cartão de crédito",
    debitCard: "Cartão de débito",
    money: "Dinheiro"
  }

  return paymentTranslation[payment] || ""
}