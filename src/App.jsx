import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import EquipementListPage from "./Pages/EquipementListPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<EquipementListPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
