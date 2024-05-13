import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import AboutPage from "./Pages/AboutPage";
import EquipementList from "./Pages/EquipementList";
//import Homepage from "./Components/HOMEPAGE/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
<com></com>;

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<EquipementList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
