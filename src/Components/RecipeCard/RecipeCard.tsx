import React from 'react';
import {RandomMealProps} from '../../types'
import './RecipeCard.css';
import lockedIcon from '../../Assets/lockedIcon.png';
import unlockedIcon from '../../Assets/unlockedIcon.png';

interface RecipeCardProps extends RandomMealProps {
  locked: boolean;
  setLocked: (locked: boolean) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ strMeal, idMeal, strMealThumb, locked, setLocked }) => {
  const handleLockClick = () => {
    setLocked(!locked);
  };

  return (
    <div className="recipe-container">
      <div className="recipe-card" id={idMeal} key={idMeal}>
        <button onClick={handleLockClick}>
          {locked ? <img src={unlockedIcon} alt="unlocked" /> : <img src={lockedIcon} alt="locked" />}
        </button>
        <img className="recipe-image" src={strMealThumb} alt={strMeal} />
        <h3 className="recipe-name">{strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;