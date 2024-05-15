import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container-header">
          <SearchBar />
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
