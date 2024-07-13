import { useNavigate, NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useLocale } from "../../hooks/useLocale";
import { LocaleInput } from "../LocaleInput";

import logo from "../../assets/Logo.png";

import { CartButton, HeaderContainer, LocaleButton } from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { state, clearSelectedState } = useLocale();

  const { cart } = useCart();

  const cartIsEmpty = cart.length === 0;

  const { selectedState, listAllStates } = state;

  function handleClearSelectedState() {
    clearSelectedState();
  }

  const navigate = useNavigate();

  return (
    <>
      {!selectedState && <LocaleInput listStates={listAllStates} />}

      <HeaderContainer>
        <NavLink to={"/"}>
          <img src={logo} alt="Logotipo da empresa" />
        </NavLink>

        <nav>
          <LocaleButton onClick={handleClearSelectedState}>
            <MapPin size={22} weight="fill" />
            {selectedState}
          </LocaleButton>

          <CartButton onClick={() => navigate("/checkout")}>
            <ShoppingCart size={22} weight="fill" />
            {!cartIsEmpty && <span>{cart.length}</span>}
          </CartButton>
        </nav>
      </HeaderContainer>
    </>
  );
}
