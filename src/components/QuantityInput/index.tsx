import { Minus, Plus } from "phosphor-react";

import { QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  count: number;
  onAddQuantityItem: () => void;
  onRemoveQuantityItem: () => void;
}

export function QuantityInput({
  count,
  onAddQuantityItem,
  onRemoveQuantityItem,
}: QuantityInputProps) {
  function handleRemoveQuantityItem() {
    onRemoveQuantityItem();
  }

  function handleAddQuantityItem() {
    onAddQuantityItem();
  }

  return (
    <QuantityInputContainer>
      <button onClick={handleRemoveQuantityItem}>
        <Minus size={15} />
      </button>
      <span>{count}</span>
      <button onClick={handleAddQuantityItem}>
        <Plus size={15} />
      </button>
    </QuantityInputContainer>
  );
}
