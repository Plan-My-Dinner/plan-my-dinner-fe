import React from 'react';
import { Meal } from '../../types';
import './WelcomeBox.css';

// interface WelcomeBoxProps extends Meal {
//     toggleLock: (idMeal: string) => void;
//   }

const WelcomeBox: React.FC<Meal> = ({ strMealThumb, strMeal }) => {

    return (
        <div className="welcome-box">
            <div className='welcome-image-container'>
                <img className='welcome-image' src={strMealThumb} alt={strMeal} />
            </div>
            <div className='welcome-text-container full-width'>
                <h1>Start Planning Your Week!</h1>
                <p>All you have to do is click and Cook!</p>
                <p>Select how many meals you need to cook this week.</p>
                <p>We will find that many recipe suggestions for you to try</p>
                <p>Find Something you like?</p>
                <p>Lock the ones you olve and want tthis week.</p>
                <p>We will find a new recipe suggestion for anything you don't lock in for the week.</p>
                <p>Love if you want it but just not right now.</p>
                <p>We will save to your recipe box for later.</p>
                <p>Drop the receips you want on the calendar.</p>
                <p>We will save that meal plan for you and show you exactly what you planned for today front and center.</p>
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </div>
    )

}

export default WelcomeBox;