import React, { useState } from 'react';
import './HomepageCalender.css';
import { Meal } from '../../types';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useDrop } from 'react-dnd';

interface HomepageCalenderProps {
  randomMeals: Meal[];
  toggleLock: (idMeal: string) => void;
}

interface DroppedMeal {
  id: string;
}

const HomepageCalender: React.FC<HomepageCalenderProps> = ({ randomMeals, toggleLock }) => {
  // console.log('randomMeals', randomMeals)
  const [dropCalendar, setDropCalendar] = useState<Meal[]>([]);

  // console.log('drop array1', dropCalendar)

  
  
  // console.log('before', randomMeals)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'recipe-card',
    drop: (droppedMeal: DroppedMeal) => {
      console.log('meal', droppedMeal);
      addRecipeCardToBoard(droppedMeal.id);
      // console.log('hook', randomMeals)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [randomMeals]);
  
  // working function
  console.log('before funtion', randomMeals)
  const addRecipeCardToBoard = (id: string) => {
    console.log('in function', randomMeals)

    const filteredRandomMeals = randomMeals.filter((meal) => meal.idMeal === id);
    console.log('filtered', filteredRandomMeals)

    const uniqueDroppedMeals = filteredRandomMeals.filter(
      (meal, index, self) =>
      index === self.findIndex((m) => m.idMeal === meal.idMeal)
      );
    
      setDropCalendar((prevDropCalendar) => [...prevDropCalendar, ...uniqueDroppedMeals]);
      console.log('drop', dropCalendar)
          // this issue seems like an async issue from the original fetch call
          // wonky stuff going on here. I have to trigger a refresh exactly right, even if it's just commenting in or out a console log, inside OR outside of this function, to get this conditional to work.
          // still have to work out the conditional more bc right now it only works with the object in the first position, you can still add duplicates if the object you're adding is not at uniqueDroppedMeals[0]
            // would a find work here? Or could I do a map over uniqueDroppedMeals within the .includes()?
          // }
  };
  console.log('after function', randomMeals)

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

export default HomepageCalender;