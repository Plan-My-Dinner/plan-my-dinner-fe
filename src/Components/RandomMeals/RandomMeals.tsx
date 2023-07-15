import React from 'react';
import { RandomMealProps } from '../Homepage/Homepage';
import './RandomMeals.css';
import RecipeCard from '../RecipeCard/RecipeCard';

interface RandomMealsProps {
    randomMeals: RandomMealProps[];
    locked: boolean;
    setLocked: (locked: boolean) => void;
}

const RandomMeals: React.FC<RandomMealsProps> = ({ randomMeals, locked, setLocked }) => {
    const randomMealCards = randomMeals.map(randomMeal => {
        return (
            <RecipeCard
                strMeal={randomMeal.strMeal}
                strMealThumb={randomMeal.strMealThumb}
                idMeal={randomMeal.idMeal}
                key={randomMeal.idMeal}
                locked={locked}
                setLocked={setLocked}
            />
        );
    });

    console.log('20', randomMealCards);

    return (
        <div className='random-meals'>
            {randomMealCards}
        </div>
    );
};

export default RandomMeals;