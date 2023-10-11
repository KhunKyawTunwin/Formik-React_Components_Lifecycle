import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Details {id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
        molestias quibusdam optio, sint ut quos sed doloribus, expedita vero
        pariatur beatae iusto eos rem modi eligendi porro dolorem fuga.
      </p>
    </div>
  );
};

export default Details;
