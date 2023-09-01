import { motion } from "framer-motion"
import winning from '../assets/winning.gif'

type Props = {
    newGame: () => void
}

function WinMessage({ newGame }: Props) {
    return (
        <div
            className="absolute top-0 right-0 h-screen w-screen flex items-center justify-center bg-slate-600/70"
        >
            <motion.div
                className="z-10 bg-blue-600 font-bold p-10 flex flex-col items-center rounded-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <span className="text-amber-300 text-2xl mb-2">Congrats you won!</span>
                <img 
                    src={winning} 
                    alt="winning like a boss" 
                    className="rounded-xl"
                />
                <button
                    className="mt-5 py-1 px-4 rounded-full text-2xl text-white bg-green-400 w-fit"
                    onClick={newGame}
                >
                    New game
                </button>
            </motion.div>
        </div>
    )
}
export default WinMessage