//this component will serve as the main display board for the project. It will display 10 cards for the player to click on the left and a scoreboard on the right
import Card from "./Card"

function MainDisplay(){

    //object containing character names and images
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

    //array containging card elements with character images and names
    const kingsElements = kingsOfTheHill.map(king => {
        return (
            <Card name={king.name} image={king.image} alreadyClicked={alreadyClicked}/>
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