import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-text">
            <ul>
              <li>Recherche</li>
              <li>A propos</li>
              <li>Etapes</li>
              <li>Equipements</li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
