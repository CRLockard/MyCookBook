import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { recipes } from "./data/recipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

/*
  App Component: The root component of the MyCookBook application.
  
  Responsibilities:
  - Set up React Router with all page routes
  - Manage the search term state (only state in the entire app)
  - Keep the Navbar and Footer visible on all pages
  - Pass search state and handlers to child components
  
  Why this design:
  - Centralizing state at the top level keeps data flow simple
  - BrowserRouter enables client-side navigation without page reloads
  - Routes are defined here so we can see the entire app structure at a glance
  - Navbar stays visible across all pages for consistent navigation
*/

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  recipes={recipes}
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                />
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <Details recipes={recipes} onResetSearch={handleResetSearch} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
