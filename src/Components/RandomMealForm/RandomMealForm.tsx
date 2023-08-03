
import React, { FC } from 'react';
import './RandomMealForm.css';
import { RandomMealProps } from '../../types';
import RandomMeals from '../RandomMeals/RandomMeals';

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
      <button className="get-recipes-button" onClick={handleOpen}>
        Get Recipes
      </button>
      <p className="no-of-meals">No. of meals</p>
      <select className="meal-numbers" onChange={handleNumberCapture} value={numberOfMeals}>
        <option value={5}>5</option>
        <option value={7}>7</option>
      </select>
      <RandomMeals randomMeals={randomMeals} toggleLock={toggleLock} />
    </div>
  );
};

export default RandomMealForm;