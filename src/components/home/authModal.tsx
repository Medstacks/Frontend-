// import { useEffect, useState } from "react";
// import { MdClose } from "react-icons/md";
// import '../../App.css'
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/authContext";
// import type { User } from "../../types";

// export default function AuthModal({ onClose }: { onClose: () => void }) {
//     const navigate = useNavigate()
//     const { isAuthenticated, login } = useAuth()
//     const [email, setEmail] = useState<string>('')
//     const [isSigningIn, setSignIn] = useState<boolean>(isAuthenticated);
//     const [password, setPassword] = useState<string>('')
//     const [confirmPassword, setConfirmPassword] = useState<string>('')

//     function toggleSignUp() {
//         setSignIn(!isSigningIn)
//     }
//     useEffect(() => {

//     }, [isSigningIn])
//     return (
//         <div className="fixed inset-0 z-20 flex justify-center items-center">
//             <aside className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></aside>
//             <main className="relative z-20 w-[90%] max-w-[350px] bg-white rounded-lg shadow-lg p-2">
//                 <header className='flex justify-between w-full pl-[10px] items-center'>
//                     <p style={{fontSize:'1.2rem'}} className='font-[600] py-[10px]'>{!isSigningIn ? 'Create Your Account' : 'Welcome Back'}</p>
//                     <article onClick={onClose} className="hover:text-red-400 p-2 rounded-[50%] hover:inset-0 hover:bg-[#e4e0e0] cursor-pointer duration-400 transform transition">
//                         <MdClose />
//                     </article>
//                 </header>
//                 <section className="flex justify-center items-center gap-[20px] bg-gray-100 p-[5px] rounded">
//                     <p onClick={toggleSignUp} className={`${!isSigningIn ? 'bg-black text-white' : "font-semibold"} cursor-pointer py-[2px] rounded transition transform duration-300 w-full text-center`}>Sign Up</p>
//                     <p onClick={toggleSignUp} className={`${isSigningIn ? 'bg-black text-white ' : "font-semibold"} cursor-pointer py-[2px] rounded transition transform duration-300 w-full text-center`}>Sign In</p>
//                 </section>
//                 <section className='sectionBody'>
//                     <form>
//                         <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                         <input type="password" placeholder="password" value={password} />
//                         <input type="password" placeholder="Confirm password" className={`${isSigningIn ? 'hidden' : ''}`} value={confirmPassword} />
//                         <div className='flex w-full py-[10px] justify-center items-center'>
//                             <button
//                                 onClick={function () {
//                                     const userData: User = { name: email, role: 'farmer' };
//                                     login(userData);
//                                     navigate('/dashboard')
//                                 }}
//                                 style={{ color: 'white' }} className="w-[100px] h-[10px]">Sign {!isSigningIn ? 'Up' : 'In'}</button>
//                         </div>
//                         <section className='w-full flex gap-[5px] justify-center items-center '>
//                             <div className='h-[1px] bg-gray-200 w-full'></div>
//                             <p style={{ fontWeight: 'lighter', fontSize: '0.6rem' }} className='text-nowrap text-gray-400'>or continue with</p>
//                             <div className='h-[1px] bg-gray-200 w-full'></div>
//                         </section>
//                         <div className='px-[20px]'>
//                             <button style={{ color: 'white' }} className='w-full'>Google</button>
//                         </div>
//                     </form>
//                 </section>
//                 <article className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 mb-[10px]'>
//                     <p style={{ fontSize: '0.55rem' }} className="capitalize underline font-thin hover:underline cursor-pointer text-gray-400 hover:text-gray-950">forgotten password?</p>
//                     <p style={{ fontSize: '0.55rem' }} className="capitalize font-thin cursor-pointer text-gray-400 hover:text-gray-950">Terms & Conditions</p>
//                 </article>
//             </main>
//         </div>
//     );
// }
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";
import type { User } from "../../types";

export default function AuthModal({ onClose }: { onClose: () => void }) {
    const navigate = useNavigate();
    const { isAuthenticated, login } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [isSigningIn, setSignIn] = useState<boolean>(isAuthenticated);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});
    
    function toggleSignUp() {
        setSignIn(!isSigningIn);
        setErrors({});
    }
    
    const validateInputs = () => {
        const newErrors: {
            email?: string;
            password?: string;
            confirmPassword?: string;
        } = {};
        
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        if (!isSigningIn) {
            if (!confirmPassword) {
                newErrors.confirmPassword = "Please confirm your password";
            } else if (password !== confirmPassword) {
                newErrors.confirmPassword = "Passwords don't match";
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateInputs()) {
            const userData: User = { name: email, role: 'farmer' };
            login(userData);
            navigate('/dashboard');
        }
    };
    
    return (
        <div className="fixed inset-0 z-20 flex justify-center items-center">
            {/* Dark background overlay */}
            <aside className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></aside>
            
            <main className="relative z-20 w-[90%] max-w-[350px] bg-white rounded-lg shadow-lg p-4">
                <header className='flex justify-between w-full pl-[10px] items-center'>
                    <p style={{fontSize:'1.2rem'}} className='font-[600] py-[10px]'>
                        {!isSigningIn ? 'Create Your Account' : 'Welcome Back'}
                    </p>
                    <button onClick={onClose} className="hover:text-red-400 p-2 rounded-full hover:bg-[#e4e0e0] cursor-pointer duration-300 transition-all">
                        <X size={20} />
                    </button>
                </header>
                
                <section className="flex justify-center items-center gap-[20px] bg-gray-100 p-[5px] rounded mb-4">
                    <p 
                        onClick={toggleSignUp} 
                        className={`${!isSigningIn ? 'bg-black text-white' : "font-semibold"} cursor-pointer py-[5px] px-[10px] rounded transition transform duration-300 w-full text-center`}
                    >
                        Sign Up
                    </p>
                    <p 
                        onClick={toggleSignUp} 
                        className={`${isSigningIn ? 'bg-black text-white ' : "font-semibold"} cursor-pointer py-[5px] px-[10px] rounded transition transform duration-300 w-full text-center`}
                    >
                        Sign In
                    </p>
                </section>
                
                <section className='sectionBody'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                                style={{ borderColor: errors.email ? '#f44336' : '#e2e8f0' }}
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                            )}
                        </div>
                        
                        <div className="mb-3">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                                style={{ borderColor: errors.password ? '#f44336' : '#e2e8f0' }}
                            />
                            {errors.password && (
                                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                            )}
                        </div>
                        
                        {!isSigningIn && (
                            <div className="mb-3">
                                <input 
                                    type="password" 
                                    placeholder="Confirm password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    style={{ borderColor: errors.confirmPassword ? '#f44336' : '#e2e8f0' }}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        )}
                        
                        <div className='flex w-full py-[15px] justify-center items-center'>
                            <button
                                type="submit"
                                style={{ 
                                    backgroundColor: '#333',
                                    color: 'white',
                                    height: 'auto',
                                    padding: '10px 20px'
                                }} 
                                className="rounded-md hover:bg-black transition-colors duration-300"
                            >
                                Sign {!isSigningIn ? 'Up' : 'In'}
                            </button>
                        </div>
                        
                        <section className='w-full flex gap-[5px] justify-center items-center my-4'>
                            <div className='h-[1px] bg-gray-200 w-full'></div>
                            <p style={{ fontWeight: 'lighter', fontSize: '0.8rem' }} className='text-nowrap text-gray-400 px-2'>or continue with</p>
                            <div className='h-[1px] bg-gray-200 w-full'></div>
                        </section>
                        
                        <div className='px-[20px]'>
                            <button 
                                type="button"
                                style={{ 
                                    backgroundColor: '#4285F4',
                                    color: 'white',
                                    padding: '10px'
                                }} 
                                className='w-full rounded-md hover:opacity-90 transition-opacity duration-300'
                            >
                                Google
                            </button>
                        </div>
                    </form>
                </section>
                
                <article className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 mt-4 mb-[10px]'>
                    <p style={{ fontSize: '0.7rem' }} className="capitalize underline font-thin hover:underline cursor-pointer text-gray-400 hover:text-gray-950">
                        Forgotten password?
                    </p>
                    <p style={{ fontSize: '0.7rem' }} className="capitalize font-thin cursor-pointer text-gray-400 hover:text-gray-950">
                        Terms & Conditions
                    </p>
                </article>
            </main>
        </div>
    );
}
