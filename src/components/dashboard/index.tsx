import { useState } from "react";
import Navbar from "../commons/navbar";
import { MdInfoOutline, MdOutlineDashboard } from "react-icons/md";
import { useAuth } from "../../hooks/authContext";
import { PiPlantFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoIosWarning } from 'react-icons/io'
import "../../App.css"
import type { Clusters, Logistics } from "../../types";

export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const EmptyCard = () => {
        return (
            <article className='assessments bg-white border-[1px] rounded  border-gray-100 '>
                <p>No Data is Available Yet</p>
            </article>
        )
    }
    const LeftPanel = () => {
        const menus = [
            {
                text: 'Dashboard',
                icon: <MdOutlineDashboard />
            }, {
                text: 'My Crops',
                icon: <MdOutlineDashboard />
            }, {
                text: 'Clusters',
                icon: <MdOutlineDashboard />
            }, {
                text: 'Logistics',
                icon: <MdOutlineDashboard />
            }, {
                text: 'Analytics',
                icon: <MdOutlineDashboard />
            }, {
                text: 'Settings',
                icon: <MdOutlineDashboard />
            }, {
                text: 'Logout',
                icon: <MdOutlineDashboard />
            },
        ]
        const lastItem = menus.slice(-1);
        return (
            <aside className='lg:flex flex-col h-full hidden bg-green-900 p-3 w-[150px] justify-between flex-shrink-0'>
                <div className='flex flex-col gap-3'>
                    {menus.slice(0, -1).map((data, index) => (
                        <article
                            key={index}
                            onClick={() => { setCurrentIndex(index) }}
                            className={`${index === currentIndex ? 'bg-green-700 rounded-md font-bold' : ''} 
                            items-center py-1 px-1 cursor-pointer text-white flex gap-2 w-full`}>
                            {data.icon}
                            <p>{data.text}</p>
                        </article>
                    ))}
                </div>
                {lastItem.map((data, index) => (
                    <article
                        key={index}
                        onClick={() => { setCurrentIndex(menus.length - 1) }}
                        className={`${menus.length - 1 === currentIndex ? 'bg-green-700 rounded-md font-bold' : ''} 
                        items-center py-1 px-1 cursor-pointer text-white flex gap-2 w-full`}>
                        {data.icon}
                        <p>{data.text}</p>
                    </article>
                ))}
            </aside>
        )
    }
    const { user } = useAuth()

    const DashboardNavbar = () => {
        return (
            <nav className='py-[15px] flex flex-col text-start'>
                <h5 style={{ fontWeight: 'bolder' }} className='text-green-900 name'>Welcome {user?.name}</h5>
                <p>Manage Your Crops, logistics, preservations and recommendations</p>
            </nav>
        )
    }

    const DashboardHero = () => {
        const userData = [
            { text: 'Active Crops', metrics: 12, additionals: ' this month', icon: <PiPlantFill size={18} color="green" /> },
            { text: 'Pending Harvests ', metrics: 4, additionals: 'Next', icon: <MdInfoOutline size={18} color="blue" /> },
            { text: 'Logistic Matches', metrics: 12, additionals: ' awaiting Confirmations', icon: <FaTruck size={18} color="brown" /> },
            { text: 'Risk Alerts', metrics: 1, additionals: 'Weather related', icon: <IoIosWarning size={18} color="red" /> },
        ]
        return (
            <main className='flex flex-wrap justtify-start items-center gap-3 sm:gap-4 w-full'>
                {
                    userData.map((data,) => (
                        <div
                            className='flex flex-col gap-1 bg-white p-1 sm:p-2 w-full sm:w-[250px] h-[100px] p-2 md:p-3 border-[1px] border-gray-200 hover:shadow-sm hover:scale-[1.02] transform transition duration-300 rounded'>
                            <nav className='flex justify-between items-center'>
                                <p className='capitalize font-semibold max-w-[90%] sm:text-[0.8rem] line-clamp-1 text-start'>{data.text}</p>
                                <article className='p-2 rounded bg-gray-100 '>
                                    {data.icon}
                                </article>
                            </nav>
                            <article className="flex flex-col gap-1 items-start">
                                <h5 style={{ fontSize: '1rem' }}>{data.metrics}</h5>
                                <p className='flex' style={{ fontSize: '0.65rem' }}>{data.additionals}</p>
                            </article>
                        </div>
                    ))
                }
            </main>
        )
    }

    const Overview = () => {
        const clusters: Clusters[] = [
            { name: 'norther Rice Farmers', crop: 'rice', farmers: 10, totalHarvest: '120 Tons', date: 'May 25 - June 10', readiness: 30, status: 'UPCOMING' },
            { name: 'norther Rice Farmers', crop: 'rice', farmers: 10, totalHarvest: '120 Tons', date: 'May 25 - June 10', readiness: 30, status: 'UPCOMING' },
            { name: 'norther Rice Farmers', crop: 'rice', farmers: 10, totalHarvest: '120 Tons', date: 'May 25 - June 10', readiness: 30, status: 'UPCOMING' },
            { name: 'norther Rice Farmers', crop: 'rice', farmers: 10, totalHarvest: '120 Tons', date: 'May 25 - June 10', readiness: 30, status: 'UPCOMING' },
        ]

        const logistics: Logistics[] = [
            { name: 'FastTrack Logistics', type: 'transport', distance: '15km', capacity: '30 Tons', price: 1200, availability: 'Available now', rating: '4.5' },
            { name: 'FastTrack Logistics', type: 'transport', distance: '15km', capacity: '30 Tons', price: 1200, availability: 'May 23rd', rating: '4.5' },
            { name: 'FastTrack Logistics', type: 'transport', distance: '15km', capacity: '30 Tons', price: 1200, availability: 'June 1st', rating: '4.5' },
        ]

        const [index, setIndex] = useState<number>(0);

        function OverviewBody({ styles }: { styles: string }) {
            return (
                <div className='flex flex-col md:flex-row md:flex-wrap py-[20px] gap-4 px-3'>
                    <section className={`${styles} text-start p-1 overviewBody lg:max-w-[400px] max-w-[300px]`}>
                        <h6>Harvest clusters</h6>
                        <p>Group of farmers with similar crops and harvest timelines</p>
                        <main className='flex flex-col gap-2 pt-[10px] '>
                            {
                                clusters.map((data, index) => (
                                    <article key={index} className='clustersSection p-3 '>
                                        <nav>
                                            <h5>{data.name}</h5>
                                            <p>{data.status}</p>
                                        </nav>
                                        <main >
                                            <section>
                                                <h6>Crop</h6>
                                                <p>{data.crop}</p>
                                            </section>
                                            <section>
                                                <h6>Farmers</h6>
                                                <p>{data.farmers}</p>
                                            </section>
                                            <section>
                                                <h6>Total Harvest</h6>
                                                <p>{data.totalHarvest}</p>
                                            </section>
                                            <section>
                                                <h6>Harvest Period</h6>
                                                <p>{data.crop}</p>
                                            </section>
                                        </main>
                                        <input type="range" min="0" max="100" value={30} className='w-full outline-0 border-0 pt-1' />
                                    </article>
                                ))
                            }
                        </main>
                    </section>
                    <section className={`${styles} overviewBody text-start px-2 py-2 bg-amber-50 border-[1px] border-gray-100 rounded max-w-[330px] `}>
                        <h6>Logistics Recommendations</h6>
                        <p>Smart matched transport and storage options for your harvest</p>
                        <main className='flex flex-col gap-2 pt-[10px] '>
                            {
                                logistics.map((data, index) => (
                                    <article key={index} className='clustersSection p-3 bg-white'>
                                        <nav>
                                            <h5>{data.name}</h5>
                                            <p>{data.type}</p>
                                        </nav>
                                        <main className="ratings">
                                            <section>
                                                <h3>Ratings</h3>
                                                <a>{data.rating}</a>
                                            </section>
                                            <section>
                                                <h3>Distance</h3>
                                                <a>{data.distance}</a>
                                            </section>
                                        </main>
                                        <main >
                                            <section>
                                                <h6>Capacity</h6>
                                                <p>{data.capacity}</p>
                                            </section>
                                            <section>
                                                <h6>Price</h6>
                                                <p>{data.price}</p>
                                            </section>
                                            <section>
                                                <h6>Availability</h6>
                                                <p>{data.availability}</p>
                                            </section>
                                        </main>
                                        <footer className='buttonsPack'>
                                            <button>Accept</button>
                                            <button>Reject</button>
                                        </footer>
                                    </article>
                                ))
                            }
                        </main>
                    </section>
                    <div className='flex flex-col md:flex-row lg:flex-col gap-4'>
                        <section className={`${styles} text-start p-1 overviewBody max-w-[400px] h-[200px] border-[1px] rounded bg-gray-50 border-gray-100 p-4`}>
                            <h6>Risk Assessment</h6>
                            <p>AI-powered risk evaluation for your farming operations</p>
                            <EmptyCard />
                        </section>
                        <section className={`${styles} text-start p-1 overviewBody max-w-[400px] h-[200px] border-[1px] rounded bg-gray-50 border-gray-100 p-4`}>
                            <h6>Freshbox Recommendations</h6>
                            <p>Smart preservation techniques for your crops</p>
                            <EmptyCard />
                        </section>
                    </div>

                </div>

            )
        }
        function RegisterCrops({ styles }: { styles: string }) {
            return (
                <section className={`${styles}`}>

                </section>
            )
        }
        return (
            <main className="overviewPanel">
                <header>
                    <p onClick={function () { setIndex(0) }} className={`${index === 0 ? 'bg-gray-200 rounded shadow-sm font-bold ' : ''}`}>Overview</p>
                    <p onClick={function () { setIndex(1) }} className={`${index === 1 ? 'bg-gray-200 rounded shadow-sm font-bold' : ''}`}>Register Crops</p>
                </header>
                <main className="overflow-y-auto">
                    <OverviewBody styles={index === 0 ? '' : 'hidden'} />
                    <RegisterCrops styles={index === 1 ? '' : 'hidden'} />
                </main>

            </main>
        )
    }
    const RightPanel = () => {
        return (
            <main className='px-[20px] flex flex-col gap-2 w-full flex-1 overflow-y-auto bg-gray-100 pb-[10px]'>
                <DashboardNavbar />
                <DashboardHero />
                <Overview />
            </main>
        )
    }

    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <main className='flex lg:flex-grow overflow-hidden border-t-[1px] border-gray-200'>
                <LeftPanel />
                <RightPanel />
            </main>
        </div>
    )
}
