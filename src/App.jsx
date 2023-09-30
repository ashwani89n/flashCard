import './App.css';
import './FlipCard.css';
import React from 'react';
import FlipCard from './FlipCard';
import { useState } from 'react';

const App = () => {
  
  return (
    <>
      <div className='container'>
      <div className="App">
        <h2>The Ultimate Guide for Sustainable Agriculture</h2>
        <h4>Ever wondered about sustainable agriculture? Test your farming and food sustainability knowledge in our eco-agriculture quiz!</h4>
        <h4>Number of Cards: 10</h4>
      </div>
      <FlipCard/>
      </div>
      </>
  )
}

export default App



