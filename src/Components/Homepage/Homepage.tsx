import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { RandomMealProps } from '../../types';

const Homepage: React.FC = () => {

  const storedLockedRecipes: string | null = localStorage.getItem('lockedRecipes')
  const initialLockedRecipes: string[] = storedLockedRecipes ? JSON.parse(storedLockedRecipes) : [];
  const [numberOfMeals, setNumberOfMeals] = useState<number>(5);
  const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([]);
  const [lockedRecipes, setLockedRecipes] = useState<string[]>(initialLockedRecipes)

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