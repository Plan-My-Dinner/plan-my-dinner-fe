
import React, { FC } from 'react';
import './RandomMealForm.css';
// import { useDrop } from 'react-dnd';
import { RandomMealProps } from '../../types';
import RandomMeals from '../RandomMeals/RandomMeals';
// import RecipeCard from '../RecipeCard/RecipeCard'

interface RandomMealFormProps {
  setNumberOfMeals: (numberOfMeals: number) => void;
  numberOfMeals: number;
  setRandomMeals: (randomMeals: RandomMealProps[]) => void
  randomMeals: RandomMealProps[];
  toggleLock: (idMeal: string) => void;
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals, setRandomMeals, randomMeals, toggleLock }) => {

  const handleOpen = () => {
    setNumberOfMeals(numberOfMeals);
    const numberOfLockedMeals = randomMeals.reduce((total, meal) => (meal.locked ? total + 1 : total), 0)
    setNumberOfMeals(randomMeals.length - numberOfLockedMeals)
  };

  const handleNumberCapture = ((e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfMeals(parseInt(e.target.value));
    setRandomMeals([])
});

  return (
    <div className="drop-down">
      <div className='input-section'>
        <button className="get-recipes-button" onClick={handleOpen}>
          Get Recipes
        </button>
        <p className="no-of-meals">How many meals would you like to plan?</p>
      <select className="meal-numbers" onChange={handleNumberCapture} value={numberOfMeals}>
        <option value={5}>5</option>
        <option value={7}>7</option>
      </select>
      </div>
      <div className='random-meals-section'>
        <RandomMeals randomMeals={randomMeals} toggleLock={toggleLock} />
      </div>
    </div>
  );
};

export default RandomMealForm;