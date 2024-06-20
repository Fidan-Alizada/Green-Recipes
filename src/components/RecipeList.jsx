import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(
        (result) => {
          setRecipes(result.recipes);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h2 className="recipe-list-title">Choose a Recipe</h2>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
