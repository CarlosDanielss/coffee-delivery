import { Trash } from "phosphor-react";

import { QuantityInput } from "../QuantityInput";

import {
  Info,
  RemoveButton,
  CardCartContainer,
  CardCartWrapping,
} from "./styles";
import { useCart } from "../../hooks/useCart";

interface CardCartProps {
  id: string;
  image: string;
  title: string;
  price: number;
  amount: number;
}

export function CardCart({ id, image, title, price, amount }: CardCartProps) {
  const { removeitem, increseNumberItems, reduceNumberItems } = useCart();

  function handleRemoveItem() {
    removeitem(id);
  }

  function onIncreseNumberItems() {
    increseNumberItems(id);
  }

  function onReduceNumberitems() {
    reduceNumberItems(id);
  }

  return (
    <CardCartContainer>
      <CardCartWrapping>
        <img src={image} />
        <Info>
          <h3>{title}</h3>
          <div>
            <QuantityInput
              count={amount}
              onAddQuantityItem={onIncreseNumberItems}
              onRemoveQuantityItem={onReduceNumberitems}
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </div>
        </Info>
      </CardCartWrapping>
      <span>R$ {price.toFixed(2)}</span>
    </CardCartContainer>
  );
}
