import React from "react"
import { RandomMealProps } from "../Homepage/Homepage"
import './RecipeCard.css'

const RecipeCard: React.FC<RandomMealProps> = ({ strMeal, idMeal, strMealThumb, locked, setLocked }) => {

    return (
        <div className='recipe-container'>
            <div className= 'recipe-card' id={idMeal} key={idMeal}>
                <img className='recipe-image' src={strMealThumb} alt={strMeal}/>
                <h3 className='recipe-name'>{strMeal}</h3>
            </div>
        </div>
    )
}

export default RecipeCard;
