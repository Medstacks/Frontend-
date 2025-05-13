import Navbar from "../commons/navbar";
import Hero from "./hero";

export default function Homepage() { 
    return (
        <main className='flex w-full flex-col'>
            <Navbar />
            <Hero/>
        </main>
    )
}