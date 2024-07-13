import { ComponentProps, LegacyRef, forwardRef } from "react";

import { PaymentButtonContainer } from "./styles";

interface PaymentButtonProps extends ComponentProps<'input'>{
  isSelected: boolean;
}

export const PaymentButton = forwardRef(function PaymentButton(
  { isSelected, children, ...rest }: PaymentButtonProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <PaymentButtonContainer data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </PaymentButtonContainer>
  );
});
