import styled from "styled-components";
import { centerBlock } from "styles/mixins";
import colors from "styles/color";

export const OptionsContainer = styled.div`
  background-color: ${colors.primary};
  min-height: 300px;

  & > div:nth-child(1) {
    margin: 0 auto;
    ${centerBlock}
    justify-content: space-between;
    max-width: 1400px;
    padding: 0 20px;
    flex-direction: column;

    @media screen and (min-width: 700px) {
      flex-direction: row;
    }

    & > div {
      width: 100%;
    }
  }
`;
