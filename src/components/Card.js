//this is the component for the individual cards that will be displayed for the user to click
function Card({ name, image }){
    return(
        <div className="card">
            <img src={image} alt="character from king of the hill" />
            <span>{name}</span>
        </div>
    )
}

export default Card