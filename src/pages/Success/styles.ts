import styled from "styled-components";

import { mixins } from "../../styles/mixins";
import { breakpoints } from "../../styles/breakpoints";

export const SuccessContainer = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;

  display: flex;
  align-items: end;
  gap: 102px;

  > img {
    width: 100%;
    max-width: 492px;
  }

  @media ${breakpoints.lg} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }

  @media ${breakpoints.sm} {
    gap: 20px;
  }
`;

export const SuccessContent = styled.section`
  max-width: 526px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme["yellow-dark"]};

    @media ${breakpoints.sm} {
      font-size: 1.8em;
    }
  }

  > h2 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]};

    @media ${breakpoints.sm} {
      font-size: 1em;
    }
  }
`;

export const SuccessInfo = styled.div`
  padding: 40px;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
  position: relative;

  &::before {
    content: "";
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    border-radius: 6px 36px;
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );

    position: absolute;
    top: -1px;
    right: -1px;
    z-index: -1;
  }
`;

export const StampInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StampColors = {
  purple: "purple",
  yellow: "yellow",
  yellowDark: "yellow-dark",
} as const;

interface StampProps {
  $stampColor: keyof typeof StampColors;
}

export const Stamp = styled.div<StampProps>`
  padding: 8px;

  display: flex;
  border-radius: 50%;
  background: ${(props) => props.theme[StampColors[props.$stampColor]]};

  > svg {
    color: ${(props) => props.theme.white};
  }
`;
