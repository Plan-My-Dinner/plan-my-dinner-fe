import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { RandomMealProps, Meal } from '../../types';

const Homepage: React.FC = () => {
  const [numberOfMeals, setNumberOfMeals] = useState<number>(5);
  const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newMeals: Meal[] = [];
        for (let i = 0; i < numberOfMeals; i++) {
          const data = await fetchSingleRandomRecipe();
          if (data?.meals) {
            newMeals.push(...data.meals);
          }
        }

        const uniqueMeals = newMeals.filter(
          (meal, index, self) => index === self.findIndex((m) => m.idMeal === meal.idMeal)
        );

        const mealsWithLock: RandomMealProps[] = uniqueMeals.map((meal) => ({
          ...meal,
          locked: false,
          toggleLock: () => toggleLock(meal.idMeal),
        }));

        setRandomMeals(mealsWithLock);
      } catch (error) {
        console.log(error);
      }
    };

    setRandomMeals([]);
    fetchData();
  }, [numberOfMeals]);

  const toggleLock = (idMeal: string) => {
    setRandomMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.idMeal === idMeal ? { ...meal, locked: !meal.locked } : meal
      )
    );
  };

  return (
    <div>
      HI!
      <RandomMealForm
        numberOfMeals={numberOfMeals}
        setNumberOfMeals={setNumberOfMeals}
        randomMeals={randomMeals}
        toggleLock={toggleLock}
      />
    </div>
  );
};

export default Homepage;