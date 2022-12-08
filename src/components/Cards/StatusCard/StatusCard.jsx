import { useSelector } from "react-redux";
import LoadingContainer from "shared/LoadingContainer";

const StatusCard = () => {
  const stateLive = useSelector((state) => state.live);

  const CurrentState = () => {
    return stateLive.currentStatus ? (
      <h1>Jonhy esta en directo</h1>
    ) : (
      <h1>Jonhy no esta en directo</h1>
    );
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
