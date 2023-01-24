/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from "react";
import { TwitchPlayer as Player } from "react-twitch-embed";
import { globalStore } from "store/stateGlobal"
import StatusCard from "components/Cards/StatusCard/StatusCard";
import { useFetchStatus } from "hooks/useOnLive";
import { useEffect, useCallback } from "react";

const Hero = () => {
  const { data, isLoading } = useFetchStatus();

  const statusLive = globalStore(useCallback((state) => state.statusLive, []))
  const setData = globalStore(useCallback((state) => state.setData, [])) 

  useEffect(()=>{
    console.log("uwuwuwuw")
    if(!isLoading) setData({...data, status: "onlive"})
  },[isLoading])
  
  return (
    <section className="flex hero">
      <div>
        <div className="hero__container-card">
          <StatusCard />
        </div>
          <div className="hero__container-stream">
            <div>
              { statusLive
                ? <Player
                    channel="jonhyphenom" 
                    className="twitch-player"
                    parent={["localhost"]}
                    hideControls={false}
                  />
                : <Player
                    video="1668088830"
                    className="twitch-player"
                    parent={["localhost"]}
                    hideControls={false}
                  />
              }
            </div>
        </div> 
      </div>
    </section>
  );
};

export default memo(Hero);
