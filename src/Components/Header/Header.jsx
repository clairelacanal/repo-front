import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Sportif à Paris</h1>
        <SearchBar />
      </div>
    </>
  );
}

export default Header;