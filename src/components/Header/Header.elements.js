import styled, { css } from "styled-components";
import { centerBlock } from "styles/mixins";
import { live } from "styles/animations";

export const HeaderPrincipalElemment = styled.div`
  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      ${centerBlock}
      border-radius: 50%;
      margin: 0 0.5rem;
      position: relative;
      height: 50px;

      &:before {
        ${({ active }) =>
          active &&
          css`
            content: "";
            border: 1px solid red;
            position: absolute;
            background-color: rgba(255, 0, 0, 0.6);
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: ${live} 3s ease-in-out infinite;
            z-index: -1;
          `}
      }
    }

    & > button {
      margin: 0;

      @media screen and (min-width: 425px) {
        display: none;
      }
    }
  }
`;

// export const ButtonLive = styled.a`
//   border-radius: 50px;
//   box-shadow: 0px 2px 0px darken(#0288d1, 10%);
//   color: white;
//   cursor: pointer;
//   display: block;
//   font-weight: 700;
//   outline: none;
//   padding-right: 10px;
//   padding: 13px 25px;
//   text-decoration: none;
//   transition: all 0.2s;
//   width: 100px;
//   z-index: 1;
// `;

// export const LiveIcon = styled.span`
//   background-color: red;
//   border-radius: 50%;
//   border: 1px solid rgba(rgba(0, 0, 0, 1));
//   display: inline-block;
//   height: 10px;
//   margin-left: 20px;
//   position: relative;
//   width: 10px;
//   z-index: 1;

//   &:before {
//     content: "";
//     animation: ${live} 2s ease-in-out infinite;
//     background-color: rgba(255, 0, 0, 0.6);
//     border-radius: 50%;
//     display: block;
//     height: 100%;
//     position: absolute;
//     width: 100%;
//     z-index: -1;
//   }
// `;

export const SocialMediaContainer = styled.div`
  display: none;

  @media screen and (min-width: 425px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    margin-left: auto;
  }
`;
