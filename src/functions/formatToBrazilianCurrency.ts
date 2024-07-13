
export function FormatToBrazilianCurrency(number: number) {
  return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(number);
}
