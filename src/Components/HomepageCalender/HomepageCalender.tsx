import React, { useState } from 'react';
import './HomepageCalender.css'
import { RandomMealProps, Meal } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useDrop } from 'react-dnd';

interface HomepageCalendarProps {
  randomMeals: RandomMealProps[];
  toggleLock: (idMeal: string) => void;
}

const HomepageCalendar: React.FC<HomepageCalendarProps> = ({ randomMeals, toggleLock }) => {
  const [dropCalendar, setDropCalendar] = useState<Meal[]>([]);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   // console.log(isOver)
  //   accept: 'recipe-card',
  //   drop: (meal: { idMeal: string }) => addRecipeCardToBoard(meal.idMeal),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "recipe-card",
    drop: (meal: Meal) => addRecipeCardToBoard(meal.idMeal),
    // console.log(item)
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));

  const addRecipeCardToBoard = (id: string) => {
    const filteredRandomMeals = randomMeals.filter((meal) => meal.idMeal === id);
  
    if (filteredRandomMeals.length === 0) {
      console.error(`Meal with id ${id} not found in randomMeals`);
      console.log('randomMeals:', randomMeals);
      return;
    }
  
    console.log(`Added meal with id ${id} to the dropCalendar`);
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
