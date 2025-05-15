import "../../App.css";
import { useAuth } from "../../hooks/authContext";
import { useEffect, useState } from 'react';
import AuthModal from "../home/authModal";
import { IoNotificationsOutline } from 'react-icons/io5';
import type { User } from "../../types";
export default function Navbar() {
    const { isAuthenticated, logout, login, user } = useAuth();
    const [isShowingModal, showingModal] = useState<boolean>(false)
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            const userData: User = { name: email, role: 'farmer' };
            login(userData);
        }
    }, []);
    function handleAuth() {
        if (isAuthenticated) {
            logout();
            return;
        }
        showingModal(true)
    }
    return (
        <nav className={'flex justify-between items-center px-2 md:px-4 py-2 shadow-md'}>
            <article className="w-auto max-w-[150px] text-nowrap h-[30px] flex gap-1 justify-center items-center cursor-pointer">
                <img src="/favicons/favicon.svg" loading="lazy" alt="logo" className={'object-contain w-full h-full'} />
                <h6 style={{ fontWeight: '600', fontFamily: 'Admiral, san-serif' }}>Agrolink</h6>
            </article>
            {!isAuthenticated && (
                <button onClick={handleAuth} className="text-nowrap text-[#ffffff]">
                    Sign in
                </button>
            )}

            {isAuthenticated && (
                <section className='flex gap-2 items-center'>
                    <div className='p-2 bg-gray-200 rounded-[50%] cursor-pointer hover:bg-gray-300 transition transform duration-300'>
                        <IoNotificationsOutline size={15}/>
                    </div>
                    <p className="p-2 bg-gray-200 rounded-[50%] font-bold" style={{fontSize:'0.7rem'}}>{user?.name.substring(0,2)}</p>
                </section>
            )}
            {
                isShowingModal && <AuthModal onClose={() => { showingModal(!isShowingModal) }} />
            }
        </nav>
    )
}