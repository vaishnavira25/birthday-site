import { Link } from "react-router-dom";

export default function Breadcrumb({ game }) {
  return (
    <div className="breadcrumb-wrap">

      <div className="container">

        <div className="breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <Link to="/games-activity-for-event">
            Games
          </Link>

          <span>/</span>

          <p>{game.title}</p>

        </div>

      </div>

    </div>
  );
}