import Navbar from "../commons/navbar";
import Support from "../commons/support";
import Contact from "./contact";
import FAQ from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import { PiDiamondsFourFill } from "react-icons/pi"
import "../../App.css"
export default function Homepage() {
    function ChooseUs() {
        const dataPack = [
            {
                metrics: '98%',
                header: 'On-time delivery rate',
                desc: 'Efficient distribution across regions, supporting supply chains with reliablity and precision'
            },
            {
                metrics: '10',
                header: 'countries Reached',
                desc: 'Our Agricultural solution is trusted by partners and farmers in more than 10 countries'
            }, {
                metrics: '500k+',
                header: 'Acres Cultivated sustainability',
                desc: 'We promote responsible and land use with eco friendly practices with over 500k land cultivated'
            },
        ]
        return (
            <main className="py-[30px] px-3 sm:px-[40px] flex flex-col gap-4 bg-gray-100">
                <section className="growthCard border-[1px] border-gray-300 bg-amber-50 rounded">
                    <main>
                        <article>
                            <p> <PiDiamondsFourFill /> Driven</p>
                            <p><PiDiamondsFourFill /> Rooted</p>
                            <p><PiDiamondsFourFill /> Impactful</p>
                        </article>
                        <h5>Let's Grow something great together.</h5>
                        <p className='text-start font-[0.65rem] italic max-w-[400px] w-[80%] py-3'>
                            whether you're a farmer, distributor, investor or partner,
                            we are here to support your goals with sustainable solutions and global expertise
                        </p>
                        <button>Let's work together</button>
                    </main>
                    <div className='w-[90%] max-w-[450px] h-[250px] sm:h-[300px] rounded-md overflow-hidden mb-[20px] '>
                        <img src="/hero.jpg" alt="" className="object-cover object-contain w-full h-full"/>
                    </div>
                </section>
                <section className='mt-[30px]'>
                    <main className="flex flex-wrap justify-center items-center gap-[20px]">
                        { 
                            dataPack.map((data, index) => (
                                <div key={index} style={{border:'1px solid rgb(205, 199, 199)'}} className={"p-4 w-[80%] max-w-[350px] rounded shadow-md bg-gray-200 " }>
                                    <h3>{data.metrics}</h3>
                                    <h6 style={{fontWeight:'bold', fontSize:'1rem'}}>{data.header}</h6>
                                    <p>{ data.desc}</p>
                                </div>
                            ))
                        }
                    </main>
                </section>
            </main>
        )
    }
    return (
        <>
            <Navbar />
            <Hero />
            <Support />
            <ChooseUs />
            <article className="flex flex-col md:flex-row w-full justify-center items-center py-[30px] md:pr-[5%] gap-2">
                <FAQ />
                <Contact />
            </article>
            <Footer />
        </>
    )
}