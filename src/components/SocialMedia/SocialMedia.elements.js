import styled from "styled-components";
import colors from "styles/color";

export const SocialMediaElement = styled.a`
  color: ${colors.icon};
  margin: 0 1.5rem;
  font-size: 1.5rem;

  &:hover {
    color: #f2a488;
  }
`;

export const SocialMediaButton = styled.button`
  color: ${colors.icon};
  margin: 0 1.5rem;
  font-size: 1.2rem;
  border: 0;
  background-color: transparent;

  &:active {
    color: #f2a488;
  }
`;
