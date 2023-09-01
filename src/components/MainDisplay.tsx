//this component will serve as the main display board for the project. It will display 12 cards for the player to click on the left and a scoreboard on the right
import { useEffect, useRef, useState } from "react"
import { KingProps } from "../App"
import Card from "./Card"
import { motion } from "framer-motion"
import useMediaQuery from '../hooks/useMediaQuery'

type Props = {
    cards: KingProps[],
    startShuffle: (id: string) => void
}

function MainDisplay({ cards, startShuffle }: Props) {
    const [ width, setWidth ] = useState<number>(0)
    const slider = useRef<HTMLDivElement>(null)

    //determining width of slider to set dragConstraint for slider div
    useEffect(() => {
        if(slider.current){
            setWidth(slider.current?.scrollWidth -  slider.current?.offsetWidth)
        }
    }, [])

    //checking for small/mobile screens
    const aboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    console.log(aboveMediumScreens)
    return(
        <div
            className="flex flex-col md:flex-row items-center justify-between"
        >
            {aboveMediumScreens && (
                /* grid display of all available cards for medium screens and above */
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
            )}
                
            {!aboveMediumScreens && (
                /* simple slider for displaying cards on small/mobile screens */
                <>
                <motion.div
                    ref={slider}
                    whileTap={{ cursor: 'grabbing' }}
                    className="cursor-grab overflow-hidden w-screen"
                >
                    <motion.div
                        drag='x'
                        dragConstraints={{ right:0, left: -width }}
                        className="flex gap-10"
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
                </motion.div>
                <span className="text-light-gold mt-3 text-xl">Drag to view all cards</span>
                </>
            )}
        </div>
    )
}

export default MainDisplay