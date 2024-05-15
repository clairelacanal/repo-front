import "./Explication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

function Explication() {
  return (
    <div id="etapes">
      <div className="container-explication">
        <h1>Les étapes</h1>
        <div className="etapes-rounds">
          <div className="round">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            <p>Trouve ton équipement</p>
          </div>
          <div className="round">
            <FontAwesomeIcon className="icon" icon={faStar} />{" "}
            <p>Ajoute le dans tes favoris</p>
          </div>
          <div className="round">
            <FontAwesomeIcon className="icon" icon={faClipboard} />{" "}
            <p>Réalise la fiche de ton équipement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explication;
