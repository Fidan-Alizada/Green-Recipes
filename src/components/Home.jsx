import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Discover Delicious Recipes</h1>
        <p>Welcome to the Recipe App, your ultimate destination for exploring mouth-watering recipes from around the world.</p>
        <Link to="/recipes" className="explore-button">Explore Recipes</Link>
      </div>
      <div className="home-image">
        <img src="https://i.giphy.com/MPhcO7HVYcXgZoLxRo.webp" alt="Kitchen" className="kitchen-image" />
      </div>
    </div>
  );
};

export default Home;
