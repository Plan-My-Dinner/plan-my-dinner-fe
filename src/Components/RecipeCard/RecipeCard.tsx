import React from 'react';
import { RandomMealProps } from '../../types';
import './RecipeCard.css';
// import {useDraggable} from '@dnd-kit/core'
// import {CSS} from '@dnd-kit/utilities';
import { useDrag } from 'react-dnd';
import lockedIcon from '../../Assets/lockedIcon.png';
import unlockedIcon from '../../Assets/unlockedIcon.png';
import emptyHeart from '../../Assets/empty-heart.png'

interface RecipeCardProps extends RandomMealProps {
  toggleLock: (idMeal: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ strMeal, idMeal, strMealThumb, locked, toggleLock }) => {
  
  // const {attributes, listeners, setNodeRef, transform} = useDraggable({
  //   id: idMeal
  // });
  // const style = {
  //   transform: CSS.Translate.toString(transform),
  // };

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'recipe-card',
    item: {id: idMeal},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return (
    <div className="recipe-container">
      <div className="recipe-card" id={idMeal}>
        <button className='lock-button' onClick={() => toggleLock(idMeal)}>
          {locked ? <img src={lockedIcon} alt="locked" /> : <img src={unlockedIcon} alt="unlocked" />}
        </button>
        {/* <button ref={drag} style={{border: isDragging ? "5px solid green" : "0px"}}> */}
        <section ref={drag} style={{border: isDragging ? "5px solid green" : "0px"}}>
          <img 
          className="recipe-image" 
          src={strMealThumb} 
          alt={strMeal}
          />
          <button className='favorite-button'>
            <img src={emptyHeart} className='empty-heart' alt='empty-heart'></img>
          </button>
          <h3 className="recipe-name">{strMeal}</h3>
          </section>
      </div>
    </div>
  );
};

export default RecipeCard;