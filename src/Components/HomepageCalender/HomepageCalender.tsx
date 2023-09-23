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
  console.log('1', randomMeals)
  const [dropCalendar, setDropCalendar] = useState<Meal[]>([]);

  console.log('drop array1', dropCalendar)

  const [{ isOver }, drop] = useDrop(() => ({
  accept: 'recipe-card',
  drop: (droppedMeal: DroppedMeal) => {
    console.log('meal', droppedMeal);
    addRecipeCardToBoard(droppedMeal.id);
  },
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  }),
}));


  console.log('before', randomMeals)

  // const addRecipeCardToBoard = (id: string) => {
  //   console.log('add', randomMeals)
  //   const filteredRandomMeals = randomMeals.filter((meal) => meal.idMeal === id);

  //   if (filteredRandomMeals.length === 0) {
  //     console.error(`Meal with id ${id} not found in randomMeals`);
  //     console.log('randomMeals:', randomMeals);
  //     return;
  //   }

  //   console.log(`Added meal with id ${id} to the dropCalendar`);
  //   setDropCalendar((dropCalendar) => [...dropCalendar, filteredRandomMeals[0]]);
  // };

  const addRecipeCardToBoard = (id: string) => {
    const filteredRandomMeals = randomMeals.filter((meal) => meal.idMeal === id);
  
    if (filteredRandomMeals.length === 0) {
      console.error(`Meal with id ${id} not found in randomMeals`);
      return;
    }
  
    console.log(`Added meal with id ${id} to the dropCalendar`);
  
    if (!dropCalendar.some((meal) => meal.idMeal === id)) {
      setDropCalendar((dropCalendar) => [...dropCalendar, filteredRandomMeals[0]]);
    }
  };
  
  console.log('after', randomMeals)
  console.log('drop array2', dropCalendar)

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