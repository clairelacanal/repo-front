import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import EquipementListPage from "./Pages/EquipementListPage";
import EquipementDetailsPage from "./Pages/EquipementDetailsPage";
//import Homepage from "./Components/HOMEPAGE/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import EditEquipementPage from "./Pages/EditEquipementPage";
import NewEquipement from "./Pages/NewEquipement";
import Caroussel from "./Components/Caroussel/Caroussel";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Caroussel />
      <Footer />

      <nav>
        <NavLink to="/new-Equipement">New Equipement</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<EquipementListPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/Equipement-details/:EquipementId"
          element={<EquipementDetailsPage />}
        />

        <Route
          path="/edit-equipement/:EquipementId"
          element={<EditEquipementPage />}
        />

        <Route path="/new-Equipement" Component={NewEquipement} />
      </Routes>
    </div>
  );
}

export default App;
