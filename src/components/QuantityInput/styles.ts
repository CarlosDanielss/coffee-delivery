import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  height: 38px;
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  button {
    line-height: 0;
    background: transparent;

    svg {
      color: ${(props) => props.theme.purple};

      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  span {
    color: ${(props) => props.theme["base-title"]};
  }
`;
