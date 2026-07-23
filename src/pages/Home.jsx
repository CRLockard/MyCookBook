import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import "../styles/Home.css";

/*
  Home Page
  
  The main page users see when they visit the app.
  Combines SearchBar and RecipeList with intelligent filtering logic.
  
  Props:
  - recipes: Array of all available recipes (from App.jsx)
  - searchTerm: Current search query (from App.jsx state)
  - onSearch: Callback to update search term in parent (from App.jsx)
  
  This component:
  1. Displays the SearchBar for user input
  2. Filters recipes based on the search term
  3. Displays the filtered results using RecipeList
  
  Search Logic:
  - Matches against: recipe title, description, category, tags
  - Case-insensitive for better user experience
  - Uses .some() to check if any tag matches
  - Real-time filtering as user types
*/

export default function Home({ recipes, searchTerm, onSearch }) {
  const navigate = useNavigate();

  // Filter recipes based on search term
  // If no search term, show all recipes
  const filteredRecipes = recipes.filter((recipe) => {
    // Convert search term to lowercase for case-insensitive matching
    const term = searchTerm.toLowerCase();

    // Return true if recipe matches any of these criteria
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.shortDescription.toLowerCase().includes(term) ||
      recipe.category.toLowerCase().includes(term) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  // Handle navigation to recipe detail page
  const handleViewDetails = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="home-page">
      {/* Page Title */}
      <div className="home-header">
        <h1 className="home-title">Discover Delicious Recipes</h1>
        <p className="home-subtitle">
          Search through our collection of 20 recipes from around the world
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onSearch={onSearch} />

      {/* Results Count */}
      {searchTerm && (
        <div className="results-info">
          <p>
            Found <strong>{filteredRecipes.length}</strong> recipe
            {filteredRecipes.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Recipe List */}
      <RecipeList recipes={filteredRecipes} onViewDetails={handleViewDetails} />
    </div>
  );
}
