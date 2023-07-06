import React, { useEffect, useState } from 'react';
import { fetchSingleRandomRecipe } from "../../apiCalls";
import RandomMealForm from '../RandomMealForm/RandomMealForm';
import { log } from 'console';

const Homepage = () => {

    const [numberOfMeals, setNumberOfMeals] = useState<number>(5)


useEffect(() => {
    for (let i = 0; i < numberOfMeals; i++) {
        console.log('13', numberOfMeals)
        const fetchData = async() => {
            try {
                const data = await fetchSingleRandomRecipe()
                console.log('13', data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }
}, [numberOfMeals])

    return (
        <div>
            HI!
            <RandomMealForm numberOfMeals={numberOfMeals} setNumberOfMeals={setNumberOfMeals}/>
        </div>
    )
}

export default Homepage;