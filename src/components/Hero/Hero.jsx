import { changeState } from "../../features/live/liveSlices";
import { memo } from "react";
import { TwitchPlayer as Player } from "react-twitch-embed";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import StatusCard from "components/Cards/StatusCard/StatusCard";

const Hero = () => {
  const stateLive = useSelector((state) => state.live.state);
  const [online, setOnline] = useState(!stateLive);

  const dispatch = useDispatch();

  const changeCurrenState = (state) => {
    dispatch(changeState(state));
  };

  return (
    <section className="flex hero">
      <div>
        <div className="hero__container-card">
          <StatusCard />
        </div>

        <div className="hero__container-stream">
          <div>
            <Player
              {...(online
                ? { channel: "jonhyphenom" }
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
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
