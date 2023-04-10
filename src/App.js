import { useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import MainDisplay from './components/MainDisplay.js'

function App() {

  //array containing character info as objects
  const kingsOfTheHill = [
        {
            name: 'Bill Dauterive',
            image: './images/bill-dauterive.jpeg',
            alreadyClicked: false
        },
        {
            name: 'Bobby Hill',
            image: './images/bobby-hill.jpg',
            alreadyClicked: false
        },
        {
            name: 'Boomhauser',
            image: './images/boomhauser.jpeg',
            alreadyClicked: false
        },
        {
            name: 'Cotton Hill',
            image: './images/cotton-hill.jpg',
            alreadyClicked: false
        },
        {
            name: 'Dale Gribble',
            image: './images/dale-gribble.jpg',
            alreadyClicked: false
        },
        {
            name: 'Hank Hill',
            image: './images/hank-hill.jpeg',
            alreadyClicked: false
        },
        {
            name: 'John Redcorn',
            image: './images/john-redcorn.jpg',
            alreadyClicked: false
        },
        {
            name: 'Kahn Souphanousinphone',
            image: './images/kahn-souphanousinphone.jpg',
            alreadyClicked: false
        },
        {
            name: 'Luanne Platter',
            image: './images/luanne-platter.jpg',
            alreadyClicked: false
        },
        {
            name: 'Minh Souphanousinphone',
            image: './images/Minh_Souphanousinphone.jpg',
            alreadyClicked: false
        },
        {
            name: 'Nancy Gribble',
            image: './images/nancy-gribble.jpg',
            alreadyClicked: false
        },
        {
            name: 'Peggy Hill',
            image: './images/peggy-hill.jpg',
            alreadyClicked: false
        },
  ]

  //using state to keep track of cards
  const [cards, setCards] = useState(kingsOfTheHill)

  //function for shuffling array using Durstenfeld shuffling algorithm
    function durstenfeldShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }
  
  //function to shuffle cards when one has been clicked
  function startShuffle(){
    setCards(durstenfeldShuffle(cards))
  }
  
  return (
    <div className="App">
      <Header />
      <MainDisplay cards={cards} startShuffle={startShuffle}/>
    </div>
  );
}

export default App;
