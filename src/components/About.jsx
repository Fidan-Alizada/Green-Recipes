import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About our Recipe App</h2>
              <p>Welcome to the Recipe App, your ultimate destination for discovering and exploring delicious recipes from around the world. Whether you're a seasoned chef or just starting out in the kitchen, our app is designed to inspire and simplify your cooking journey.</p>

  <div className="image-container">
            <img src="https://logocowboy.com/wp-content/uploads/2017/03/green-recipes-stock-logo-lcb.png" alt="Kitchen" className="about-image" />
    </div>
       
        <p>Explore a wide variety of recipes ranging from quick and easy meals to gourmet dishes. Each recipe includes detailed instructions, ingredient lists, and cooking times, ensuring you can recreate your favorite meals with ease.</p>
        <p>Join our community of food enthusiasts, share your culinary creations, and discover new flavors to delight your taste buds. Start cooking today with Recipe App!</p>
      </div>    
      
    </div>
  );
};

export default About;
