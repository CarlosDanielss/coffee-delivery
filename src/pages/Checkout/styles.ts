import styled from "styled-components";

import { mixins } from "../../styles/mixins";
import { breakpoints } from "../../styles/breakpoints";

export const CheckoutContainer = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px 20px;

  > div {
    display: flex;
    gap: 32px;

    @media ${breakpoints.lg} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const CompleteOrderContainer = styled.section`
  width: 100%;
  max-width: 640px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const TitleSection = styled.h2`
  margin-bottom: 15px;

  ${mixins.fonts.titleXS}
  color: ${(props) => props.theme["base-subtitle"]};
`;

const BaseContainerForm = styled.div`
  padding: 40px;

  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
`;

export const AddressContainer = styled(BaseContainerForm)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BaseHeaderForm = styled.header`
  display: flex;
  gap: 8px;

  > div {
    > span {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    > p {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const HeaderAddressForm = styled(BaseHeaderForm)`
  > svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAdrress fullAdrress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;

  @media ${breakpoints.sm} {
    grid-template-areas:
      "cep cep"
      "street street"
      "number number"
      "fullAdrress fullAdrress"
      "neighborhood neighborhood"
      "city state";
    grid-template-columns: 1fr 1fr;
  }
`;

export const PaymentContainer = styled(BaseContainerForm)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export const HeaderPaymentForm = styled(BaseHeaderForm)`
  > svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const PaymentButtonWrapping = styled.div`
  display: flex;
  gap: 12px;

  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

export const InputErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-size: 0.7rem;
  font-weight: 400;
  color: red;
`;

export const SelectedCoffeesContainer = styled.section`
  width: 100%;
  max-width: 448px;

  @media ${breakpoints.lg} {
    max-width: 640px;
  }
`;

export const WishListContainer = styled(BaseContainerForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BaseWishBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WishListContent = styled(BaseWishBox)`
  max-height: 350px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const PurchaseDetailsContainer = styled(BaseWishBox)``;

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span:nth-child(1) {
      ${mixins.fonts.textS}
    }

    > span:nth-child(2) {
      ${mixins.fonts.textM}
    }

    > h4 {
      ${mixins.fonts.textL};
      font-weight: 800;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

const BaseButton = styled.button`
  padding: 12px 0;

  display: flex;
  justify-content: center;

  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 6px;
  transition: all 0.2s;
  background: ${(props) => props.theme.yellow};

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ConfirmOrder = styled(BaseButton)`
  align-items: center;

  > svg {
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const EmptyCartContainer = styled.section`
  width: 100%;
  max-width: 440px;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  > h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]};

    @media ${breakpoints.sm} {
      font-size: 1.8em;
    }
  }

  > h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme["base-label"]}
  }
`;

export const BackToShopping = styled(BaseButton)`
  gap: 4px;
`;
