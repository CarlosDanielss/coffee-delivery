import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const LocaleInputContainer = styled.div`
  width: 100%;
  height: 100svh;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(10px);

  position: fixed;
  z-index: 5;
`;

export const LocaleInputForm = styled.form`
  padding: 35px;

  display: flex;
  flex-direction: column;

  border-radius: 6px;
  background: ${(props) => props.theme.background};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const LocaleHeader = styled.header`
  margin-bottom: 25px;

  > label {
    ${mixins.fonts.titleL}
  }

  > h2 {
    ${mixins.fonts.textS}
  }
`;

export const SelectStates = styled.select`
  padding: 10px;

  border-radius: 4px;

  outline: none;
  border: 1px solid transparent;
  ${mixins.fonts.textM}
  color: ${(props) => props.theme["base-text"]};

  background: ${(props) => props.theme["base-input"]};

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &[data-state="true"] {
    border-color: red;
  }
`;

export const InputErrorMessage = styled.span`
  margin-top: 8px;

  ${mixins.fonts.textXS}
  font-weight: 400;
  color: red;
`;

export const ButtonSelectState = styled.button`
  margin-top: 25px;

  padding: 8px 0;

  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 6px;
  transition: all 0.2s;
  background: ${(props) => props.theme.purple};

  &:hover {
    background: ${(props) => props.theme["purple-dark"]};
  }
`;
