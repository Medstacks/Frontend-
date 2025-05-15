import { useState } from "react";
import Navbar from "../commons/navbar";
import { MdOutlineDashboard } from "react-icons/md";

export default function Dashboard() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const RightPanel = () => { 
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
    const LeftPanel = () => { 
        return (
            <>
                
            </>
        )
    }

  return (
      <div className='flex flex-col h-screen'>
          <Navbar />
          <main className='flex flex-1'>
              <RightPanel />
              <LeftPanel />
          </main>
      </div>
  )
}
