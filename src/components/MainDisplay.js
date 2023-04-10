//this component will serve as the main display board for the project. It will display 10 cards for the player to click on the left and a scoreboard on the right
import Card from "./Card"

function MainDisplay({ cards, startShuffle }){

    //array containging card elements with character images and names
    const kingsElements = cards.map((king,index) => {
        return (
            <Card 
                key={index}
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
                <span>Current Score:</span>
            </div>
        </div>
    )
}

export default MainDisplay