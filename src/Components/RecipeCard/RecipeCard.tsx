import React from 'react';
import { RandomMealProps } from '../../types';
import './RecipeCard.css';
import lockedIcon from '../../Assets/lockedIcon.png';
import unlockedIcon from '../../Assets/unlockedIcon.png';

interface RecipeCardProps extends RandomMealProps {
  toggleLock: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ strMeal, idMeal, strMealThumb, locked, toggleLock }) => {
  const handleLockClick = () => {
    toggleLock();
    // with localStorage we'd need to setItem() when they switch to the locked and removeItem() when they set to unlocked to accurately keep track of the localStorage.length => this may need to happen in the toggleLock function in Homepage
    // When we use setItem() we add a key/value pair, I think we could just do a key/value pair like: {recipeLock: boolean value}, that way we don't have to add the entire object
    // probably going to need a clear button for lockedRecipes/localStorage if the user wants to start over
  };

  return (
    <div className="recipe-container">
      <div className="recipe-card" id={idMeal}>
        <button onClick={handleLockClick}>
          {locked ? <img src={lockedIcon} alt="locked" /> : <img src={unlockedIcon} alt="unlocked" />}
        </button>
        <img className="recipe-image" src={strMealThumb} alt={strMeal} />
        <h3 className="recipe-name">{strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;