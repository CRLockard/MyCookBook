import "../styles/RecipeCard.css";

/*
  RecipeCard Component
  
  Displays a single recipe as a card in a grid.
  Shows essential recipe info: image, title, description, time, difficulty, category.
  
  Props:
  - recipe: Recipe object containing all recipe data
  - onViewDetails: Callback function to navigate to recipe detail page
  
  This component is reusable and stateless. It receives all data as props
  and calls callbacks to communicate with parent components.
  
  Each recipe card acts as a preview that encourages users to click for more info.
*/

export default function RecipeCard({ recipe, onViewDetails }) {
  return (
    <div className="recipe-card">
      {/* Recipe Image */}
      <div className="recipe-card-image-container">
        <img
          src={recipe.placeholderImage}
          alt={recipe.title}
          className="recipe-card-image"
        />
      </div>

      {/* Card Content */}
      <div className="recipe-card-content">
        {/* Category Badge */}
        <div className="recipe-category-badge">{recipe.category}</div>

        {/* Title and Description */}
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <p className="recipe-card-description">{recipe.shortDescription}</p>

        {/* Recipe Info Badges */}
        <div className="recipe-info-badges">
          <span className="recipe-badge">⏱️ {recipe.cookingTime} min</span>
          <span
            className={`recipe-badge difficulty-${recipe.difficulty.toLowerCase()}`}
          >
            {recipe.difficulty}
          </span>
        </div>

        {/* View Details Button */}
        <button
          className="view-details-button"
          onClick={() => onViewDetails(recipe.id)}
          aria-label={`View details for ${recipe.title}`}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
