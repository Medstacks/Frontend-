import "../../App.css"
export default function Navbar() { 
    return (
        <nav className={'flex justify-between items-center px-3 py-2 shadow-md '}>
            <article className="w-auto h-[30px] flex gap-1 justify-center items-center cursor-pointer">
                <img src="/favicons/favicon.svg" loading="lazy" alt="logo" className={'object-contain w-full h-full'} />
                <h6 style={{fontWeight:'600'}}>Agrolink</h6>
            </article>
        </nav>
    )
}