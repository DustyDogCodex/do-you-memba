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
    return(
        <div
            className="flex flex-col items-center justify-between"
        >
            {/* current score and high score */}
            <div 
                className="text-light-gold text-2xl flex items-center mb-5"
            >
                <span className="mr-10">Current Score {score}</span>
                <span>High Score {highScore}</span>
            </div>

            {/* grid display of all available cards */}
            <div 
                className="grid grid-cols-4 gap-8"
            >
                {cards.map((king: KingProps, index: number) => 
                    <Card 
                        key={index}
                        id={king.id}
                        name={king.name} 
                        image={king.image}  
                        startShuffle={startShuffle}
                    />
                )}
            </div>
        </div>
    )
}

export default MainDisplay