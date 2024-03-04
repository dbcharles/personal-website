import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-class">
      <div className="link">
        <Link className="link" to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div className="link">
        <Link
          className="link"
          to="/pagefour"
          style={{ textDecoration: "none" }}
        >
          About me{" "}
        </Link>
      </div>
      <div className="link">
        <Link
          className="link"
          to="/pagethree"
          style={{ textDecoration: "none" }}
        >
          Beyond Berkeley{" "}
        </Link>
      </div>
      <div className="link">
        <Link className="link" to="/pagetwo" style={{ textDecoration: "none" }}>
          Courses & Clubs{" "}
        </Link>
      </div>
    </div>
  );
}