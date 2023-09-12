import React from 'react';
import { RandomMealsProps } from '../../types';
import './WelcomeBox.css'

// interface WelcomeBoxProps extends Meal {
//     toggleLock: (idMeal: string) => void;
//   }

const WelcomeBox: React.FC<RandomMealsProps> = ({ randomMeals }) => {

    const GetRandomMeal = Math.floor(Math.random() * randomMeals.length);

    return (
        <div className="welcome-box">
            <div className='welcome-image-container'>
                <img className='welcome-image' src={randomMeals[GetRandomMeal].strMealThumb} alt={randomMeals[GetRandomMeal].strMealThumb} />
            </div>
            <div className='welcome-text-container full-width'>
                <h1>Start Planning Your Week!</h1>
                <p>All you have to do is <span className='bold'>click</span> and <span className='bold'>Cook!</span></p>
                <p><span className='bold'>Select</span> how many meals you need to cook this week.</p>
                <p className='sub-text'>We will find that many recipe suggestions for you to try</p>
                <p><span className='bold'>Find</span> Something you like?</p>
                <p><span className='bold'>Lock</span> the ones you olve and want tthis week.</p>
                <p className='sub-text'>We will find a new recipe suggestion for anything you don't lock in for the week.</p>
                <p><span className='bold'>Love</span> if you want it but just not right now.</p>
                <p className='sub-text'>We will save to your recipe box for later.</p>
                <p><span className='bold'>Drop</span> the receips you want on the calendar.</p>
                <p className='sub-text'>We will save that meal plan for you and show you exactly what you planned for today front and center.</p>
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </div>
    )

}

export default WelcomeBox;