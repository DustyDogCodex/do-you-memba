//header for the website
import { motion } from "framer-motion"

type Props = {
    score: number,
    highScore: number,
}

function Header({ score, highScore }: Props) {
    return (
        <motion.div
            className="text-light-gold text-center p-3 mt-10 mb-2 flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0}
            }}
        >
            <a 
                href="https://www.youtube.com/watch?v=Ncps_RYHoAI" 
                target="_blank" 
                rel="noreferrer"
            >
                <h1 className=" text-3xl md:text-5xl">Do You Memba?</h1>
            </a>
            
            <p className="text-lg md:text-2xl">
                Are you ready to test your memory ?? The rules are simple: click on 12 cards without clicking on the same card twice! You will need to remember which cards you have clicked because the cards will reshuffle after every click!
            </p>

            <div
                className="text-xl md:text-3xl flex items-center mt-3 mb-3"
            >
                <span className="mr-10">Current Score {score}</span>
                <span>High Score {highScore}</span>
            </div>
        </motion.div>
    )
}

export default Header