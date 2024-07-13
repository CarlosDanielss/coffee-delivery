import styled from "styled-components";

import { mixins } from "../../styles/mixins";
import { breakpoints } from "../../styles/breakpoints";

export const CardCartContainer = styled.div`
  width: 100%;
  padding: 8px 4px 32px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  > span {
    font-weight: 800;

    @media ${breakpoints.sm} {
      padding: 6px;
      font-size: 1em;
    }
  }

  @media ${breakpoints.sm} {
    flex-wrap: wrap;
  }
`;

export const CardCartWrapping = styled.div`
  display: flex;
  gap: 20px;

  > img {
    width: 64px;
    height: 64px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-subtitle"]}
  }

  > div {
    display: flex;
    gap: 8px;
  }
`;

export const RemoveButton = styled.button`
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 4px;

  ${mixins.fonts.buttonM}
  font-size: 12px;
  color: ${(props) => props.theme["base-text"]};

  border: none;
  transition: all 0.2s;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    color: ${(props) => props.theme["base-subtitle"]};
    background: ${(props) => props.theme["base-hover"]};

    > svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
