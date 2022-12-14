import { useSelector } from "react-redux";
import LoadingContainer from "shared/LoadingContainer";

const StatusCard = () => {
  const stateLive = useSelector((state) => state.live);

  const CurrentState = () => {
    return stateLive.currentStatus ? <h2>EN VIVO</h2> : <h1>SIN CONEXIÓN</h1>;
  };

  return (
    <div className="status-card">
      <LoadingContainer loading={stateLive.isLoading}>
        <CurrentState />
        <div>
          <h5>Disfruta de este contenido.</h5>
          <h1>{stateLive?.dataLive?.data?.[0]?.title}</h1>
        </div>
        <a href="https://www.twitch.tv/jonhyphenom">
          Sigue el stream en Twitch.
        </a>
      </LoadingContainer>
    </div>
  );
};

export default StatusCard;
