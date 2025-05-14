import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import '../../App.css'
export default function AuthModal({ onClose }: { onClose: () => void }) {
    const [isSigningIn, setSignIn] = useState<boolean>(false);
    function toggleSignUp() {
        setSignIn(!isSigningIn)
    }
    useEffect(() => {

    }, [isSigningIn])
    return (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
            {/* <aside className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></aside> */}
            <main className="relative z-20 w-[90%] max-w-[350px] bg-white rounded-lg shadow-lg p-2">
                <header className='flex justify-between w-full pl-[10px] items-center'>
                    <p style={{fontSize:'1.2rem'}} className='font-[600] py-[10px]'>{!isSigningIn ? 'Create Your Account' : 'Welcome Back'}</p>
                    <article onClick={onClose} className="hover:text-red-400 p-2 rounded-[50%] hover:inset-0 hover:bg-[#e4e0e0] cursor-pointer duration-400 transform transition">
                        <MdClose />
                    </article>
                </header>
                <section className="flex justify-center items-center gap-[20px] bg-gray-100 p-[5px] rounded">
                    <p onClick={toggleSignUp} className={`${!isSigningIn ? 'bg-black text-white' : "font-semibold"} cursor-pointer py-[2px] rounded transition transform duration-300 w-full text-center`}>Sign Up</p>
                    <p onClick={toggleSignUp} className={`${isSigningIn ? 'bg-black text-white ' : "font-semibold"} cursor-pointer py-[2px] rounded transition transform duration-300 w-full text-center`}>Sign In</p>
                </section>
                <section className='sectionBody'>
                    <form>
                        <input type="text" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <input type="password" placeholder="Confirm password" className={`${isSigningIn?'hidden':''}`} />
                        <div className='flex w-full py-[10px] justify-center items-center'>
                            <button style={{ color: 'white' }} className="w-[100px] h-[10px]">Sign { !isSigningIn?'Up':'In'}</button>
                        </div>
                        <section className='w-full flex gap-[5px] justify-center items-center '>
                            <div className='h-[1px] bg-gray-200 w-full'></div>
                            <p style={{ fontWeight: 'lighter', fontSize: '0.6rem' }} className='text-nowrap text-gray-400'>or continue with</p>
                            <div className='h-[1px] bg-gray-200 w-full'></div>
                        </section>
                        <div className='px-[20px]'>
                            <button style={{ color: 'white' }} className='w-full'>Google</button>
                        </div>
                    </form>
                </section>
                <article className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 mb-[10px]'>
                    <p style={{ fontSize: '0.55rem' }} className="capitalize underline font-thin hover:underline cursor-pointer text-gray-400 hover:text-gray-950">forgotten password?</p>
                    <p style={{ fontSize: '0.55rem' }} className="capitalize font-thin cursor-pointer text-gray-400 hover:text-gray-950">Terms & Conditions</p>
                </article>
            </main>
        </div>
    );
}