import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cambodia from './assets/countries/cambodia.png';
import nigeria from './assets/countries/nigeria.png';
import venezuela from './assets/countries/venezuela.png';
import philippines from './assets/countries/philippines.png';
import thailand from './assets/countries/thailand.png';
import malaysia from './assets/countries/malaysia.png';
import scotland from './assets/countries/scotland.jpg';
import qatar from './assets/countries/qatar.png';
import kenya from './assets/countries/kenya.png';
import srilanka from './assets/countries/srilanka.png';

function MediumFlags() {
  // Each country's possible correct answers are stored in arrays
  const correctAnswers = [
    ['Cambodia'], 
    ['Nigeria'], 
    ['Venezuela'], 
    ['Philippines', 'The Philippines'], 
    ['Thailand'], 
    ['Malaysia'], 
    ['Scotland'], 
    ['Qatar'], 
    ['Kenya'], 
    ['Sri Lanka']
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
        <img className="flags" src={cambodia} alt="Cambodia flag" />
        <input className={`box ${answerStatus[0]}`}
          type="text"
          value={userAnswers[0]}
          onChange={(e) => handleInputChange(0, e)}
        />
      </div>
      
      <div className="q">
        <img className="flags" src={nigeria} alt="Nigeria flag" />
        <input className={`box ${answerStatus[1]}`}
          type="text"
          value={userAnswers[1]}
          onChange={(e) => handleInputChange(1, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={venezuela} alt="Venezuela flag" />
        <input className={`box ${answerStatus[2]}`}
          type="text"
          value={userAnswers[2]}
          onChange={(e) => handleInputChange(2, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={philippines} alt="Philippines flag" />
        <input className={`box ${answerStatus[3]}`}
          type="text"
          value={userAnswers[3]}
          onChange={(e) => handleInputChange(3, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={thailand} alt="Thailand flag" />
        <input className={`box ${answerStatus[4]}`}
          type="text"
          value={userAnswers[4]}
          onChange={(e) => handleInputChange(4, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={malaysia} alt="Malaysia flag" />
        <input className={`box ${answerStatus[5]}`}
          type="text"
          value={userAnswers[5]}
          onChange={(e) => handleInputChange(5, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={scotland} alt="Scotland flag" />
        <input className={`box ${answerStatus[6]}`}
          type="text"
          value={userAnswers[6]}
          

          onChange={(e) => handleInputChange(6, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={qatar} alt="Qatar flag" />
        <input className={`box ${answerStatus[7]}`}
          type="text"
          value={userAnswers[7]}
          onChange={(e) => handleInputChange(7, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={kenya} alt="Kenya flag" />
        <input className={`box ${answerStatus[8]}`}
          type="text"
          value={userAnswers[8]}
          onChange={(e) => handleInputChange(8, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={srilanka} alt="Sri Lanka flag" />
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

export default MediumFlags;
