import { motion } from "framer-motion";
import FAQ from "./faq";
import Support from "../commons/support";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <div>
            <section className="relative h-[200px] sm:h-[250px] overflow-hidden ">
                <div
                    className="absolute w-full ovweflow-hidden inset-0 bg-cover bg-center bg-no-repeat brightness-75 blur-[1.5px]"
                    style={{
                        backgroundImage: "url(/hero.jpg)",
                        fontFamily: "DM Sans, sans-serif",
                    }}
                />
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
                    <motion.h1
                        className="text-white text-2xl font-bold tracking-tight"
                        variants={fadeIn}
                    >
                        Agrolink
                    </motion.h1>
                    <motion.p style={{fontSize:'0.75rem'}}
                        className="text-white max-w-md mt-4 leading-relaxed"
                        variants={fadeIn}
                    >
                        Helping smallholder farmers cut post-harvest losses through smart
                        planning, shared logistics, and local preservation tips — powered
                        by real-time farm data.
                    </motion.p>
                </motion.article>
            </section>
            Contact
            <Support />
            <FAQ/>
        </div>
    );
}