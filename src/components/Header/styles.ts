import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 20px;

  display: flex;
  justify-content: space-between;

  > nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const HeaderBaseButton = styled.button`
  height: 38px;
  padding: 8px;

  ${mixins.fonts.textS}

  border-radius: 6px;
`;

export const LocaleButton = styled(HeaderBaseButton)`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme["purple-dark"]};

  background: ${(props) => props.theme["purple-light"]};

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CartButton = styled(HeaderBaseButton)`
  position: relative;

  background: ${(props) => props.theme["yellow-light"]};

  > svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  > span {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${mixins.fonts.textS}
    font-size: 11px;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    border-radius: 50%;
    background: ${(props) => props.theme["yellow-dark"]};

    position: absolute;
    top: -8px;
    right: -8.35px;
    z-index: 2;
  }
`;
