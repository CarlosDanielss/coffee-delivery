import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const CardCatalogContainer = styled.div`
  max-width: 256px;
  padding: 20px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border-radius: 6px 36px;
  background: ${(props) => props.theme["base-card"]};

  > img {
    margin: -40px 0 10px 0;
  }
`;

export const Tags = styled.div`
  margin-bottom: 16px;

  display: flex;

  > span {
    padding: 4px 8px;

    ${mixins.fonts.tag}
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 10px;
    background: ${(props) => props.theme["yellow-light"]};
  }
`;

export const Info = styled.div`
  margin-bottom: 33px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h3 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme["base-subtitle"]}
  }

  > p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme["base-label"]}
  }
`;

export const QuantityContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    ${mixins.fonts.titleM}

    > span {
      ${mixins.fonts.textM}
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const BuyButton = styled.button`
  padding: 8px;

  line-height: 0;
  border-radius: 6px;
  transition: all 0.1s ;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["purple-dark"] };

  &:hover {
    background: ${(props) => props.theme["purple"] };
  }
`;
