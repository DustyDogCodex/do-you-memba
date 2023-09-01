//this component will serve as the main display board for the project. It will display 12 cards for the player to click on the left and a scoreboard on the right
import { KingProps } from "../App"
import Card from "./Card"
import { motion } from "framer-motion"

type Props = {
    cards: KingProps[],
    score: number,
    highScore: number,
    startShuffle: (id: string) => void
}

function MainDisplay({ cards, score, highScore, startShuffle }: Props) {
    const container = {
                hidden: { opacity: 1, scale: 0 }, 
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delayChildren: 0.3, staggerChildren: 0.2 }
                }
            }

    const cardElements = cards.map((king: KingProps, index: number) => 
                    <Card 
                        key={index}
                        id={king.id}
                        name={king.name} 
                        image={king.image}  
                        startShuffle={startShuffle}
                    />
                )
    return(
        <div
            className="flex flex-col items-center justify-between"
        >
            {/* current score and high score */}
            <div 
                className="text-light-gold text-2xl flex items-center mb-5"
            >
                <span className="mr-10">Current Score {score}</span>
                <span>High Score {highScore}</span>
            </div>

            {/* grid display of all available cards */}
            <motion.div
                className="grid grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {cardElements}
            </motion.div>
        </div>
    )
}

export default MainDisplay