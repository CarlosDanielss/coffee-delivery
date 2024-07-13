import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import Bike from "../../assets/images/Bike.svg";

import {
  Stamp,
  StampInfoContainer,
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
  SuccessInfo,
} from "./styles";

import { useLocale } from "../../hooks/useLocale";
import { useCart } from "../../hooks/useCart";

export function Success() {
  const { completeAddress } = useLocale();

  const { street, number, neighborhood, city, uf } = completeAddress;
  
  const { paymentMethod } = useCart();

  const listPaymentMethods = [
    {
      payment: "credit",
      text: "Cartão de Crédito",
    },
    {
      payment: "debit",
      text: "Cartão de Débito",
    },
    {
      payment: "cash",
      text: "Pagamento em Dinheiro",
    },
  ];

  const indexSelectedPaymentMethod = listPaymentMethods.findIndex((item) => {
    return item.payment == paymentMethod;
  });

  const selectedPaymentMethod = listPaymentMethods[indexSelectedPaymentMethod];

  return (
    <SuccessContainer>
      <SuccessContent data-aos="fade-right">
        <SuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </SuccessHeader>

        <SuccessInfo>
          <StampInfoContainer>
            <Stamp $stampColor="purple">
              <MapPin size={16} weight="fill" />
            </Stamp>
            <div>
              <p>
                Entrega em{" "}
                <b>
                  {street}, {number}
                </b>
              </p>
              <p>
                {neighborhood} - {city}, {uf}
              </p>
            </div>
          </StampInfoContainer>
          <StampInfoContainer>
            <Stamp $stampColor="yellow">
              <Timer size={16} weight="fill" />
            </Stamp>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </StampInfoContainer>
          <StampInfoContainer>
            <Stamp $stampColor="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </Stamp>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{selectedPaymentMethod.text}</strong>
            </div>
          </StampInfoContainer>
        </SuccessInfo>
      </SuccessContent>
      <img src={Bike} alt="Imagem de moto realizando entrega" data-aos="zoom-in"/>
    </SuccessContainer>
  );
}
