import styled from "styled-components";

import { mixins } from "../../../styles/mixins";

export const PaymentButtonContainer = styled.label`
  padding: 16px;

  display: flex;
  flex: 1;
  align-items: center;
  gap: 12px;

  position: relative;

  ${mixins.fonts.buttonM}
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.1s;
  cursor: pointer;
  background: ${(props) => props.theme["base-button"]};

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &[data-state="true"] {
    border-color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
  }

  > input {
    display: none;
  }

  > svg {
    color: ${(props) => props.theme.purple};
  }
`;
