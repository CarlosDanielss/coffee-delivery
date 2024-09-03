import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Bank,
  CircleNotch,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  ShoppingCart,
} from "phosphor-react";
import { toast } from "sonner";

import { FormatToBrazilianCurrency } from "../../functions/formatToBrazilianCurrency";
import { useLocale } from "../../hooks/useLocale";
import { useCart } from "../../hooks/useCart";

import { TextInput } from "../../components/TextInput";
import { PaymentButton } from "./PaymentButton";
import { CardCart } from "../../components/CardCart";

import {
  AddressContainer,
  AddressForm,
  BackToShopping,
  CheckoutContainer,
  CompleteOrderContainer,
  ConfirmOrder,
  EmptyCartContainer,
  HeaderAddressForm,
  HeaderPaymentForm,
  InputErrorMessage,
  PaymentButtonWrapping,
  PaymentContainer,
  PurchaseDetails,
  PurchaseDetailsContainer,
  SelectedCoffeesContainer,
  TitleSection,
  WishListContainer,
  WishListContent,
} from "./styles";
import { GetZipCodeQuery } from "../../api/getZipCodeQuery";

const newPurchaseFormValidationSchema = z.object({
  cep: z
    .string()
    .length(8, "O CEP deve ter exatamente 8 dígitos")
    .regex(/^\d+$/, "O CEP deve conter apenas números"),
  street: z.string(),
  number: z.string().min(1, "O número deve ter pelo menos 1 digito"),
  fullAdrress: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type newPurchaseFormData = z.infer<
  typeof newPurchaseFormValidationSchema
>;

interface AddressQueryProps {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Checkout() {
  const { cart, selectPaymentMethod } = useCart();

  const { setFullAddress } = useLocale();

  const navigate = useNavigate();

  const [isSendingForm, setIsSendingForm] = useState(false);

  const [listPrices, setListPrices] = useState({
    items: 0,
    delivery: 8.9,
    total: 0,
  });

  useEffect(() => {
    const valueEachItem = cart.map((item) => {
      return item.amount * item.price;
    });

    const totalPriceItems = valueEachItem.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue;
      },
      0
    );

    setListPrices((prev) => {
      return {
        items: totalPriceItems,
        delivery: prev.delivery,
        total: totalPriceItems + prev.delivery,
      };
    });
  }, [cart]);

  const formattedTotalValueItems = FormatToBrazilianCurrency(listPrices.items);

  const formattedDeliveryValue = FormatToBrazilianCurrency(listPrices.delivery);

  const formattedTotalValue = FormatToBrazilianCurrency(listPrices.total);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<newPurchaseFormData>({
    resolver: zodResolver(newPurchaseFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      fullAdrress: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });

  function handleOrderForm(data: newPurchaseFormData) {
    setIsSendingForm(true);

    setTimeout(() => {
      const { paymentMethod, ...rest } = data;

      setFullAddress(rest);
      selectPaymentMethod(paymentMethod);
      navigate("/success");

      toast.success("Pedido concluído com sucesso.");
    }, 1500);
  }

  function handleToShoppingPage() {
    navigate("/");
  }

  const observingSelectedPaymentMethod = watch("paymentMethod");

  const observingZipCode = watch("cep");

  useEffect(() => {
    setTimeout(() => {
      if (observingZipCode.length === 0) {
        reset();
      }

      if (observingZipCode !== undefined && observingZipCode.length === 8) {
        GetZipCodeQuery(observingZipCode)
          .then((data) => {
            if (data.erro) {
              toast.warning("Verifique se o CEP está correto.");
            }

            return data;
          })
          .then(({ logradouro, bairro, localidade, uf }: AddressQueryProps) => {
            setValue("street", logradouro);
            setValue("neighborhood", bairro);
            setValue("city", localidade);
            setValue("uf", uf);
          });
      }
    }, 500);
  }, [observingZipCode, setValue, reset]);

  const haveItemsInCart = cart.length !== 0;

  return (
    <CheckoutContainer>
      {haveItemsInCart ? (
        <div>
          <CompleteOrderContainer>
            <TitleSection>Complete seu pedido</TitleSection>

            <form
              id="completeOrderForm"
              onSubmit={handleSubmit(handleOrderForm)}
            >
              <AddressContainer>
                <HeaderAddressForm>
                  <MapPinLine size={22} />

                  <div>
                    <span>Endereço de Entrega</span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </HeaderAddressForm>

                <AddressForm>
                  <TextInput
                    type="number"
                    {...register("cep")}
                    placeholder="CEP"
                    containerPosition="cep"
                    error={errors.cep}
                  />

                  <TextInput
                    type="text"
                    {...register("street")}
                    placeholder={"Rua"}
                    containerPosition="street"
                    error={errors.street}
                    readOnly
                  />

                  <TextInput
                    type="number"
                    {...register("number")}
                    placeholder="Número"
                    containerPosition="number"
                    error={errors.number}
                  />

                  <TextInput
                    type="text"
                    {...register("fullAdrress")}
                    placeholder="Complemento"
                    containerPosition="fullAdrress"
                    autoComplete="off"
                    optional={true}
                    error={errors.fullAdrress}
                  />

                  <TextInput
                    type="text"
                    {...register("neighborhood")}
                    placeholder={"Bairro"}
                    containerPosition="neighborhood"
                    error={errors.neighborhood}
                    readOnly
                  />

                  <TextInput
                    type="text"
                    {...register("city")}
                    placeholder={"Cidade"}
                    containerPosition="city"
                    error={errors.city}
                    readOnly
                  />

                  <TextInput
                    type="text"
                    {...register("uf")}
                    placeholder={"UF"}
                    containerPosition="state"
                    error={errors.uf}
                    readOnly
                  />
                </AddressForm>
              </AddressContainer>

              <PaymentContainer>
                <HeaderPaymentForm>
                  <CurrencyDollar size={22} />

                  <div>
                    <span>Pagamento</span>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </HeaderPaymentForm>

                <div>
                  <PaymentButtonWrapping>
                    <PaymentButton
                      isSelected={observingSelectedPaymentMethod === "credit"}
                      {...register("paymentMethod")}
                      value="credit"
                    >
                      <CreditCard size={16} />
                      <span>CARTÂO DE CRÉDITO</span>
                    </PaymentButton>

                    <PaymentButton
                      isSelected={observingSelectedPaymentMethod === "debit"}
                      {...register("paymentMethod")}
                      value="debit"
                    >
                      <Bank size={16} />
                      <span>CARTÂO DE DÉBITO</span>
                    </PaymentButton>

                    <PaymentButton
                      isSelected={observingSelectedPaymentMethod === "cash"}
                      {...register("paymentMethod")}
                      value="cash"
                    >
                      <Money size={16} />
                      <span>DINHEIRO</span>
                    </PaymentButton>
                  </PaymentButtonWrapping>

                  {errors.paymentMethod && (
                    <InputErrorMessage>
                      {errors.paymentMethod.message}
                    </InputErrorMessage>
                  )}
                </div>
              </PaymentContainer>
            </form>
          </CompleteOrderContainer>

          <SelectedCoffeesContainer>
            <TitleSection>Cafés selecionados</TitleSection>

            <WishListContainer>
              <WishListContent>
                {cart.map((item) => {
                  return (
                    <CardCart
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                    />
                  );
                })}
              </WishListContent>

              <PurchaseDetailsContainer>
                <PurchaseDetails>
                  <div>
                    <span>Total de itens</span>
                    <span>{formattedTotalValueItems}</span>
                  </div>

                  <div>
                    <span>Entrega</span>
                    <span>{formattedDeliveryValue}</span>
                  </div>

                  <div>
                    <h4>Total</h4>
                    <h4>{formattedTotalValue}</h4>
                  </div>
                </PurchaseDetails>

                <ConfirmOrder
                  form="completeOrderForm"
                  type="submit"
                  disabled={isSendingForm}
                >
                  {isSendingForm ? (
                    <CircleNotch size={28} />
                  ) : (
                    "CONFIRMAR PEDIDO"
                  )}
                </ConfirmOrder>
              </PurchaseDetailsContainer>
            </WishListContainer>
          </SelectedCoffeesContainer>
        </div>
      ) : (
        <EmptyCartContainer>
          <h1>Seu carrinho está vazio.</h1>
          <h2>Não perca nossas promoções incríveis!</h2>
          <BackToShopping onClick={handleToShoppingPage}>
            <ShoppingCart size={18} weight="fill" />
            Voltar às Compras
          </BackToShopping>
        </EmptyCartContainer>
      )}
    </CheckoutContainer>
  );
}
