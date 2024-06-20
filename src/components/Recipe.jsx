import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Recipe.css'; 

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setRecipe(result);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, [id]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  if (!recipe) {
    return <div className="container">Recipe not found!</div>;
  }

  return (
    <div className="container">
      <div className="recipe-card">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <h3>Cuisine: {recipe.cuisine}</h3>
        <h3>Cook Time: {recipe.cookTimeMinutes} minutes</h3>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>

      
        <Link to="/recipes" className="back-button">Back to Recipes</Link>
      </div>
    </div>
  );
};

export default Recipe;
