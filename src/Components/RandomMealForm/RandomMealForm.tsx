import React, { FC, useState, MouseEventHandler, useCallback } from 'react'
import './RandomMealForm.css'
import { log } from 'console';
import RandomMeals from '../RandomMeals/RandomMeals';
import { RandomMealProps } from '../Homepage/Homepage';

interface RandomMealFormProps {
    setNumberOfMeals: (numberOfMeals: number) => void;
    numberOfMeals: number
    randomMeals: RandomMealProps[]
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals, randomMeals }) => {

    console.log('R', randomMeals)

    // const [open, setOpen] = useState<boolean>(false)

    const handleOpen = (e: any) => {
        console.log(parseInt(e.target.value))
        setNumberOfMeals(numberOfMeals)
        //setOpen(!open)
    }

    //create array called lockedRecipes to push in recipe id's of the locked recipes
    //if locked recipes has.length, we will subtract lockedRecipes.length from randomRecipes.length

    const handleNumberCapture = useCallback((e: any) => {
        console.log('19', e.target.value)
        setNumberOfMeals(parseInt(e.target.value))
        // const selectedValue = parseInt(e.target.value)
        // setNumberOfMeals(selectedValue);
        //setOpen(false);
    }, [setNumberOfMeals]);

    return (
        <div className='drop-down'>
            <button className='get-recipes-button' onClick={handleOpen}>Get Recipes</button>
            <p className='no-of-meals'>No. of meals</p>
            <select className='meal-numbers' onChange={handleNumberCapture} value={numberOfMeals}>
                <option value={5}>5</option>
                <option value={7}>7</option>
            </select>
            <RandomMeals randomMeals={randomMeals}/>
        </div>
    )
}

export default RandomMealForm;