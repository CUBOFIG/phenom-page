import {
  TwitchContainer,
  TwitchPlayerContainer,
  TwitchChatContainer,
  TwitchPlayer,
} from "./Hero.elements";
import { useState } from "react";
import { changeState } from "../../features/live/liveSlices";
import { useDispatch, useSelector } from "react-redux";
import StatusCard from "components/Cards/StatusCard/StatusCard";
import { memo } from "react";

const Hero = () => {
  const stateLive = useSelector((state) => state.live.state);
  const [online, setOnline] = useState(!stateLive);

  const dispatch = useDispatch();

  const changeCurrenState = (state) => {
    dispatch(changeState(state));
  };

  return (
    <TwitchContainer className="flex">
      <div>
        <TwitchChatContainer>
          <StatusCard />
        </TwitchChatContainer>

        <TwitchPlayerContainer>
          <div>
            <TwitchPlayer
              {...(online
                ? { channel: "gelisgelita" }
                : { video: "1668088830" })}
              className="twitch-player"
              parent={["localhost"]}
              hideControls={false}
              onOnline={() => {
                //changeCurrenState(true);
              }}
              onOffline={() => {
                setOnline(false);
                changeCurrenState(false);
              }}
            />
          </div>
        </TwitchPlayerContainer>
      </div>
    </TwitchContainer>
  );
};

export default memo(Hero);
