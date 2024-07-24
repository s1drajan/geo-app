import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usa from './assets/countries/usa.png';
import canada from './assets/countries/canada.png';
import india from './assets/countries/india.png';
import japan from './assets/countries/japan.png';
import china from './assets/countries/china.png';
import uk from './assets/countries/uk.png';
import germany from './assets/countries/germany.png';
import jamaica from './assets/countries/jamaica.png';
import italy from './assets/countries/italy.png';
import skorea from './assets/countries/skorea.png';

function EasyFlags() {
  // Each country's possible correct answers are stored in arrays
  const correctAnswers = [
    ['United States', 'USA', 'UNITED STATES OF AMERICA'], 
    ['Canada'], 
    ['China'], 
    ['United Kingdom', 'UK', "GREAT BRITAIN"], 
    ['Germany'], 
    ['India'], 
    ['Italy'], 
    ['Jamaica'], 
    ['Japan'], 
    ['South Korea', 'KOREA']
  ];
  const [userAnswers, setUserAnswers] = useState(Array(correctAnswers.length).fill('')); // Initialize userAnswers with the same length as correctAnswers
  const [answerStatus, setAnswerStatus] = useState(Array(correctAnswers.length).fill('')); // Initialize answer status array
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    const newAnswerStatus = [...answerStatus];
    const newAnswers = [...userAnswers];
  
    for (let i = 0; i < correctAnswers.length; i++) {
      // Check if user's answer is in the array of correct answers for each country
      if (correctAnswers[i].some(answer => userAnswers[i].toLowerCase() === answer.toLowerCase())) {
        newScore += 1;
        newAnswerStatus[i] = 'correct';
      } else {
        newAnswerStatus[i] = 'incorrect';
        // Set the correct answer in the input box
        newAnswers[i] = correctAnswers[i][0]; // Display the first correct answer
      }
    }
  
    setScore(newScore);
    setAnswerStatus(newAnswerStatus);
    setUserAnswers(newAnswers); // Update userAnswers to show correct answers where wrong
  };
  

  const handleRetry = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const goHome = () => {
    navigate('/');
  };

  // Scroll to the bottom when score is set
  useEffect(() => {
    if (score !== null) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [score]);

  return (
    <div className="conflags">
      <div className="q">
        <img className="flags" src={usa} alt="Cambodia flag" />
        <input className={`box ${answerStatus[0]}`}
          type="text"
          value={userAnswers[0]}
          onChange={(e) => handleInputChange(0, e)}
        />
      </div>
      
      <div className="q">
        <img className="flags" src={canada} alt="Nigeria flag" />
        <input className={`box ${answerStatus[1]}`}
          type="text"
          value={userAnswers[1]}
          onChange={(e) => handleInputChange(1, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={china} alt="Venezuela flag" />
        <input className={`box ${answerStatus[2]}`}
          type="text"
          value={userAnswers[2]}
          onChange={(e) => handleInputChange(2, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={uk} alt="Philippines flag" />
        <input className={`box ${answerStatus[3]}`}
          type="text"
          value={userAnswers[3]}
          onChange={(e) => handleInputChange(3, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={germany} alt="Thailand flag" />
        <input className={`box ${answerStatus[4]}`}
          type="text"
          value={userAnswers[4]}
          onChange={(e) => handleInputChange(4, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={india} alt="Malaysia flag" />
        <input className={`box ${answerStatus[5]}`}
          type="text"
          value={userAnswers[5]}
          onChange={(e) => handleInputChange(5, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={italy} alt="Scotland flag" />
        <input className={`box ${answerStatus[6]}`}
          type="text"
          value={userAnswers[6]}
          

          onChange={(e) => handleInputChange(6, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={jamaica} alt="Qatar flag" />
        <input className={`box ${answerStatus[7]}`}
          type="text"
          value={userAnswers[7]}
          onChange={(e) => handleInputChange(7, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={japan} alt="Kenya flag" />
        <input className={`box ${answerStatus[8]}`}
          type="text"
          value={userAnswers[8]}
          onChange={(e) => handleInputChange(8, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={skorea} alt="Sri Lanka flag" />
        <input className={`box ${answerStatus[9]}`}
          type="text"
          value={userAnswers[9]}
          onChange={(e) => handleInputChange(9, e)}
        />
      </div>

      <button className="left" onClick={handleSubmit}>Submit</button>
      
      {score !== null && (
        <>
          <p className="score">You scored {score}/10</p> 
          <button className="retry" onClick={handleRetry}>Try Again?</button>
          <button className="home" onClick={goHome}>Try Another Quiz?</button>
        </>
      )}
    </div>
  );
}

export default EasyFlags;
