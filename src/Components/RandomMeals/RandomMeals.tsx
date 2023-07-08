import React from 'react'
import { RandomMealProps } from '../Homepage/Homepage'
import './RandomMeals.css'
import RecipeCard from '../RecipeCard/RecipeCard'

type RandomMealComp = {
    randomMeals: RandomMealProps[]
}

const RandomMeals: React.FC<RandomMealComp>= ({ randomMeals }) => {

    const randomMealCards = randomMeals.map(randomMeal => {
        return (
            <RecipeCard
            strMeal={randomMeal.strMeal}
            strMealThumb={randomMeal.strMealThumb}
            idMeal={randomMeal.idMeal}
            key={Date.now()}
            />
        )
})
    console.log('20', randomMealCards)

    return (
        <div className='random-meals'>
            {randomMealCards}
        </div>
    )
}

export default RandomMeals;