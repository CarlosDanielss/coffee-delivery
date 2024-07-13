import { ShoppingCartSimple } from "phosphor-react";

import { useCart } from "../../hooks/useCart";

import { toast } from "sonner";

import {
  BuyButton,
  CardCatalogContainer,
  Info,
  QuantityContainer,
  Tags,
} from "./styles";

import { QuantityInput } from "../QuantityInput";
import { useState } from "react";

interface CardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function CardCatalog({
  id,
  title,
  description,
  tags,
  price,
  image,
}: CardProps) {
  const [count, setCount] = useState(1);

  const { addItem } = useCart();

  function addQuantityItem() {
    setCount((prev) => prev + 1);
  }

  function removeQuantityItem() {
    setCount((prev) => {
      if (prev <= 1) {
        return 1;
      }

      return prev - 1;
    });
  }

  function handleAddItemToCart() {
    const itemData = {
      id,
      title,
      description,
      tags,
      price,
      image,
      amount: count,
    };

    addItem(itemData);
    toast.success("Produto adicionado ao carrinho.");
  }

  return (
    <CardCatalogContainer data-aos="zoom-in">
      <img src={image} />

      <Tags>
        {tags.map((item) => {
          return <span key={item}>{item}</span>;
        })}
      </Tags>

      <Info>
        <h3>{title}</h3>
        <p>{description}</p>
      </Info>

      <QuantityContainer>
        <h4>
          <span>R$ </span>
          {price.toFixed(2)}
        </h4>

        <div>
          <QuantityInput
            count={count}
            onAddQuantityItem={addQuantityItem}
            onRemoveQuantityItem={removeQuantityItem}
          />

          <BuyButton onClick={handleAddItemToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </BuyButton>
        </div>
      </QuantityContainer>
    </CardCatalogContainer>
  );
}
