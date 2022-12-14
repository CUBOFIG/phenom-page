import styled from "styled-components";
import colors from "styles/color";
import logo from "../../image/logo.jpg";
import construction from "../../image/construction.png";

export const Card = styled.div`
  border-radius: 0.9rem;
  background-color: ${colors.primary};
  //border: 5px solid ${colors.icon};
  width: 290px;
  height: 250px;
  margin: 1rem;
  background-image: url(${construction}), url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 700px) {
    margin: 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
