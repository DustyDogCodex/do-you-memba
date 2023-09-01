import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainDisplay from './components/MainDisplay'
import { v4 as uuidv4 } from 'uuid'
import Confetti from 'react-confetti'

export type KingProps = { 
    id: string, 
    name: string, 
    image: string, 
    alreadyClicked: boolean 
}

function App() {
    //array containing character info as objects
    const kingsOfTheHill: KingProps[] = [
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
    const [ cards, setCards ] = useState<KingProps[]>(kingsOfTheHill)
    const [ score, setScore ] = useState<number>(0)
    const [ highScore, setHighScore ] = useState<number>(0)

    //function to shuffle cards when one has been clicked
    //this is a version of Schwartzian transform in JS.
    function startShuffle(id: string){
        //shuffle cards
        let shuffled = cards.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        //checking to see if the card has already been clicked before
        const selected_card = cards.filter(card => card.id === id)

        //selected_card[0] since filter returns an array with the card object inside it.
        if(selected_card[0].alreadyClicked){
            //if current score is more than highscore, change highscore
            if(score > highScore){
                setHighScore(score)
            }

            //if card was alreadyClicked, reset the score to zero and all alreadyClicked values to false
            setScore(0)
            setCards(shuffled.map(card => ({ ...card, alreadyClicked: false })))
        } else {
            //if card wasn't already clicked, increment score
            setScore(score + 1)

            //the game continues after flipping this card's alreadyClicked value.
            setCards(shuffled.map(card => card.id === id ? {...card, alreadyClicked: !card.alreadyClicked } : card))
        }
    }

    return (
        <div
            className='h-screen flex flex-col items-center justify-center bg-gradient-radial from-violet-900 via-gray-900 to-black'
        >
            <Header 
                score={score} 
                highScore={highScore} 
            />
            <MainDisplay 
                cards={cards} 
                startShuffle={startShuffle} 
            />
            {score === 12 && <Confetti />}
        </div>
    )
}

export default App
