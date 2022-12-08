import { TwitchPlayer as Player, TwitchChat as Chat } from "react-twitch-embed";
import styled from "styled-components";
import jonhy from "../../image/jonhy.png";

export const TwitchContainer = styled.div`
  background-image: url(${jonhy});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > div {
    width: 100% !important;
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 2rem;
      display: flex;
      max-width: 1400px;
      justify-content: center;

      align-items: center;
    }
  }

  @media screen and (min-width: 768px) {
    height: 90.5vh;
  }
`;

export const TwitchPlayerContainer = styled.div`
  height: 550px !important;
  width: 100%;
  background-color: black;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
    width: 1000px;
  }
`;

export const TwitchPlayer = styled(Player)`
  width: 100% !important;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 1000px;
  }
`;

export const TwitchChatContainer = styled.div`
  background-color: black;
  margin-top: 2rem;
  height: 550px !important;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const TwitchChat = styled(Chat)`
  width: 100% !important;
`;
