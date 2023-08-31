import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <div className="header-container">
            <div className="right-side">
                <h1 className="header">Plan My Meal</h1>
            </div>
            <div className="left-side">
                <h3 className="message">Welcome!</h3>
                <button className="saved-recipes-button">Saved Recipes</button>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}

export default Header;