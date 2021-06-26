import React from 'react';

const Buttons = ({ buttonClicked }) => {
    return (
        <div className="button-container">
        <form action="">
        <button className="animal-btn" onClick={buttonClicked} value="cats"> <img className="animal-pic" src="/images/cat.svg" alt="" /> Cats</button>
        <button className="animal-btn" onClick={buttonClicked} value="dogs"> <img className="animal-pic" src="/images/dog-seating.svg" alt="" /> Dogs</button>
        </form>
        </div>
    );
};

export default Buttons;