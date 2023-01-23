import styled from "styled-components";
import colors from "styles/color";
import logo from "../../image/logo.webp";
import construction from "../../image/construction.webp";

export const Card = styled.div`
  background-color: ${colors.primary};
  background-image: url(${construction}), url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.9rem;
  height: 250px;
  margin: 1rem;
  width: 290px;

  @media screen and (min-width: 700px) {
    margin: 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
