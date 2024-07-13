import styled from "styled-components";

import { mixins } from "../../styles/mixins";

interface TextInputContainerProps {
  $containerPosition:
    | "cep"
    | "street"
    | "number"
    | "fullAdrress"
    | "neighborhood"
    | "city"
    | "state";
}

export const TextInputContainer = styled.div<TextInputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  grid-area: ${(props) => props.$containerPosition};
`;

interface WrapperInputProps {
  $state: "focused" | "blurred";
}

export const WrapperInput = styled.div<WrapperInputProps>`
  padding: 12px;

  display: flex;
  align-items: center;

  border-radius: 4px;
  border: 1px solid red;
  background: ${(props) => props.theme["base-input"]};

  ${(props) =>
    props.$state === "focused"
      ? `
    border-color: ${props.theme["yellow-dark"]};
  `
      : `
    border-color: ${props.theme["base-button"]};
  `}

  > input {
    width: 100%;

    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-text"]};
    outline: none;
    border: none;
    background: transparent;

    &[type="number"]::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  > span {
    padding-left: 4px;

    ${mixins.fonts.textXS};
    font-weight: 400;
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const InputErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-size: 0.7rem;
  font-weight: 400;
  color: red;
`;
