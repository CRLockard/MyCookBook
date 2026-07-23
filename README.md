# 🍽 MyCookBook - Recipe Application

A polished, beginner-friendly Recipe App built with React and Vite. Browse, search, and discover recipes from around the world with real-time filtering and detailed recipe instructions.

**Live Demo:** http://localhost:5173/

---

## ✨ Features

- **Browse Recipes**: Browse 20 recipes from diverse cuisines (Italian, Mexican, Thai, Indian, Mediterranean, etc.)
- **Real-Time Search**: Instantly filter recipes by title, description, category, or tags while typing
- **Recipe Details**: View complete recipe information including ingredients, step-by-step instructions, cooking time, difficulty level, and servings
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Beautiful UI**: Clean, modern design with color-coded difficulty levels, hover effects, and professional typography
- **Intuitive Navigation**: Easy-to-use React Router navigation between pages
- **No External Dependencies**: Built with only React, Vite, React Router, and plain CSS

---

## 🎯 Project Overview

MyCookBook is an educational recipe application designed to demonstrate React fundamentals and best practices. It showcases:

- Component-based architecture with reusable components
- Client-side routing with React Router
- State management with `useState`
- Real-time data filtering
- Responsive CSS Grid and Flexbox layouts
- Professional UI/UX design principles

This project is suitable as a portfolio piece or bootcamp assignment demonstrating solid React skills.

---

## 🛠 Technologies Used

| Technology            | Purpose                                                           |
| --------------------- | ----------------------------------------------------------------- |
| **React**             | UI library and component management                               |
| **Vite**              | Lightning-fast build tool and dev server                          |
| **React Router**      | Client-side routing and navigation                                |
| **JavaScript (ES6+)** | Modern JavaScript features (arrow functions, destructuring, etc.) |
| **CSS3**              | Responsive layouts, animations, and styling                       |
| **Picsum Photos**     | Placeholder images with unique seeds                              |

**What's NOT used:**

- ❌ TypeScript
- ❌ Redux or Context API
- ❌ Tailwind CSS or Material UI
- ❌ Axios or external APIs
- ❌ Custom Hooks (only built-in React hooks)

---

## 📁 Project Structure

```
MyCookBook/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Navigation bar (always visible)
│   │   ├── SearchBar.jsx        # Search input with real-time filtering
│   │   ├── RecipeCard.jsx       # Individual recipe card (reusable)
│   │   ├── RecipeList.jsx       # Grid container for recipe cards
│   │   ├── RecipeDetail.jsx     # Full recipe display page
│   │   └── Footer.jsx           # Footer (always visible)
│   │
│   ├── pages/                   # Page components (routing targets)
│   │   ├── Home.jsx             # Main page with search and recipe grid
│   │   ├── Details.jsx          # Individual recipe detail page
│   │   └── NotFound.jsx         # 404 error page
│   │
│   ├── data/
│   │   └── recipes.js           # Array of 20 recipes with complete data
│   │
│   ├── styles/                  # CSS files (one per component)
│   │   ├── App.css              # Global styles and layout
│   │   ├── Navbar.css           # Navbar styling
│   │   ├── SearchBar.css        # Search input styling
│   │   ├── RecipeCard.css       # Recipe card styling
│   │   ├── RecipeList.css       # Grid layout styling
│   │   ├── RecipeDetail.css     # Recipe detail page styling
│   │   ├── Home.css             # Home page styling
│   │   ├── Footer.css           # Footer styling
│   │   └── NotFound.css         # 404 page styling
│   │
│   ├── App.jsx                  # Root component with routing setup
│   └── main.jsx                 # React entry point
│
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 📊 Component Hierarchy

```
App (Routing, Search State)
├── Navbar (Always Visible)
│   └── Links to Home
├── Main Content (Routes)
│   ├── Home Page
│   │   ├── SearchBar (user input → parent state)
│   │   └── RecipeList (filtered recipes)
│   │       └── RecipeCard (individual recipe × N)
│   │
│   ├── Details Page
│   │   └── RecipeDetail (full recipe info)
│   │
│   └── NotFound Page (404)
│
└── Footer (Always Visible)
```

---

## 🗺️ Routing Overview

| Route         | Component | Purpose                         |
| ------------- | --------- | ------------------------------- |
| `/`           | Home      | Display all recipes with search |
| `/recipe/:id` | Details   | Show individual recipe details  |
| `*`           | NotFound  | 404 page for undefined routes   |

**Navigation Flow:**

```
Home Page
  ↓ (user clicks "View Details")
Recipe Card → useNavigate(`/recipe/${id}`) → URL: /recipe/5
  ↓
Details Page loads recipe with id=5
  ↓ (user clicks "Back to Recipes")
navigate('/') + onResetSearch() → Home Page
```

---

## 🔍 Search Implementation

The search feature filters recipes **instantly** across 4 fields:

```javascript
// Home.jsx
const filteredRecipes = recipes.filter((recipe) => {
  const term = searchTerm.toLowerCase();
  return (
    recipe.title.toLowerCase().includes(term) ||
    recipe.shortDescription.toLowerCase().includes(term) ||
    recipe.category.toLowerCase().includes(term) ||
    recipe.tags.some((tag) => tag.toLowerCase().includes(term))
  );
});
```

**Search Examples:**

- `"dinner"` → finds all Dinner category recipes
- `"vegetarian"` → finds recipes tagged "vegetarian"
- `"thai"` → finds "Tom Yum Soup" and recipes tagged "thai"
- `"quick"` → finds recipes tagged "quick"

**Why This Works:**

- Case-insensitive matching
- Checks multiple fields for relevance
- `.some()` method checks all tags
- Real-time filtering on every keystroke
- Shows result count to user

---

## 🎨 State Management

MyCookBook follows a **minimal state** approach:

```javascript
// App.jsx - The ONLY place where state is managed
const [searchTerm, setSearchTerm] = useState("");

// Data is imported, NOT stored in state
import { recipes } from "./data/recipes";

// Filtering happens in the component that needs it (Home.jsx)
const filteredRecipes = recipes.filter(/* ... */);
```

**Why This Design:**

- ✅ Single source of truth for search term
- ✅ Recipes are immutable (never change during session)
- ✅ No unnecessary state clutters the code
- ✅ Easy to add global state later if needed (Context API or Redux)
- ✅ Data flow is predictable (props down, callbacks up)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd MyCookBook
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173/
   ```

---

## 📖 Running the Application

**Development Mode** (with hot reload):

```bash
npm run dev
```

The app will automatically reload when you save changes.

**Build for Production:**

```bash
npm run build
```

Creates an optimized build in the `dist/` folder.

**Preview Production Build:**

```bash
npm run preview
```

---

## 🧪 Testing the App

### Test Search Functionality

1. Type `"vegetarian"` in the search bar
   - ✅ Should show 11 recipes tagged or categorized as vegetarian
   - ✅ Result count should display "Found 11 recipes"
   - ✅ Clear button (✕) should appear

2. Type `"thai"` in the search bar
   - ✅ Should find "Tom Yum Soup"
   - ✅ Shows recipes with "thai" tag

3. Clear search
   - ✅ All 20 recipes should display again

### Test Navigation

1. Click "View Details" on any recipe card
   - ✅ Should navigate to `/recipe/{id}`
   - ✅ Should display full recipe details

2. Click "← Back to Recipes"
   - ✅ Should return to home page
   - ✅ Search should be cleared

3. Click "🏠 Home" in navbar
   - ✅ Should return to home page from anywhere

### Test Responsive Design

1. **Desktop (1200px+)**: Recipe cards in 3-column grid
2. **Tablet (768px-1023px)**: Recipe cards in 2-column grid
3. **Mobile (480px-767px)**: Recipe cards in 1-column grid

### Test 404 Page

1. Navigate to `/about` or `/recipes/999`
   - ✅ Should display 404 page with friendly message
   - ✅ "Return to Home" button should work

---

## 📚 Recipe Data Structure

Each recipe contains:

```javascript
{
  id: 1,                           // Unique identifier
  title: "Fluffy Pancakes",        // Recipe name
  shortDescription: "...",         // One-line description
  category: "Breakfast",           // Category (Breakfast, Lunch, Dinner, Dessert, Snacks)
  cookingTime: 20,                 // Minutes to prepare
  difficulty: "Easy",              // Easy, Medium, or Hard
  servings: 4,                     // Number of servings
  ingredients: ["2 cups flour", "..."],  // Array of ingredients
  instructions: ["Mix dry...", "..."],   // Step-by-step instructions
  tags: ["vegetarian", "quick"],   // Tags for searching
  placeholderImage: "https://picsum.photos/seed/pancakes/400/300"
}
```

**Why Picsum Photos:**

- Unique seeds ensure consistent images across refreshes
- No external API keys needed
- No download required
- Simple, reliable, lightweight
- Example: `https://picsum.photos/seed/pancakes/400/300`

---

## 🎓 Learning Objectives

By building MyCookBook, you'll learn:

### React Fundamentals

- ✅ **Functional components** - All components are functions, no class components
- ✅ **Props** - Pass data down, callbacks up
- ✅ **State with `useState`** - Managing search term in App
- ✅ **Component composition** - Building larger features from smaller components
- ✅ **Controlled components** - SearchBar input value comes from props

### React Router

- ✅ **BrowserRouter** - Enable client-side routing
- ✅ **Routes & Route** - Define application routes
- ✅ **Link component** - Navigate without page refresh
- ✅ **useNavigate hook** - Programmatic navigation
- ✅ **useParams hook** - Extract URL parameters
- ✅ **Catch-all route** - Handle 404 pages

### JavaScript & ES6+

- ✅ **Array methods** - `.filter()`, `.map()`, `.find()`, `.some()`
- ✅ **Arrow functions** - Concise function syntax
- ✅ **Destructuring** - Extract values from objects/arrays
- ✅ **Template literals** - String interpolation with backticks
- ✅ **Spread operator** - Work with arrays and objects

### CSS & Responsive Design

- ✅ **Flexbox** - Navbar and footer layouts
- ✅ **CSS Grid** - Recipe card grid layout
- ✅ **Media queries** - Responsive design breakpoints
- ✅ **CSS Variables** - Potential for color theming
- ✅ **Hover effects** - Interactive UI feedback
- ✅ **Transitions** - Smooth animations

### Best Practices

- ✅ **Component separation** - Each component has one responsibility
- ✅ **Prop drilling** - Understanding data flow through components
- ✅ **Immutability** - Recipes data never changes during session
- ✅ **Comments** - Explain why code exists, not what it does
- ✅ **Meaningful names** - Functions and variables that are self-documenting
- ✅ **Responsive mobile-first** - Design for all screen sizes

---

## 🔮 Future Improvements

These enhancements would make great next steps:

### Phase 2 - User Interactivity

- **Recipe Favorites** - Save favorite recipes to localStorage
- **Ingredient Checklist** - Check off ingredients as you shop
- **Recipe Rating** - Users can rate recipes (1-5 stars)
- **Add Custom Recipes** - Form to add new recipes

### Phase 3 - Advanced Filtering

- **Filter by Difficulty** - Show only Easy/Medium/Hard
- **Filter by Cooking Time** - Show recipes under 30 minutes
- **Filter by Servings** - Show recipes for specific party size
- **Multi-select Filters** - Combine multiple filters

### Phase 4 - Data Management

- **Backend API** - Replace static data with API calls
- **Database Integration** - PostgreSQL for recipe storage
- **User Accounts** - Sign up, login, save preferences
- **Cloud Deployment** - Deploy to Vercel, Netlify, or AWS

### Phase 5 - Enhanced Features

- **Recipe Sharing** - Generate shareable recipe links
- **Nutrition Info** - Add calories, macros, allergens
- **Photo Upload** - Users can upload their own recipe photos
- **Comments** - Recipe comments and reviews
- **Related Recipes** - "You might also like..." suggestions

---

## 💭 Why React Router & Reusable Components?

### React Router Benefits

- **Single-Page Application** - No full page reloads, faster navigation
- **Clean URLs** - Each page has a unique route (`/recipe/5`)
- **Browser History** - Back/forward buttons work naturally
- **Easy to Extend** - Add new routes as features grow
- **Better UX** - Instant page transitions feel responsive

### Reusable Components Benefits

- **DRY (Don't Repeat Yourself)** - RecipeCard used 20 times, defined once
- **Maintainability** - Change one component, updates everywhere
- **Testability** - Smaller components are easier to test
- **Scalability** - Easy to add more recipes without code duplication
- **Learning** - See patterns that professionals use

### State Management Philosophy

- **Minimal State** - Only search term in state, recipes imported
- **Predictable** - Data flows one direction (down as props)
- **Scalable** - Easy to upgrade to Context API or Redux later
- **Beginner-Friendly** - Understand state before complex patterns

---

## 🐛 Troubleshooting

### App won't start

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Port 5173 already in use

```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5173
kill -9 <PID>
```

### Images not loading

- Check browser console for 404 errors
- Picsum Photos may be temporarily unavailable
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Search not filtering

- Check browser console for JavaScript errors
- Verify searchTerm is being updated in state
- Test with simple search terms like "dinner"

---

## 📝 Code Quality Checklist

This project follows these principles:

- ✅ All components under ~150 lines
- ✅ Single responsibility per component
- ✅ Meaningful variable and function names
- ✅ Comments explain WHY, not WHAT
- ✅ No console errors or warnings
- ✅ Responsive design (mobile-first)
- ✅ Semantic HTML and accessibility labels
- ✅ Consistent code formatting
- ✅ Reusable components (DRY principle)
- ✅ Clear data flow (props down, callbacks up)

---

## 🎉 Summary

MyCookBook demonstrates a professional, well-structured React application suitable for a Full Stack Academy bootcamp portfolio. The code is clean, beginner-friendly, and ready for future enhancement.

### Key Achievements

- ✅ 20 diverse, realistic recipes with complete data
- ✅ Real-time search filtering across multiple fields
- ✅ Responsive design working on all screen sizes
- ✅ Professional UI/UX with hover effects and animations
- ✅ Clean component architecture with separation of concerns
- ✅ Proper error handling (404 page)
- ✅ Thorough code documentation and comments
- ✅ No external dependencies (only React, Vite, React Router)

### What a Developer Learns

- Building React applications with components
- Client-side routing with React Router
- State management with `useState`
- Real-time data filtering and searching
- Responsive design with CSS Grid and Flexbox
- Professional code organization and best practices
- Thinking in components and data flow

---

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for learning React**

Happy cooking! 🍳👨‍🍳👩‍🍳

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
