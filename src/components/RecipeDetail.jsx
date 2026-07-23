import "../styles/RecipeDetail.css";

/*
  RecipeDetail Component
  
  Displays complete information for a single recipe.
  
  Props:
  - recipe: Complete recipe object with all details
  - onBack: Callback function to navigate back to home
  
  This component is purely presentational—it receives recipe data
  through props and focuses on displaying it in a clean, readable format.
  
  All the data is already loaded; this component just formats and displays it.
*/

export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        ← Back to Recipes
      </button>

      {/* Recipe Image */}
      <div className="recipe-detail-image-container">
        <img
          src={recipe.placeholderImage}
          alt={recipe.title}
          className="recipe-detail-image"
        />
      </div>

      {/* Recipe Header */}
      <div className="recipe-detail-header">
        <div>
          <h1 className="recipe-detail-title">{recipe.title}</h1>
          <p className="recipe-detail-description">{recipe.shortDescription}</p>
        </div>
        <span className="recipe-detail-category">{recipe.category}</span>
      </div>

      {/* Recipe Metadata */}
      <div className="recipe-metadata">
        <div className="metadata-item">
          <span className="metadata-label">⏱️ Time</span>
          <span className="metadata-value">{recipe.cookingTime} minutes</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">📊 Difficulty</span>
          <span
            className={`metadata-value difficulty-${recipe.difficulty.toLowerCase()}`}
          >
            {recipe.difficulty}
          </span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">🍽️ Servings</span>
          <span className="metadata-value">{recipe.servings}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="recipe-detail-content">
        {/* Ingredients Section */}
        <section className="recipe-section">
          <h2 className="section-title">Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-checkbox">☐</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section className="recipe-section">
          <h2 className="section-title">Instructions</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="instruction-item">
                <span className="instruction-step">{index + 1}</span>
                <span className="instruction-text">{instruction}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tags Section */}
        {recipe.tags && recipe.tags.length > 0 && (
          <section className="recipe-section">
            <h2 className="section-title">Tags</h2>
            <div className="tags-list">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Back Button (Bottom) */}
      <button className="back-button bottom-back-button" onClick={onBack}>
        ← Back to Recipes
      </button>
    </div>
  );
}
