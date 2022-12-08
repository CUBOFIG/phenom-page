import {
  TwitchContainer,
  TwitchPlayerContainer,
  TwitchChatContainer,
  TwitchPlayer,
  TwitchChat,
} from "./Hero.elements";
import { useState } from "react";
import { changeState } from "../../features/live/liveSlices";
import { useDispatch } from "react-redux";
import StatusCard from "components/Cards/StatusCard/StatusCard";

const Hero = () => {
  const [online, setOnline] = useState(true);

  const dispatch = useDispatch();

  const changeCurrenState = (state) => {
    dispatch(changeState(state));
  };

  return (
    <TwitchContainer className="flex">
      <div>
        <TwitchChatContainer>
          <StatusCard />
          {/* <TwitchChat channel="jonhyphenom" darkMode /> */}
        </TwitchChatContainer>

        <TwitchPlayerContainer>
          <TwitchPlayer
            {...(online ? { channel: "jonhyphenom" } : { video: "1668088830" })}
            className="twitch-player"
            parent={["localhost"]}
            hideControls={false}
            width={1000}
            onOnline={() => {
              changeCurrenState(true);
            }}
            onOffline={() => {
              setOnline(false);
              changeCurrenState(false);
            }}
          />
        </TwitchPlayerContainer>
      </div>
    </TwitchContainer>
  );
};

export default Hero;
