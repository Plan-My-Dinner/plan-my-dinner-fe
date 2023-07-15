import React, { FC, useState, MouseEventHandler, useCallback } from 'react';
import './RandomMealForm.css';
import { log } from 'console';
import RandomMeals from '../RandomMeals/RandomMeals';
import { RandomMealProps } from '../Homepage/Homepage';

interface RandomMealFormProps {
    setNumberOfMeals: (numberOfMeals: number) => void;
    numberOfMeals: number;
    randomMeals: RandomMealProps[];
    locked: boolean;
    setLocked: (locked: boolean) => void;
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals, randomMeals, locked, setLocked }) => {

    console.log('R', randomMeals);

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(parseInt(e.currentTarget.value));
        setNumberOfMeals(numberOfMeals);
    };

    const handleNumberCapture = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('19', e.target.value);
        setNumberOfMeals(parseInt(e.target.value));
    }, [setNumberOfMeals]);

    return (
        <div className='drop-down'>
            <button className='get-recipes-button' onClick={handleOpen}>Get Recipes</button>
            <p className='no-of-meals'>No. of meals</p>
            <select className='meal-numbers' onChange={handleNumberCapture} value={numberOfMeals}>
                <option value={5}>5</option>
                <option value={7}>7</option>
            </select>
            <RandomMeals randomMeals={randomMeals} locked={locked} setLocked={setLocked} />
        </div>
    );
};

export default RandomMealForm;