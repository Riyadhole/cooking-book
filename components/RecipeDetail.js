import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = {
    1: { name: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Cheese, Bacon', instructions: 'Cook pasta. Mix eggs and cheese. Fry bacon. Combine all.' },
    2: { name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: 'Cook chicken. Add curry powder and coconut milk. Simmer.' },
    3: { name: 'Beef Stew', ingredients: 'Beef, Carrots, Potatoes, Onion', instructions: 'Brown beef. Add vegetables. Simmer until tender.' },
  };

  const recipe = recipes[id];

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
