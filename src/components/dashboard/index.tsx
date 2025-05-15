import { useState } from "react";
import Navbar from "../commons/navbar";
import { MdInfoOutline, MdOutlineDashboard } from "react-icons/md";
import { useAuth } from "../../hooks/authContext";
import { PiPlantFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoIosWarning } from 'react-icons/io'
import "../../App.css"
export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const LeftPanel = () => { 
        const menus = [
            {
                text: 'Dashboard',
                icon: <MdOutlineDashboard />
            },{
                text: 'My Crops',
                icon: <MdOutlineDashboard />
            },{
                text: 'Clusters',
                icon: <MdOutlineDashboard />
            },{
                text: 'Logistics',
                icon: <MdOutlineDashboard />
            },{
                text: 'Analytics',
                icon: <MdOutlineDashboard />
            },{
                text: 'Settings',
                icon: <MdOutlineDashboard />
            },{
                text: 'Logout',
                icon: <MdOutlineDashboard />
            },
        ]
        const lastItem = menus.slice(-1);
        return (
            <aside className='md:flex flex-col h-full hidden bg-green-900 p-3 w-[150px] justify-between'>
                <div className='flex flex-col gap-3'>
                    {menus.slice(0,-1).map((data, index) => (
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
                        onClick={() => { setCurrentIndex(menus.length-1) }}
                        className={`${menus.length-1 === currentIndex ? 'bg-green-700 rounded-md font-bold' : ''} 
                        items-center py-1 px-1 cursor-pointer text-white flex gap-2 w-full`}>
                        {data.icon}
                        <p>{data.text}</p>
                    </article>
                ))}
            </aside>
        )
    }
    const { user } = useAuth()

    const  DashboardNavbar=()=> { 
        return (
            <nav className='py-[15px] flex flex-col text-start'>
                <h5 style={{fontWeight:'bolder', fontSize:'1.5rem'}} className='text-green-900'>Welcome {user?.name}</h5>
                <p>Manage Your Crops, logistics, preservations and recommendations</p>
            </nav>
        )
    }
    const DashboardHero = () => { 
        const userData = [
            { text: 'Active Crops', metrics: 12, additionals: ' this month', icon: <PiPlantFill size={18} color="green"/>},
            {text:'Pending Harvests ', metrics: 4, additionals:'Next', icon: <MdInfoOutline size={18} color="blue"/>},
            {text:'Logistic Matches', metrics: 12, additionals:' awaiting Confirmations', icon: <FaTruck size={18} color="brown"/>},
            {text:'Risk Alerts', metrics: 1, additionals:'Weather related', icon: <IoIosWarning size={18} color="red"/>},
        ]
        return (
            <main className='flex flex-wrap justtify-start items-center gap-3 sm:gap-4 w-full'>
                { 
                    userData.map((data,) => (
                        <div
                            className='flex flex-col gap-2 bg-white p-1 sm:p-2 w-[250px] h-[100px] sm:h-[120px] p-2 md:p-3 border-[1px] border-gray-200 hover:shadow-sm hover:scale-[1.02] transform transition duration-300 rounded'>
                            <nav className='flex justify-between items-center'>
                                <p  className='capitalize font-semibold max-w-[90%] sm:text-[0.8rem] line-clamp-1 text-start'>{data.text}</p>
                                <article className='p-2 rounded bg-gray-100 '>
                                    {data.icon}
                                </article>
                            </nav>
                            <article className="flex flex-col gap-1 items-start">
                                <h5 style={{fontSize:'1rem'}}>{data.metrics}</h5>
                                <p className='hidden sm:flex' style={{fontSize:'0.65rem'}}>{data.additionals}</p>
                            </article>
                        </div>
                    ))
                }
            </main>
        )
    }
    const Overview = () => { 
        const [index setIndex] = useState<number>(0);
        const OverviewBody = () => { 
            return (
                <>
                </>
            )
        }
        const RegisterCrops = () => { 
            return (
                <>
                </>
            )
        }
        return (
            <main className="overviewPanel">
                <header>
                    <p className={`${index===0?'':''}`}>Overview</p>
                    <p>Register Crops</p>
                </header>
                <main>
                    <OverviewBody />
                    <RegisterCrops />
                </main>
            </main>
        )
    }
    const RightPanel = () => { 
        return (
            <main className='px-[20px] flex flex-col gap-2 w-full flex-1 overflow-y-auto bg-gray-100 pb-[20px]'>
                <DashboardNavbar />
                <DashboardHero />
                <Overview/>
            </main>
        )
    }

  return (
      <div className='flex flex-col h-screen'>
          <Navbar />
          <main className='flex md:flex-1 border-t-[1px] border-gray-200'>
              <LeftPanel />
              <RightPanel />
          </main>
      </div>
  )
}
