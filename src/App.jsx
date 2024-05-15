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

import FilteredEquipementsPage from "./Pages/FilteredEquipementsPage";

import Explication from "./Components/Explications/Explications";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/equipements" element={<EquipementListPage />} />
        <Route
          path="/filtered-equipements"
          element={<FilteredEquipementsPage />}
        />
        <Route path="/" element={<HomePage />} />
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
      <Footer />
    </div>
  );
}

export default App;
