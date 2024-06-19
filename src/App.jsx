import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedStar, setSelectedStar] = useState(0);
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0);

  const handleStarHover = (starCount) => {
    setSelectedHoverStarCount(starCount);
  };

  const handleStarClick = (starCount) => {
    setSelectedStar(starCount);
  };

  const handleMouseOut = () => {
    setSelectedHoverStarCount(0);
  };

  return (
    <div className='App'>
      <div className="card">
        <h2 className="title">Star Rating</h2>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index + 1 <= selectedStar || index + 1 <= selectedHoverStarCount ? 'selected' : ''}`}
              onMouseOver={() => handleStarHover(index + 1)}
              onMouseOut={handleMouseOut}
              onClick={() => handleStarClick(index + 1)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className='rating-section'>
          <p>Hover Rating: {selectedHoverStarCount}</p>
          <p>Selected Rating: {selectedStar}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
