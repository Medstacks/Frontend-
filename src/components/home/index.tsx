import Navbar from "../commons/navbar";
import Support from "../commons/support";
import Contact from "./contact";
import FAQ from "./faq";
import Footer from "./footer";
import Hero from "./hero";

export default function Homepage() { 
    return (
        <>
            <Navbar />
            <Hero />
            <Support />
            <article className="flex flex-col md:flex-row w-full justify-center items-center py-[30px] md:pr-[5%]">
                <FAQ />
                <Contact />
            </article>
            <Footer/>
        </>
    )
}