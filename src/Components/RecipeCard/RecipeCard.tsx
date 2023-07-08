import React from "react"
import { RandomMealProps } from "../Homepage/Homepage"
import './RecipeCard.css'

const RecipeCard: React.FC<RandomMealProps> = ({ strMeal, idMeal, strMealThumb }) => {

    return (
        <div className= 'recipe-card' id={idMeal} key={idMeal}>
            <img className='recipe-image' src={strMealThumb} alt={strMeal}/>
            <h3 className='recipe-name'>{strMeal}</h3>
        </div>
    )
}

export default RecipeCard;
