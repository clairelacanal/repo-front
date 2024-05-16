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
                <Link to="/">
                  <a href="#recherche">Recherche</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a href="#a-propos">A propos</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a href="#etapes">Les étapes</a>
                </Link>
              </li>
              <li>
                <Link to="/equipements">Les Equipements</Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
