import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import Header from '../Header/Header';
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import Footer from '../Footer/Footer';
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
      fetchData();
    }, [numberOfMeals]);

  return (
    <div className='homepage'>
      <Header />
      {randomMeals.length > 0 && (
        <WelcomeBox
          strMealThumb={randomMeals[0].strMealThumb}
          strMeal={randomMeals[0].strMeal}
          idMeal={randomMeals[0].idMeal}
        />
      )}
      <RandomMealForm
        numberOfMeals={numberOfMeals}
        setNumberOfMeals={setNumberOfMeals}
        setRandomMeals={setRandomMeals}
        randomMeals={randomMeals}
        toggleLock={toggleLock}
      />
      <Footer />
    </div>
  );
};

export default Homepage;