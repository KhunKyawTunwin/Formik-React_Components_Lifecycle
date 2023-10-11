import "./card.css";
const Card = ({ player: { name, email } }) => {
  return (
    <div className="card-container">
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
};
export default Card;
