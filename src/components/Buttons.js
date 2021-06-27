import React from 'react';

const Buttons = ({ buttonClicked }) => {
    return (
        <div className="button-container">
        <span className="button-info">Please select which images you want to see.</span>
        <form action="">

        {/* run buttonClicked function when clicked, value is also set for buttons*/}

        <button className="animal-btn" onClick={buttonClicked} value="cats"> <img className="animal-pic" src="images/cat.svg" alt="" /> Cats</button>
        <button className="animal-btn" onClick={buttonClicked} value="dogs"> <img className="animal-pic" src="images/dog-seating.svg" alt="" /> Dogs</button>
        </form>
        </div>
    );
};

export default Buttons;