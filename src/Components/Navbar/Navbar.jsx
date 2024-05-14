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
              <li>Les Etapes</li>
              <li>Les Equipements</li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
