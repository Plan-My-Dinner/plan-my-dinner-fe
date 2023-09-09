import React from 'react';
import { RandomMealsProps } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RandomMeals.css'

const RandomMeals: React.FC<RandomMealsProps> = ({ randomMeals, toggleLock }) => {
  return (
    <div className="random-meals">
      {randomMeals.map((randomMeal) => (
        <RecipeCard
          key={randomMeal.idMeal}
          {...randomMeal}
          toggleLock={() => toggleLock(randomMeal.idMeal)}
        />
      ))}
    </div>
  );
};

export default RandomMeals;