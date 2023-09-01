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
            className="h-80 w-60 bg-orange-200 rounded-xl text-center text-xl cursor-pointer hover:scale-110 hover:shadow-amber-500 transition duration-300 shadow-xl" 
            id={id}
            onClick={() => startShuffle(id)}
        >
            <img 
                src={image} 
                alt="character from king of the hill"
                className="h-[90%] w-full rounded-t-xl" 
            />
            <span>{name}</span>
        </div>
    )
}

export default Card