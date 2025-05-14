import { FaCalculator, FaLifeRing, FaCloud, FaLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SupportCard from './businessSupport';
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

    return (
        <main className="flex flex-col justify-center items-center bg-gray-200 py-[30px]">
            <h4>What We offer you</h4>
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
    );
}
