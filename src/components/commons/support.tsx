import { FaCalculator, FaLifeRing, FaCloud, FaLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SupportCard from './businessSupport';
import { motion } from "framer-motion";
import type { SupportCardProps } from '../../types';
export default function Support() {
    const [startIndex, setStartIndex] = useState<number>(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const cardDetails: SupportCardProps[] = [
        {
            icon: <FaCalculator />,
            title: "Agricultural Services",
            text: "we've got your Agricultutal needs covered."
        },
        {
            icon: <FaLifeRing />,
            title: "Customer Support",
            text: "We're here 24/7 to help with technical or billing issues."
        },
        {
            icon: <FaCloud />,
            title: "Logistics Solutions",
            text: "Reliable, scalable cloud Logistics tailored to your business."
        },
        {
            icon: <FaLock />,
            title: "Data Security",
            text: "We ensure your data is safe with enterprise-grade security practices."
        },
    ]
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    useEffect(() => {
        const updateVisibleItems = () => {
            const width = window.innerWidth;
            if (width < 640) setVisibleItems(1);
            else if (width < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prev => (prev + 1) % cardDetails.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [cardDetails.length]);

    const visibleCards = Array.from({ length: visibleItems }, (_, i) =>
        cardDetails[(startIndex + i) % cardDetails.length]
    );
    const points = ['sustaiable', 'Innovative', 'global', 'Relaible', 'Effiient', 'Impactful', 'Adaptive', 'Collaborative', 'Visionary']
    return (
        <motion.div className='p-2 bg-gray-200 py-[30px]' variants={fadeIn}>
            <motion.aside className='flex gap-[10px] items-start flex-col text-start pl-[20px] pt-[20px] sm:pl-[40px] md:pt-[40px]'  variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}>
                <motion.p variants={fadeIn}
                    style={{
                        border: '1px solid #a4a4a4',
                        backgroundColor: '#ffffff',
                        padding: '5px 10px',
                        borderRadius: '10px',
                        fontFamily: 'Admiral',
                        fontSize: '1rem'
                    }}
                    className="shadow-md w-[100px] font-bold text-center" >About Us</motion.p>
                <main className=''>
                    <motion.h4
                        variants={fadeIn}
                        style={{ fontFamily: 'Admiral' }}
                        className='pb-[20px]' >
                        We are commited to Advancing Agriculture
                    </motion.h4>
                    <motion.div variants={fadeIn} className=' flex flex-wrap gap-[10px]'>
                        {
                            points.map((data, index) => (
                                <p key={index} style={{ fontFamily: 'Admiral',fontSize:'0.9rem' }}
                                    className='p-[7px] capitalize rounded  italic text-center bg-gray-300 cursor-none font-semibold border-[1px] text-gray-700'>{data}</p>
                            ))
                        }
                    </motion.div>
                    <motion.p variants={fadeIn} className='text-gray-600 w-[70%] sm:w-[550px] py-[20px]' style={{ fontSize: '1rem' }}>
                        our mission is to define what is possible in modern farming - creating
                        lasting value for comminities, ecosystems and future genartions. Rooted in Tradition, driven by Innovation - we grow more than crops,
                        we grow impact.
                    </motion.p>
                </main>
            </motion.aside>
            <main className="flex flex-col justify-center items-center ">
                <h4 style={{ fontFamily: 'Admiral' }} >What we offer</h4>
                <div className="overflow-hidden px-[20px] py-[20px] sm:w-[90%]">
                    <div className="flex gap-4 transition transform duration-500 ease-in-out">
                        {visibleCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 "
                                style={{ width: `calc((100% - ${(visibleItems - 1) * 1}rem) / ${visibleItems})` }}
                            >
                                <SupportCard
                                    icon={card.icon}
                                    title={card.title}
                                    text={card.text}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
