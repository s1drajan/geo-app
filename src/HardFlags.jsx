import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import uganda from './assets/countries/uganda.png';
import uzbekistan from './assets/countries/uzbekistan.png';
import vanuatu from './assets/countries/vanuatu.jpg';
import palau from './assets/countries/palau.png';
import capeverde from './assets/countries/capeverde.png';
import djibouti from './assets/countries/djibouti.png';
import eritrea from './assets/countries/eritrea.jpg';
import aruba from './assets/countries/aruba.jpg';
import belarus from './assets/countries/belarus.jpg';
import benin from './assets/countries/benin.jpg';

function HardFlags() {
  const correctAnswers = [
    ['Uganda'], 
    ['Uzbekistan'], 
    ['Vanuatu'], 
    ['Palau'], 
    ['Cape Verde', 'Cabo Verde'], 
    ['Djibouti'], 
    ['Eritrea'], 
    ['Aruba'], 
    ['Belarus'], 
    ['Benin']
  ];

  const [userAnswers, setUserAnswers] = useState(Array(correctAnswers.length).fill(''));
  const [answerStatus, setAnswerStatus] = useState(Array(correctAnswers.length).fill(''));
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
      if (correctAnswers[i].some(answer => userAnswers[i].toLowerCase() === answer.toLowerCase())) {
        newScore += 1;
        newAnswerStatus[i] = 'correct';
      } else {
        newAnswerStatus[i] = 'incorrect';
        newAnswers[i] = correctAnswers[i][0];
      }
    }
  
    setScore(newScore);
    setAnswerStatus(newAnswerStatus);
    setUserAnswers(newAnswers);
  };

  const handleRetry = () => {
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (score !== null) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [score]);

  return (
    <div className="conflags">
      <div className="q">
        <img className="flags" src={uganda} alt="Uganda flag" />
        <input className={`box ${answerStatus[0]}`}
          type="text"
          value={userAnswers[0]}
          onChange={(e) => handleInputChange(0, e)}
        />
      </div>
      
      <div className="q">
        <img className="flags" src={uzbekistan} alt="Uzbekistan flag" />
        <input className={`box ${answerStatus[1]}`}
          type="text"
          value={userAnswers[1]}
          onChange={(e) => handleInputChange(1, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={vanuatu} alt="Vanuatu flag" />
        <input className={`box ${answerStatus[2]}`}
          type="text"
          value={userAnswers[2]}
          onChange={(e) => handleInputChange(2, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={palau} alt="Palau flag" />
        <input className={`box ${answerStatus[3]}`}
          type="text"
          value={userAnswers[3]}
          onChange={(e) => handleInputChange(3, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={capeverde} alt="Cape Verde flag" />
        <input className={`box ${answerStatus[4]}`}
          type="text"
          value={userAnswers[4]}
          onChange={(e) => handleInputChange(4, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={djibouti} alt="Djibouti flag" />
        <input className={`box ${answerStatus[5]}`}
          type="text"
          value={userAnswers[5]}
          onChange={(e) => handleInputChange(5, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={eritrea} alt="Eritrea flag" />
        <input className={`box ${answerStatus[6]}`}
          type="text"
          value={userAnswers[6]}
          onChange={(e) => handleInputChange(6, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={aruba} alt="Aruba flag" />
        <input className={`box ${answerStatus[7]}`}
          type="text"
          value={userAnswers[7]}
          onChange={(e) => handleInputChange(7, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={belarus} alt="Belarus flag" />
        <input className={`box ${answerStatus[8]}`}
          type="text"
          value={userAnswers[8]}
          onChange={(e) => handleInputChange(8, e)}
        />
      </div>

      <div className="q">
        <img className="flags" src={benin} alt="Benin flag" />
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

export default HardFlags;
