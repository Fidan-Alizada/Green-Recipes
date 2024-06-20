import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import Layout from './components/Layout';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
