export default function Footer() {
    return (
        <main className='bg-black p-1'>
            <footer className={'w-full flex justify-center border-t-[1px] text-white'}>
                <p className={'text-[0.75rem] pt-[5px]'}>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </main>
    )
}