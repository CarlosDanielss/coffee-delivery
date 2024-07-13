import styled from "styled-components";

import { mixins } from "../../styles/mixins";
import { breakpoints } from "../../styles/breakpoints";

export const HomeContainer = styled.section`
  position: relative;

  > img {
    max-height: 544px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const HomeContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 92px 20px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 56px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

  > img {
    width: 100%;
    max-width: 476px;
  }

  @media ${breakpoints.lg} {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme["base-title"]};

    @media ${breakpoints.sm} {
      font-size: 2.4em;
    }
  }

  > h2 {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]}
  }
`;

export const Info = styled.footer`
  display: flex;
  gap: 40px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  @media ${breakpoints.lg} {
    justify-content: center;
  }

  @media ${breakpoints.sm} {
    margin: 0 auto;
    flex-direction: column;
    gap: 25px;
  }
`;

export const StampContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${breakpoints.md} {
    text-align: start;
  }
`;

const StampColors = {
  yellow: "yellow",
  yellowDark: "yellow-dark",
  gray: "base-text",
  purple: "purple",
} as const;

interface StampProps {
  $stampColor: keyof typeof StampColors;
}

export const StampHeader = styled.div<StampProps>`
  padding: 8px;
  display: flex;
  border-radius: 50%;

  background: ${(props) => props.theme[StampColors[props.$stampColor]]};

  > svg {
    color: ${(props) => props.theme.white};
  }
`;

export const CoffeeList = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 20px 150px;

  > h3 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-subtitle"]};

    margin-bottom: 54px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    @media ${breakpoints.xl} {
      justify-content: center;
    }
  }
`;
