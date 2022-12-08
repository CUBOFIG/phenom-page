import { css } from "styled-components";

export const centerBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const responsive = {
  mobile: {
    standard: (...args) => css`
      @media (max-width: 600px) {
        ${css(...args)};
      }
    `,
  },
};
