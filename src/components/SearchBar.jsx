import "../styles/SearchBar.css";

/*
  SearchBar Component
  
  A controlled input component for filtering recipes.
  
  Props:
  - value: Current search term (string) - passed from parent state
  - onSearch: Callback function to update search term when user types
  
  This is a "controlled component" because:
  - The input value comes from props (not internal state)
  - Parent component (App) manages the actual search state
  - Component just displays the input and calls callbacks
  
  This pattern makes the component predictable and easy to test.
*/

export default function SearchBar({ value, onSearch }) {
  // Called when user types in the input
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  // Called when user clicks the Clear button
  const handleClear = () => {
    onSearch("");
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes by name, category, or tags..."
          value={value}
          onChange={handleInputChange}
          aria-label="Search recipes"
        />
        {value && (
          <button
            className="search-clear-button"
            onClick={handleClear}
            aria-label="Clear search"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
