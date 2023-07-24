import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { RandomMealProps, Meal } from '../../types';

const Homepage: React.FC = () => {

  const storedLockedRecipes: string | null = localStorage.getItem('lockedRecipes')
  const initialLockedRecipes: string[] = storedLockedRecipes ? JSON.parse(storedLockedRecipes) : [];
  const [numberOfMeals, setNumberOfMeals] = useState<number>(5);
  const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([]);
  const [lockedRecipes, setLockedRecipes] = useState<string[]>(initialLockedRecipes)

  console.log('lockedRecipes', lockedRecipes)
  
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
    
    useEffect(() => {
      randomMeals.forEach(recipe => localStorage.setItem('lockedRecipes', JSON.stringify(recipe.locked)))
    }, [lockedRecipes, randomMeals])

  const toggleLock = (idMeal: string) => {
    setRandomMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.idMeal === idMeal ? { ...meal, locked: !meal.locked } : meal
      )
    );
    
    // I'm trying to get the total number of locked meals. I want to iterate over the currMeals check if any of the currMeals have a locked property set to true and then set the value of numberOfMeals to that number/lockedRecipes.length
    // const numberOfLockedMeals = randomMeals.reduce((total, meal) => (!meal.locked ? total + 1 : total), 0)
    // setNumberOfMeals(numberOfLockedMeals)
    // console.log(numberOfMeals)
  };

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