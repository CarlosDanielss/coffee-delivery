import { Cart } from "./reducer";

export enum ActionTypes {
  add_item_to_cart = "add_item_to_cart",
  remove_item_to_cart = "remove_item_to_cart",
  increase_number_items_in_cart = "increase_number_items_in_cart",
  reduce_number_items_in_cart = "reduce_number_items_in_cart",
  clear_cart = "clear_cart"
}

interface addItemToCartActionType {
  type: ActionTypes.add_item_to_cart;
  payload: {
    newItem: Cart;
  };
}

interface removeItemToCartActionType {
  type: ActionTypes.remove_item_to_cart;
  payload: {
    id: string;
  };
}

interface increaseNumberItemsInCartActionType {
  type: ActionTypes.increase_number_items_in_cart;
  payload: {
    id: string;
  };
}

interface reduceNumberItemsInCartActionType {
  type: ActionTypes.reduce_number_items_in_cart;
  payload: {
    id: string;
  };
}

interface clearCartActionType {
  type: ActionTypes.clear_cart;
}

export type cartActionsType =
  | addItemToCartActionType
  | removeItemToCartActionType
  | increaseNumberItemsInCartActionType
  | reduceNumberItemsInCartActionType
  | clearCartActionType;

export function addItemToCartAction(newItem: Cart): addItemToCartActionType {
  return {
    type: ActionTypes.add_item_to_cart,
    payload: {
      newItem,
    },
  };
}

export function removeItemToCartAction(id: string): removeItemToCartActionType {
  return {
    type: ActionTypes.remove_item_to_cart,
    payload: {
      id,
    },
  };
}

export function increaseNumberItemsInCartAction(
  id: string
): increaseNumberItemsInCartActionType {
  return {
    type: ActionTypes.increase_number_items_in_cart,
    payload: {
      id,
    },
  };
}

export function reduceNumberItemsInCartAction(
  id: string
): reduceNumberItemsInCartActionType {
  return {
    type: ActionTypes.reduce_number_items_in_cart,
    payload: {
      id,
    },
  };
}

export function clearCartAction(): clearCartActionType {
  return {
    type: ActionTypes.clear_cart
  }
}
