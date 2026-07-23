import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.css";

/*
  RecipeList Component
  
  Container that displays multiple recipe cards in a responsive grid.
  Handles the empty state when no recipes match the search.
  
  Props:
  - recipes: Array of recipe objects to display
  - onViewDetails: Callback function to navigate to recipe detail page
  
  This component focuses on layout and empty states.
  Individual card rendering is delegated to RecipeCard.
  
  The grid is responsive:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
*/

export default function RecipeList({ recipes, onViewDetails }) {
  // Empty state: no recipes to display
  if (recipes.length === 0) {
    return (
      <div className="recipe-list-empty">
        <div className="recipe-list-empty-content">
          <p className="recipe-list-empty-icon">🔍</p>
          <h2 className="recipe-list-empty-title">No recipes found</h2>
          <p className="recipe-list-empty-message">
            We couldn't find any recipes matching your search. Try adjusting
            your search terms or browse all recipes.
          </p>
        </div>
      </div>
    );
  }

  // Render grid of recipe cards
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
