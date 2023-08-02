import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { RandomMealProps } from '../../types';

const Homepage: React.FC = () => {
  const [numberOfMeals, setNumberOfMeals] = useState<number>(5);
  const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([]);

  const toggleLock = (idMeal: string) => {
    const flipLock = randomMeals.map((meal) => {
        if(meal.idMeal === idMeal) {
          meal.locked = !meal.locked
        }
        return meal
      }
    )
    setRandomMeals(flipLock);
  }

  useEffect(() => {
    const keepLockedRecipes = randomMeals.filter(meal => meal.locked)
    const fetchData = async () => {
      try {
        for (let i = 0; i < numberOfMeals; i++) {
          const data = await fetchSingleRandomRecipe();
          if (data?.meals) {
            data.meals.locked = false
            keepLockedRecipes.push(...data.meals);
          }
        }

        const uniqueMeals = keepLockedRecipes.filter(
          (meal, index, self) => index === self.findIndex((m) => m.idMeal === meal.idMeal)
        );

        setRandomMeals(uniqueMeals);
      } catch (error) {
        console.log(error);
      }
    };

    setRandomMeals([]);
    fetchData();
  }, [numberOfMeals]);


  return (
    <div>
      HI!
      <RandomMealForm
        numberOfMeals={numberOfMeals}
        setNumberOfMeals={setNumberOfMeals}
        setRandomMeals={setRandomMeals}
        randomMeals={randomMeals}
        toggleLock={toggleLock}
      />
    </div>
  );
};

export default Homepage;