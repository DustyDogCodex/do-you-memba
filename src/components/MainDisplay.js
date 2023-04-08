//this component will serve as the main display board for the project. It will display 10 cards for the player to click on the left and a scoreboard on the right
import Card from "./Card"

function MainDisplay(){

    //object containing character names and images
    const kingsOfTheHill = [
        {
            name: 'Bill Dauterive',
            image: './images/bill-dauterive.jpeg'
        },
        {
            name: 'Bobby Hill',
            image: './images/bobby-hill.jpg'
        },
        {
            name: 'Boomhauser',
            image: './images/boomhauser.jpeg'
        },
        {
            name: 'Cotton Hill',
            image: './images/cotton-hill.jpg'
        },
        {
            name: 'Dale Gribble',
            image: './images/dale-gribble.jpg'
        },
        {
            name: 'Hank Hill',
            image: './images/hank-hill.jpeg'
        },
        {
            name: 'John Redcorn',
            image: './images/john-redcorn.jpg'
        },
        {
            name: 'Kahn Souphanousinphone',
            image: './images/kahn-souphanousinphone.jpg'
        },
        {
            name: 'Luanne Platter',
            image: './images/luanne-platter.jpg'
        },
        {
            name: 'Minh Souphanousinphone',
            image: './images/Minh_Souphanousinphone.jpg'
        },
        {
            name: 'Nancy Gribble',
            image: './images/nancy-gribble.jpg'
        },
        {
            name: 'Peggy Hill',
            image: './images/peggy-hill.jpg'
        },
    ]

    //array containging card elements with character images and names
    const kingsElements = kingsOfTheHill.map(king => {
        return (
            <Card name={king.name} image={king.image}/>
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