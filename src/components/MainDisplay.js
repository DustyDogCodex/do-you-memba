//this component will serve as the main display board for the project. It will display 10 cards for the player to click on the left and a scoreboard on the right
function MainDisplay(){
    return(
        <div className="main">
            <div className="card-display">

            </div>
            <div className="score-display">
                <span>Current Score:</span>
            </div>
        </div>
    )
}

export default MainDisplay