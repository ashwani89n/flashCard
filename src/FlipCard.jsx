import React, { useState } from 'react';
import './FlipCard.css';

let ques = ['What is the practice of cultivating crops without the use of synthetic chemicals?',
                  'What is the key principle of sustainable agriculture?',
                  'What is the process of rotating crops to improve soil fertility and prevent soil?',
                  'Which farming method focuses on integrating plants and animals to create a self-sustaining ecosystem?',
                  'What is the term for a system of farming that does not rely on synthetic chemicals or genetically modified organisms (GMOs)?',
                  'What is the term for rearing and raising livestock in a humane and environmentally friendly manner?',
                  'What is the term for the conservation of water resources in agriculture?',
                  'Which sustainable farming practice involves using minimal water to grow crops efficiently?',
                  'In sustainable agriculture, what is the term for the practice of saving seeds from one harvest to plant in the next season?',
                  'What is the practice of using natural predators to control pests in agriculture?'];

let ans = ['Organic',
             'Biodiversity conservation',
             'Crop Rotation',
             'Agroecology',
             'Organic farming',
             'Pasture',
             'Irrigation',
             'Drip irrigation',
             'Seed conservation',
             'Biological Control'];



function generateRandomNumber(){
const randomNumber = Math.random() * 10;
const randomInteger = Math.floor(randomNumber);
return randomInteger;
}

function FlipCard(props) {

const [isFlipped, setIsFlipped] = useState(false);
const [quesNo, setQuesNo] = useState(0);
const [currentStreak, setCurrentStreak] = useState(0);
const [longestStreak, setLongestStreak] = useState(0);
const [userAnswer, setUserAnswer] = useState('');
const [correctAnswer, setCorrectAnswer] = useState(false);
const [quesAnswered, setQuesAnswered] = useState(false);

const handleClick = () => {
    setIsFlipped(!isFlipped);
};

const nextQues = () => {
    setIsFlipped(false);
    if (quesNo < ques.length - 1) {
        setQuesNo(quesNo + 1);
        setUserAnswer('');
        setQuesAnswered(false);
    }
};

const PrevQues = () => {
    setIsFlipped(false);
    if (quesNo > 0) {
        setQuesNo(quesNo - 1);
        setUserAnswer('');
        setQuesAnswered(false);
    }
};

const shuffleQues = () => {
    const shuffledQues = [...ques];
    const shuffledAns = [...ans];

    for (let i = shuffledQues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
      
        [shuffledQues[i], shuffledQues[j]] = [shuffledQues[j], shuffledQues[i]];
        [shuffledAns[i], shuffledAns[j]] = [shuffledAns[j], shuffledAns[i]];
    }

    setQuesNo(generateRandomNumber); 
    setCurrentStreak(0); 
    setLongestStreak(0); 
    setUserAnswer(''); 
    setIsFlipped(false); 
    ques = shuffledQues;
    ans = shuffledAns;
};

const onCheckAnswer = () => {
    if (userAnswer.trim() === '') {
        console.log("not answered");
        setQuesAnswered(false);
        return;
    }
    if (userAnswer.toUpperCase() == ans[quesNo].toUpperCase()) {
        if(isFlipped)
        {
            setQuesAnswered(false);
            return;
        } 
        setCurrentStreak(currentStreak + 1);
        setLongestStreak(0);
        setCorrectAnswer(true);
        } 
        else {
        if(currentStreak > longestStreak)
            setLongestStreak(currentStreak);
        else
            setLongestStreak(longestStreak);
        setCurrentStreak(0);
        setCorrectAnswer(false);
        }
        setQuesAnswered(true);
};

const handleChange = (e) => {
    const newValue = e.target.value;
    setUserAnswer(newValue);
  };

  return (
    <>
    <table align='center'>
        <tr>
            <td>
                <div className='countHeader'>
                    <h4>Current Streak:{currentStreak}, Longest Streak:{longestStreak}</h4>
                </div> 
            </td>
        </tr>
        <tr>
            <td>
                <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                 {!isFlipped?(<div className='card-inner-front'><h2>{ques[quesNo]}</h2></div>):(<div className="card-inner-back"><h2>{ans[quesNo]}</h2></div>)}
                </div>
            </td>
        </tr>
        <tr>
            <td align='center'>
            Guess the answer here: <input type="text" name="inputtext" value={userAnswer} className={`textBox ${quesAnswered ? (correctAnswer ? "Correct" : "Incorrect") : ""}`} placeholder="Place your answer here..." onChange={handleChange} />&nbsp;
            <button type="submit" className="button submit" onClick={onCheckAnswer}>Submit Guess</button>
            </td>
        </tr>
        <br></br>
        <br></br>
        <tr >
            <td>
                <button className="prevNext" onClick={PrevQues} disabled={quesNo === 0}><img src = 'src/assets/previous.png' /></button>&nbsp;
                <button className="prevNext"  onClick={nextQues} disabled={quesNo === ques.length - 1}><img src = 'src/assets/next.png' /></button>&nbsp;
                <button className="shuffle" onClick={shuffleQues}>Shuffle Questions</button>
            </td>
        </tr>
    </table>
    </>
  );
}

export default FlipCard;
