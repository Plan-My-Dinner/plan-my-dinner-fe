import React, { FC, useCallback } from 'react';
import './RandomMealForm.css';
import { RandomMealProps } from '../../types';
import RandomMeals from '../RandomMeals/RandomMeals';

interface RandomMealFormProps {
  setNumberOfMeals: (numberOfMeals: number) => void;
  numberOfMeals: number;
  randomMeals: RandomMealProps[];
  locked: boolean;
  setLocked: (locked: boolean) => void;
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals, randomMeals, locked, setLocked }) => {
  const handleOpen = () => {
    setNumberOfMeals(numberOfMeals);
  };

  const handleNumberCapture = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setNumberOfMeals(parseInt(e.target.value));
    },
    [setNumberOfMeals]
  );

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
      <RandomMeals locked={locked} setLocked={setLocked} randomMeals={randomMeals} />
    </div>
  );
};

export default RandomMealForm;