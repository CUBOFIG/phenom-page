import LoadingContainer from "shared/LoadingContainer";
import { globalStore } from "store/stateGlobal"

const StatusCard = () => {
  const { data, oLoading } = globalStore()

  const CurrentState = () => {
    return data.status ? <h2>EN VIVO</h2> : <h1>SIN CONEXIÓN</h1>;
  };

  return (
    <div className="status-card">
      <LoadingContainer loading={oLoading}>
        <CurrentState />
        <div>
          <h5>Disfruta de este contenido.</h5>
          <h1>{data?.data?.[0]?.title}</h1>
        </div>
        <a href="https://www.twitch.tv/jonhyphenom">
          Sigue el stream en Twitch.
        </a>
      </LoadingContainer>
    </div>
  );
};

export default StatusCard;
