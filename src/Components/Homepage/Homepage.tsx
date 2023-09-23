import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import Footer from '../Footer/Footer';
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import HomepageCalender from '../HomepageCalender/HomepageCalender';
import { fetchSingleRandomRecipe } from '../../apiCalls';
import { RandomMealProps } from '../../types';

const Homepage: React.FC = () => {
  const [numberOfMeals, setNumberOfMeals] = useState<number>(5);
  const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([]);

  const toggleLock = (idMeal: string) => {
    const updatedRandomMeals = randomMeals.map((meal) => {
      if (meal.idMeal === idMeal) {
        return { ...meal, locked: !meal.locked }; // Create a new object
      }
      return meal;
    });

    setRandomMeals(updatedRandomMeals);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMeals = [];
        for (let i = 0; i < numberOfMeals; i++) {
          const data = await fetchSingleRandomRecipe();
          if (data?.meals) {
            const newMeals = data.meals.map((meal: RandomMealProps) => ({  // Specify the type for meal
              ...meal,
              locked: false,
            }));
            fetchedMeals.push(...newMeals);
          }
        }

        // Deduplicate meals by idMeal
        const uniqueMeals = fetchedMeals.filter(
          (meal, index, self) =>
            index === self.findIndex((m) => m.idMeal === meal.idMeal)
        );

        setRandomMeals(uniqueMeals);
      } catch (error) {
        console.error(error);
        // Handle errors here if needed
      }
    };

    fetchData();
  }, [numberOfMeals]);

  return (
    <div className='homepage'>
      <Header />
      {randomMeals.length > 0 && (
        <WelcomeBox randomMeals={randomMeals} toggleLock={toggleLock} />
      )}
      <RandomMealForm
        numberOfMeals={numberOfMeals}
        setNumberOfMeals={setNumberOfMeals}
        setRandomMeals={setRandomMeals}
        randomMeals={randomMeals}
        toggleLock={toggleLock}
      />
      <HomepageCalender randomMeals={randomMeals} toggleLock={toggleLock} />
      <Footer />
    </div>
  );
};

export default Homepage;
