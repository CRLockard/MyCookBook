import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

/*
  NotFound Page (404)
  
  Displayed when a user navigates to a route that doesn't exist.
  For example: /about, /recipes/999, or /settings
  
  This component uses the useNavigate hook to let users
  return to the home page with a single click.
*/

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <button className="home-button" onClick={handleGoHome}>
          🏠 Return to Home
        </button>
      </div>
    </div>
  );
}
