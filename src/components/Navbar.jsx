import { Link } from "react-router-dom";
import "../styles/Navbar.css";

/*
  Navbar Component
  
  Displays the app title and main navigation.
  Visible on every page of the application.
  
  Uses React Router's Link component for client-side navigation—
  clicking Home doesn't refresh the page, just updates the URL.
*/

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🍽 MyCookBook
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">
              🏠 Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
