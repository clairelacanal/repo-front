import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Sportif à Paris</h1>
        <img src={logo} alt="logo" />
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
