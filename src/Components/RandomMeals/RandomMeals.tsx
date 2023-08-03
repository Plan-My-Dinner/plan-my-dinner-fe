import React from 'react';
import { RandomMealProps } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RandomMeals.css'

interface RandomMealsProps {
  randomMeals: RandomMealProps[];
  toggleLock: (idMeal: string) => void;
}

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