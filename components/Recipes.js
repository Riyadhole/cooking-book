import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
const recipeList = [
    { id: 1, name: 'Spaghetti Carbonara' },
    { id: 2, name: 'Chicken Curry' },
    { id: 3, name: 'Beef Stew' },
];

return (
    <div>
    <h1>Recipes</h1>
    <ul>
        {recipeList.map(recipe => (
        <li key={recipe.id}>
        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Recipes;