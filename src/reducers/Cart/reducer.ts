import { ActionTypes, cartActionsType } from "./actions";

export interface Cart {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  amount: number;
}

interface CartState {
  cart: Cart[];
}

export function CartReducer(state: CartState, action: cartActionsType) {
  switch (action.type) {
    case ActionTypes.add_item_to_cart: {
      const existingItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.newItem.id;
      });

      if (existingItemIndex !== -1) {
        const updateCart = [...state.cart];
        updateCart[existingItemIndex].amount += action.payload.newItem.amount;

        return { cart: updateCart };
      }

      return { cart: [...state.cart, action.payload.newItem] };
    }

    case ActionTypes.remove_item_to_cart: {
      const updatedItemList = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });

      return { cart: updatedItemList };
    }

    case ActionTypes.increase_number_items_in_cart: {
      const existingItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const updateCart = [...state.cart];
      updateCart[existingItemIndex].amount += 1;

      return { cart: updateCart };
    }

    case ActionTypes.reduce_number_items_in_cart: {
      const existingItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (state.cart[existingItemIndex].amount <= 1) {
        return state;
      }

      const updateCart = [...state.cart];
      updateCart[existingItemIndex].amount -= 1;

      return { cart: updateCart };
    }

    case ActionTypes.clear_cart: {
      return { cart: [] };
    }

    default:
      return state;
  }
}
