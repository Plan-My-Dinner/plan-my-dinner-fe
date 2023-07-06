import React, { FC, useState, MouseEventHandler, useCallback } from 'react'
import './RandomMealForm.css'
import { log } from 'console';

interface RandomMealFormProps {
    setNumberOfMeals: (numberOfMeals: number) => void;
    numberOfMeals: number
}

const RandomMealForm: FC<RandomMealFormProps> = ({ numberOfMeals, setNumberOfMeals }) => {

    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleNumberCapture = useCallback((e: any) => {
        console.log('19', e.target.value)
        setNumberOfMeals(parseInt(e.target.value));
        setOpen(false);
    }, [numberOfMeals]);

    return (
        <div className='drop-down'>
            <button onClick={handleOpen}>No. of Meals</button>
            {open ? (
                <ul className='meal-numbers'>
                    <li className='meal-5'>
                        <button onClick={handleNumberCapture} value={5}>5</button>
                    </li>
                    <li className='meal-7'>
                        <button onClick={handleNumberCapture} value={7}>7</button>
                    </li>
                </ul>
            ) : null}
        </div>
        )
}

export default RandomMealForm;