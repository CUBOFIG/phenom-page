import { Card as CardJP } from "./Card.elements";

const Card = ({ title }) => {
  return (
    <CardJP>
      <h1>{title}</h1>
    </CardJP>
  );
};

export default Card;
