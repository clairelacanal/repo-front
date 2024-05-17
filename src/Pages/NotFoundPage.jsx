import "./NotFoundPage.css";
import logoNotFound from "../assets/images/not_found.jpg";

function NotFoundPage() {
  return (
    <div className="not-found">
      <img src={logoNotFound} alt="logo not found" />
    </div>
  );
}

export default NotFoundPage;
