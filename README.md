<h1 align='center'>🧠🎴👑 Do You Memba? 👑🎴🧠</h1>

<p align='center'>
    Do you memba is a King of the Hill themed twist on the classic card guessing game where players try to pick 12 cards without repeating the same card twice. The player has to click through all 12 cards without selecting the same card twice. Clicking on a previously selected card will reset the game. This game is built using TypeScript, React,Tailwind CSS, and Framer-Motion, making it a fun and interactive way to play the game online.
</p>

<p align='center'>
    <img height="32" width="32" src="https://cdn.simpleicons.org/typescript"/>
    <img height="32" width="32" src="https://cdn.simpleicons.org/react"/>
    <img height="32" width="32" src="https://cdn.simpleicons.org/tailwindcss"/>
    <img height="32" width="32" src="https://cdn.simpleicons.org/framer"/>
</p>

<p align='center'>
    <a href='https://dustydogcodex.github.io/do-you-memba/' target='_blank'>LIVE DEMO</a>
</p>

<div align='center'>
    <img 
        src="https://media3.giphy.com/media/1F1p6zXsYyt8I/giphy.gif?cid=ecf05e47ban2p1kjhsft1yliigxqitphvcue796c7nv7iq42&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        height='250px'    
    >
</div>

## Table of Contents

- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Customization](#customization)
- [Acknowledgments](#acknowledgments)

## Features
- Intuitive user interface with React components.
- Modern design with smooth animations.
- Stylish and responsive design using Tailwind CSS.
- Sleek slider for viewing cards on mobile screens.

## Future enhancements:

- Adding multiple card decks for the user to select from. Ex:if the user chooses the pokemon deck, the cards will display 12 pokemons.
- Adding a backend to create a global leaderboard.
- After creating multiple decks, allowing the user to continue the game by switching decks and combining the scores to get a new high score thats more than 12. 
Example: By playing 3 different decks, the max possible score for a player is 36. The leaderboard will show the highscore + number of decks correctly won!

## Installation
Make sure you have Node.js and npm installed on your system.

1. Clone this repository: `git clone https://github.com/DustyDogCodex/do-you-memba.git`
2. Navigate to the project directory: `cd do-you-memba`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

Since this project was made with Vite, you can find your dev server on `http://localhost:5173/`

## How to Play
1. Open the game in your web browser.
2. Click on any card to start the game.
3. Try and click 12 cards without clicking the same one twice or the game restarts
4. If you reach a score of 12, you'll see a victory message.
5. Start a new game by refreshing your window or by clicking restart button after you win.

## Customization
You can customize this game by modifying the KingsOfTheHill array in App.tsx, allowing you to change the theme of the game by adding newer images. You can also change the design using Tailwind CSS. Check the source code and configuration files for more details on how to do this.

## Acknowledgments
- This Hangman game was created with ❤️ by Varun Malaviya.
- Special thanks to the creators of TypeScript, React, Framer-Motion and Tailwind CSS for their amazing tools.

