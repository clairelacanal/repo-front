import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import AboutPage from "./Pages/AboutPage";
import EquipementListPage from "./Pages/EquipementListPage";
import EquipementDetailsPage from "./Pages/EquipementDetailsPage";
//import Homepage from "./Components/HOMEPAGE/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//import EditEquipementPage from "./Pages/EditEquipementPage";
import NewEquipement from "./Pages/NewEquipement";
<com></com>;

function App() {
  return (
    <div>
      <Navbar />
      <Footer />

      <nav>
        <NavLink to="/new-Equipement">New Equipement</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<EquipementListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/Equipement-details/:EquipementId"
          element={<EquipementDetailsPage />}
        />
        {/*
        <Route
          path="/edit-equipement/:EquipementId"
          Component={EditEquipementPage}
  />*/}

        <Route path="/new-Equipement" Component={NewEquipement} />
      </Routes>
    </div>
  );
}

export default App;
