import Card from "../card/Card";
import "./cardlist.css";
const Cardlist = ({ players }) => {
  return (
    <div className="card-list">
      {players.map((user) => (
        <Card key={user.name} player={user} />
      ))}
    </div>
  );
};

export default Cardlist;
