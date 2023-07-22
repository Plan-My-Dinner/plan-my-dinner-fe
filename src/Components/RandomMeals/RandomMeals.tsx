import React from 'react';
import { RandomMealProps } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';

type RandomMealComp = {
  randomMeals: RandomMealProps[];
  locked: boolean;
  setLocked: (locked: boolean) => void;
};

const RandomMeals: React.FC<RandomMealComp> = ({ randomMeals, locked, setLocked }) => {
  const randomMealCards = randomMeals.map((randomMeal) => {
    return (
      <RecipeCard
        strMeal={randomMeal.strMeal}
        strMealThumb={randomMeal.strMealThumb}
        idMeal={randomMeal.idMeal}
        locked={locked}
        setLocked={setLocked}
        key={randomMeal.idMeal}
      />
    );
  });

  return <div className="random-meals">{randomMealCards}</div>;
};

export default RandomMeals;