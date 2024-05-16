import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.log(isHome);
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
                {isHome ? (
                  <a href="#a-propos">A propos</a>
                ) : (
                  <Link to="/#a-propos">A propos</Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#etapes">Les étapes</a>
                ) : (
                  <Link to="/#etapes">Les etapes</Link>
                )}
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
