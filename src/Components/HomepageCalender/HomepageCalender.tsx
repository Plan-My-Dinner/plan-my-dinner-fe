import React, { useState } from 'react';
import './HomepageCalendar.css'
import { RandomMealProps, Meal } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useDrop } from 'react-dnd';

interface HomepageCalendarProps {
  randomMeals: RandomMealProps[];
  toggleLock: (idMeal: string) => void;
}

const HomepageCalendar: React.FC<HomepageCalendarProps> = ({ randomMeals, toggleLock }) => {
  const [dropCalendar, setDropCalendar] = useState<Meal[]>([]);

  const [, drop] = useDrop(() => ({
    accept: 'recipe-card',
    drop: (item: { idMeal: string }) => addRecipeCardToBoard(item.idMeal),
  }));

  const addRecipeCardToBoard = (id: string) => {
    const filteredRandomMeals = randomMeals.filter((meal) => id === meal.idMeal);
    setDropCalendar((dropCalendar) => [...dropCalendar, filteredRandomMeals[0]]);
  };

  return (
    <div className='homepage-calendar-container'>
      <h4 className='date'>Date</h4>
      <div className='droppable-area' ref={drop}>
        {dropCalendar.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            toggleLock={toggleLock}
            locked={true}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageCalendar;
