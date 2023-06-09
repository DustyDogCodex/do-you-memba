import { useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import MainDisplay from './components/MainDisplay.js'
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti';

function App() {

  //array containing character info as objects
  const kingsOfTheHill = [
        {
          id: uuidv4(),
          name: 'Bill Dauterive',
          image: './images/bill-dauterive.jpeg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Bobby Hill',
          image: './images/bobby-hill.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Boomhauser',
          image: './images/boomhauser.jpeg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Cotton Hill',
          image: './images/cotton-hill.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Dale Gribble',
          image: './images/dale-gribble.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Hank Hill',
          image: './images/hank-hill.jpeg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'John Redcorn',
          image: './images/john-redcorn.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Kahn Souphanousinphone',
          image: './images/kahn-souphanousinphone.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Luanne Platter',
          image: './images/luanne-platter.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Minh Souphanousinphone',
          image: './images/Minh_Souphanousinphone.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Nancy Gribble',
          image: './images/nancy-gribble.jpg',
          alreadyClicked: false
        },
        {
          id: uuidv4(),
          name: 'Peggy Hill',
          image: './images/peggy-hill.jpg',
          alreadyClicked: false
        },
  ]

  //using state to keep track of cards,score and highScore
  const [cards, setCards] = useState(kingsOfTheHill)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  //function to shuffle cards when one has been clicked
  //this is a version of Schwartzian transform in JS.
  function startShuffle(id){

    //shuffle cards
    let shuffled = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    //checking to see if the card has already been clicked before
    const selected_card = cards.filter(card => card.id === id)
    //selected_card[0] since filter returns an array with the card object inside it.
    if(selected_card[0].alreadyClicked){
      //if card was alreadyClicked, reset the score to zero and all alreadyClicked values to false
      if(score > highScore){
        setHighScore(score)
      }
      setScore(0)
      setCards(shuffled.map(card => ({ ...card, alreadyClicked: false })))
     } else {
      //if card wasn't already clicked, the game continues and we flip that cards alreadyClicked value.
      setScore(score + 1)
      //toggle alreadyClicked values
      setCards(shuffled.map(card => card.id === id ? {...card, alreadyClicked: !card.alreadyClicked } : card))
    }

  }
  
  return (
    <div className="App">
      <Header />
      <MainDisplay cards={cards} score={score} highScore={highScore} startShuffle={startShuffle} />
      {score === 12 && <Confetti />}
    </div>
  );
}

export default App;
