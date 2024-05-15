import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-text">
            <ul>
              <li>
                <Link to="#recherche">Recherche</Link>
              </li>
              <li>
                <Link to="#a-propos">A propos</Link>
              </li>
              <li>
                <Link to="./#etapes">Les Etapes</Link>
              </li>
              <li>
                <a href="#equipements">Les Equipements</a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
