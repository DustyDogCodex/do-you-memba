//this component will serve as the main display board for the project. It will display 12 cards for the player to click on the left and a scoreboard on the right
import { KingProps } from "../App"
import Card from "./Card"
import { motion } from "framer-motion"

type Props = {
    cards: KingProps[],
    startShuffle: (id: string) => void
}

function MainDisplay({ cards, startShuffle }: Props) {
    return(
        <div
            className="flex flex-col items-center justify-between"
        >
            {/* grid display of all available cards */}
            <motion.div
                className="grid grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 1, scale: 0 }, 
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delayChildren: 0.3, staggerChildren: 0.2 }
                    }
                }}
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
            </motion.div>
        </div>
    )
}

export default MainDisplay