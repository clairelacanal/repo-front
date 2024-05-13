import "./NotFoundPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <Footer />
      <img src={image} alt="image-404" />
    </>
  );
}

export default NotFoundPage;
