//this component will serve as the main display board for the project. It will display 10 cards for the player to click on the left and a scoreboard on the right
import Card from "./Card"

function MainDisplay({ cards, score, highScore, startShuffle }){

    //array containging card elements with character images and names
    const kingsElements = cards.map((king,index) => {
        return (
            <Card 
                key={index}
                id={king.id}
                score={score}
                name={king.name} 
                image={king.image} 
                alreadyClicked={king.alreadyClicked} 
                startShuffle={startShuffle}
            />
        )
    })

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