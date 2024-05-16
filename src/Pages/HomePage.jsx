import About from "../Components/About/About";
import Caroussel from "../Components/Caroussel/Caroussel";
import Explication from "../Components/Explications/Explications";
import Header from "../Components/Header/Header";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.location.href = hash;
    }
  }, []);

  return (
    <>
      <Header />
      <About />
      <Caroussel />
      <Explication />
    </>
  );
}

export default HomePage;
