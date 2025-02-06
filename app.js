const { useState } = React;

const categories = ["Breakfast", "Lunch", "Dinner", "Snacks", "Desserts", "Vegan", "Meat", "Fish", "Pasta", "Soup"];
const sampleRecipes = [
    { id: 1, name: "Pancakes", category: "Breakfast", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and fry.", time: "20 min", servings: 2, calories: 350, difficulty: "Easy", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Salad", category: "Lunch", ingredients: ["Lettuce", "Tomatoes", "Cucumber"], instructions: "Chop and mix.", time: "10 min", servings: 1, calories: 150, difficulty: "Easy", image: "https://via.placeholder.com/150" }
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [myRecipes, setMyRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", instructions: "" });

    const toggleFavorite = (recipe) => {
        setFavorites(prev => prev.includes(recipe) ? prev.filter(r => r !== recipe) : [...prev, recipe]);
    };

    const addNewRecipe = () => {
        if (newRecipe.name.trim()) {
            setMyRecipes([...myRecipes, { ...newRecipe, id: myRecipes.length + 1 }]);
            setNewRecipe({ name: "", ingredients: "", instructions: "" });
        }
    };

    return (
        <div className="container">
            <h2>Foodie App</h2>

            {/* Category List */}
            <div className="category-list">
                {categories.map((cat, index) => (
                    <div key={index} className="category" onClick={() => setSelectedCategory(cat)}>
                        {cat}
                    </div>
                ))}
            </div>

            {/* Recipe List */}
            {sampleRecipes.filter(r => !selectedCategory || r.category === selectedCategory).map(recipe => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.name} />
                    <h3>{recipe.name}</h3>
                    <p>Time: {recipe.time}</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>Calories: {recipe.calories}</p>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <button onClick={() => toggleFavorite(recipe)}>
                        {favorites.includes(recipe) ? "Unfavorite ❤️" : "Favorite 🤍"}
                    </button>
                </div>
            ))}

            {/* Add New Recipe */}
            <h3>Add New Recipe</h3>
            <input type="text" placeholder="Recipe Name" value={newRecipe
