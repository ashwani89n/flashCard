import React, { useState } from 'react';
import './FlipCard.css';

const ques = ['What does the term "sustainable agriculture" refer to?',
                  'What is the key principle of sustainable agriculture?',
                  'What is the purpose of using cover crops in sustainable agriculture?',
                  'Which farming method focuses on integrating plants and animals to create a self-sustaining ecosystem?',
                  'What is the term for a system of farming that does not rely on synthetic chemicals or genetically modified organisms (GMOs)?',
                  'How does sustainable agriculture contribute to climate change mitigation?',
                  'What is the primary goal of agroforestry?',
                  'Which sustainable farming practice involves using minimal water to grow crops efficiently?',
                  'In sustainable agriculture, what is the term for the practice of saving seeds from one harvest to plant in the next season?',
                  'What role do pollinators like bees and butterflies play in sustainable agriculture?'];

const ans = ['Sustainable agriculture refers to farming practices that aim to protect the environment and ensure the long-term viability of food production.',
              'Biodiversity conservation',
             'Cover crops are used to protect and enrich the soil, prevent erosion, and suppress weeds between main crop plantings.',
             'Agroecology',
             'Organic farming',
             'Sustainable agriculture can sequester carbon in the soil, reducing greenhouse gas emissions and helping combat climate change',
             'Agroforestry combines trees or shrubs with crops or livestock to enhance land productivity, biodiversity, and environmental sustainability',
             'Drip irrigation or water-efficient irrigation methods',
             'Seed saving or seed conservation',
             'Pollinators are essential for the reproduction of many crops, contributing to higher yields and biodiversity in sustainable farming systems'];

function generateRandomNumber(){
const randomNumber = Math.random() * 10;
const randomInteger = Math.floor(randomNumber);
return randomInteger;
}


function FlipCard(props) {

const [isFlipped, setIsFlipped] = useState(false);
const [quesNo, setQuesNo] = useState(0);

const handleClick = () => {
    setIsFlipped(!isFlipped);
};

const nextQues = () => {
    setIsFlipped(false);
    setQuesNo(generateRandomNumber());
};
  
  return (
    <>
    <table align='center'>
        <tr>
            <td>
                <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                 {!isFlipped?(<div className='card-inner-front'><h2>{ques[quesNo]}</h2></div>):(<div className="card-inner-back"><h2>{ans[quesNo]}</h2></div>)}
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <button onClick={nextQues}><img src = 'src/assets/next.png' /></button>
            </td>
        </tr>
    </table>
    </>
  );
}

export default FlipCard;
