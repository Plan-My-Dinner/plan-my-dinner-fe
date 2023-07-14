import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from "../../apiCalls";
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { log } from 'console';

export type RandomMealProps = {
    strMeal: string
    idMeal: string
    strMealThumb: string
}

const Homepage = () => {

    const [numberOfMeals, setNumberOfMeals] = useState<number>(5)
    const [randomMeals, setRandomMeals] = useState<RandomMealProps[]>([])

// useEffect(() => {
//     for (let i = 0; i < numberOfMeals; i++) {
//         console.log('19', numberOfMeals)
//         const fetchData = async() => {
//             try {
//                 const data = await fetchSingleRandomRecipe()
//                 console.log('23', data.meals)
//                 console.log('type', typeof data )
//                 randomMeals.push(data.meals)
//                 console.log('26', randomMeals)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetchData()
//     }
// }, [numberOfMeals])

useEffect(() => {
    const fetchData = async () => {
      try {
        const newMeals = [];
        for (let i = 0; i < numberOfMeals; i++) {
          const data = await fetchSingleRandomRecipe();
          newMeals.push(...data.meals);
        }
  
        const uniqueMeals = newMeals.filter(
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
            <RandomMealForm numberOfMeals={numberOfMeals} setNumberOfMeals={setNumberOfMeals} randomMeals={randomMeals}/>
        </div>
    )
}

export default Homepage;