import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Cart, CartReducer } from "../reducers/Cart/reducer";
import {
  addItemToCartAction,
  clearCartAction,
  increaseNumberItemsInCartAction,
  reduceNumberItemsInCartAction,
  removeItemToCartAction,
} from "../reducers/Cart/actions";

interface CartContextType {
  cart: Cart[];
  paymentMethod: string | null;
  addItem: (item: Cart) => void;
  removeitem: (id: string) => void;
  increseNumberItems: (id: string) => void;
  reduceNumberItems: (id: string) => void;
  selectPaymentMethod: (payment: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const [cartState, dispatch] = useReducer(
    CartReducer,
    { cart: [] },
    (inicialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return inicialState;
    }
  );

  const { cart } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function addItem(item: Cart) {
    dispatch(addItemToCartAction(item));
  }

  function removeitem(id: string) {
    dispatch(removeItemToCartAction(id));
  }

  function increseNumberItems(id: string) {
    dispatch(increaseNumberItemsInCartAction(id));
  }

  function reduceNumberItems(id: string) {
    dispatch(reduceNumberItemsInCartAction(id));
  }

  function selectPaymentMethod(payment: string) {
    setPaymentMethod(payment);
    dispatch(clearCartAction());
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        paymentMethod,
        addItem,
        removeitem,
        increseNumberItems,
        reduceNumberItems,
        selectPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
