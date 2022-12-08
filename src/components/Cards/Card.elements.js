import styled from "styled-components";
import colors from "styles/color";

export const Card = styled.div`
  border-radius: 0.9rem;
  background-color: ${colors.primary};
  border: 5px solid ${colors.icon};
  width: 290px;
  height: 250px;
  margin: 1rem;

  @media screen and (min-width: 700px) {
    margin: 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
