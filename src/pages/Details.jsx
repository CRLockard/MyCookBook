import { useParams, useNavigate } from "react-router-dom";

/*
  Details Page
  
  Displays the full recipe for a specific recipe ID.
  
  Props:
  - recipes: Array of all recipes (passed from App.jsx)
  - onResetSearch: Callback to clear search when returning home
  
  This page:
  1. Uses useParams to get the recipe ID from the URL (e.g., /recipe/5)
  2. Finds the matching recipe from the recipes array
  3. Displays RecipeDetail component with the recipe
  4. Shows a 404 page if recipe not found
  
  This separation keeps routing logic separate from recipe display logic.
  The RecipeDetail component focuses purely on displaying the recipe.
*/

import RecipeDetail from "../components/RecipeDetail";

export default function Details({ recipes, onResetSearch }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // Convert URL param to number and find the matching recipe
  const recipeId = parseInt(id, 10);
  const recipe = recipes.find((r) => r.id === recipeId);

  // Handle recipe not found
  if (!recipe) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ color: "#333", marginBottom: "12px" }}>
          Recipe Not Found
        </h1>
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Sorry, we couldn't find the recipe you're looking for.
        </p>
        <button
          onClick={() => {
            onResetSearch();
            navigate("/");
          }}
          style={{
            backgroundColor: "#E8724C",
            color: "white",
            border: "none",
            padding: "10px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Handle back button click
  const handleBack = () => {
    onResetSearch();
    navigate("/");
  };

  return <RecipeDetail recipe={recipe} onBack={handleBack} />;
}
