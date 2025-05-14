import { motion } from "framer-motion";
import "../../App.css"
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <div>
            <section className=" h-[450px] sm:h-[500px] overflow-hidden ">
                <div
                    className="hero  inset-0 bg-cover bg-center bg-no-repeat h-full"
                    style={{
                        backgroundImage: "url(https://i.pinimg.com/736x/ac/1f/65/ac1f657fd8bb7ee744e678485745de63.jpg)",
                    }}
                    >
                    <motion.article
                        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        <motion.h1 style={{ fontFamily:'Admiral, San-serif'}}
                            className="text-white font-bold tracking-tight w-[90%] md:w-[60%] text-center"
                            variants={fadeIn}
                        >
                            Using Technology in Revolutionizing Agriculture
                        </motion.h1>
                        <motion.p style={{ fontSize: '1rem' }}
                            className="text-white max-w-[600px] mt-4 w-[80%] italic"
                            variants={fadeIn}
                        >
                            Helping smallholder farmers cut post-harvest losses through smart
                            planning, shared logistics, and local preservation tips — powered
                            by real-time farm data.
                        </motion.p>
                    </motion.article>
                </div>
            </section>
        </div>
    );
}