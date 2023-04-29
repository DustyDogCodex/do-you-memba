//this is the component for the individual cards that will be displayed for the user to click
function Card({ id, name, image, alreadyClicked, startShuffle }){

    return(
        <div className="card" onClick={(e) => startShuffle(e.target.id)}>
            <img id={id} src={image} alt="character from king of the hill" />
            <span id={id}>{name}</span>
        </div>
    )
}

export default Card