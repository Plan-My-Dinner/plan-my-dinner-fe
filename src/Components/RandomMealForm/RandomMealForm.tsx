import React, { FC, useCallback, useEffect } from 'react';
import './RandomMealForm.css';
import { RandomMealProps } from '../../types';
import RandomMeals from '../RandomMeals/RandomMeals';

interface RandomMealFormProps {
  setNumberOfMeals: (numberOfMeals: number) => void;
  numberOfMeals: number;
  setRandomMeals: (randomMeals: RandomMealProps[]) => void;
  randomMeals: RandomMealProps[];
  toggleLock: (idMeal: string) => void;
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals, setRandomMeals, randomMeals, toggleLock }) => {
    
    const handleNumberCapture = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setNumberOfMeals(parseInt(e.target.value));
        },
        [setNumberOfMeals]
        );

        const handleOpen = () => {
          // setNumberOfMeals(numberOfMeals);
          const numberOfLockedMeals = randomMeals.reduce((total, meal) => (meal.locked ? total + 1 : total), 0)
          console.log('numberofLockedMeals', numberOfLockedMeals)
          setNumberOfMeals(numberOfMeals - numberOfLockedMeals)
          console.log('numberOfMeals', numberOfMeals)
          // okay this is showing us the correct number of meals on the page. If you lock 2 meals out of 5 meals and click Get Recipes it rerenders the page and only shows you 3 new random meals
          // now we have to figure out how to get the 2 locked meals to persist on the page when the rerender happens, or figure out how to get 3 new meals without rerendering the page => I think this means we'll need a useEffect, maybe with the localStorage as a dependency
            // I think we need to update the randomMeals array
                // Make sure the array.length is always the number sent through by the user, right now either 5 or 7
                // whatever meals get locked stay constant in this array and the other meals get changed out, this way the randomMeals array that we're mapping over doesn't change
                // Need to 
            // setRandomMeals((prevMeals) => 
            //     prevMeals.map((meal) => 
            //         if (meal.idMeal === idMeal && !meal.locked) {
            //             {...meal, newMeal}
            //         }
            //     )
            // )
        };

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