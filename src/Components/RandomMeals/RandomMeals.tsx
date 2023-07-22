import React from 'react';
import { RandomMealProps } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';

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
          toggleLock={() => toggleLock(randomMeal.idMeal)} // Pass toggleLock as a prop to RecipeCard
        />
      ))}
    </div>
  );
};

export default RandomMeals;