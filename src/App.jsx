import "./App.css";
import NotFoundPage from "./Pages/NotFoundPage";
import AboutPage from "./Pages/AboutPage";
//import Homepage from "./Components/HOMEPAGE/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  <>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>;
}

export default App;
