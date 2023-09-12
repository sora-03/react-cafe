import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
};
