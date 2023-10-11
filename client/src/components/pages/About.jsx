import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Pages</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        voluptatum ducimus amet. Rerum officia quae, nulla ex dolore facere nisi
        a nemo minima delectus saepe sint consequatur. Possimus, amet culpa!
      </p>
      <Link to="/detail/1">Go Home</Link>
    </div>
  );
};
export default About;
