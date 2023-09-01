//this component will serve as the main display board for the project. It will display 12 cards for the player to click on the left and a scoreboard on the right
import { KingProps } from "../App"
import Card from "./Card"

type Props = {
    cards: KingProps[],
    score: number,
    highScore: number,
    startShuffle: (id: string) => void
}

function MainDisplay({ cards, score, highScore, startShuffle }: Props) {

    //array containging card elements with character images and names
    const kingsElements = cards.map((king: KingProps, index: number) => 
        <Card 
            key={index}
            id={king.id}
            name={king.name} 
            image={king.image}  
            startShuffle={startShuffle}
        />
    )

    return(
        <div className="main">
            <div className="card-display">
                {kingsElements}
            </div>
            <div className="score-display">
                <span style={{marginBottom: '20px'}}>Current Score</span>
                {score}
                <span style={{margin: '20px 0px'}}>High Score</span>
                {highScore}
            </div>
        </div>
    )
}

export default MainDisplay