export default function Navbar() { 
    return (
        <nav className={'flex justify-between items-center px-3 py-2'}>
            <article className="w-[150px] h-[70px] flex ">
                <img src="/favicons/favicom.svg" loading="lazy" alt="logo" className={'object-contain w-full h-full'} />
            </article>
        </nav>
    )
}