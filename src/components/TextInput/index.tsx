import {
  ComponentProps,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  useState,
} from "react";

import { InputErrorMessage, TextInputContainer, WrapperInput } from "./styles";
import { ErrorOption } from "react-hook-form";

type TextInputContainerPositionProps =
  | "cep"
  | "street"
  | "number"
  | "fullAdrress"
  | "neighborhood"
  | "city"
  | "state";

interface TextInputProps extends ComponentProps<"input"> {
  optional?: boolean;
  containerPosition: TextInputContainerPositionProps;
  error?: ErrorOption
}

export const TextInput = forwardRef(function TextInput(
  {
    optional = false,
    error,
    containerPosition,
    onFocus,
    onBlur,
    ...rest
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <TextInputContainer $containerPosition={containerPosition}>
      <WrapperInput $state={isFocused ? "focused" : "blurred"}>
        <input onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...rest} />
        {optional && <span>Opcional</span>}
      </WrapperInput>
      {error && (
        <InputErrorMessage>{error.message}</InputErrorMessage>
      )}
    </TextInputContainer>
  );
});
