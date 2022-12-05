import styled, { keyframes, css } from "styled-components";

const live = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.25, 1.25);
    background-color:rgba(255, 0, 0, 0.3);
  }
`;

export const HeaderContainer = styled.div`
  background-color: #33402a;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const HeaderPrincipalElemment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 20px;
  z-index: 1;
  width: 100%;

  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      border-radius: 50%;
      margin: 0 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
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

  @media screen and (min-width: 425px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;

    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 100%;
  border-radius: 50%;
`;

export const ButtonLive = styled.a`
  display: block;
  font-weight: 700;
  padding: 13px 25px;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.2s;
  z-index: 1;
  outline: none;
  box-shadow: 0px 2px 0px darken(#0288d1, 10%);
  padding-right: 10px;
  width: 100px;
  color: white;
  cursor: pointer;
`;

export const LiveIcon = styled.span`
  display: inline-block;
  position: relative;
  background-color: red;
  width: 10px;
  height: 10px;
  margin-left: 20px;
  border: 1px solid rgba(black, 0.1);
  border-radius: 50%;
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    background-color: rgba(255, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: ${live} 2s ease-in-out infinite;
    z-index: -1;
  }
`;

export const SocialMediaContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
`;
