import React from 'react';
import './won.css';

const Won = () => {
    return (
        <div className="overlay">
            <div className="won-box">
                <h1>You Won the Game!</h1>
                <div className="btn-group">
                    <button >Play Again</button>
                    <button >Quit</button>
                </div>
            </div>
        </div>
    );
}

export default Won;
