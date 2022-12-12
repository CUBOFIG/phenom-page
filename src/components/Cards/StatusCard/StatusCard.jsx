import { useSelector } from "react-redux";
import LoadingContainer from "shared/LoadingContainer";

const StatusCard = () => {
  const stateLive = useSelector((state) => state.live);

  const CurrentState = () => {
    return stateLive.currentStatus ? <h1>EN VIVO</h1> : <h1>SIN CONEXIÓN</h1>;
  };

  return (
    <div className="status-card">
      <LoadingContainer loading={stateLive.isLoading}>
        <CurrentState />
        <h5>
          Disfruta de este contenido: {stateLive?.dataLive?.data?.[0]?.title}
        </h5>
      </LoadingContainer>
    </div>
  );
};

export default StatusCard;
