import { keyframes } from "styled-components";

export const live = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.25, 1.25);
    background-color:rgba(255, 0, 0, 0.3);
  }
`;
