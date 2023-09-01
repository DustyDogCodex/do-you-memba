//this is the component for the individual cards that will be displayed for the user to click
type Props = {
    id: string,
    name: string,
    image: string,
    startShuffle: (id: string) => void
}

function Card({ id, name, image, startShuffle }: Props){
    return(
        <div 
            className="card" 
            id={id}
            onClick={() => startShuffle(id)}
        >
            <img 
                src={image} 
                alt="character from king of the hill" 
            />
            <span>{name}</span>
        </div>
    )
}

export default Card