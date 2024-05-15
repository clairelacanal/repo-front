import About from "../Components/About/About";
import Caroussel from "../Components/Caroussel/Caroussel";
import Explication from "../Components/Explications/Explications";
import Header from "../Components/Header/Header";

function HomePage() {
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
