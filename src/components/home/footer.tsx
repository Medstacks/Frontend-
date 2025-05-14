import "../../App.css"
export default function Footer() {
    return (
        <main className='bg-black p-1'>
            <section className="flex flex-col gap-[35px] sm:flex-row sm:flex-wrap sm:justify-between items-start py-[30px] sm:px-[40px]">
                <article className='articles'>
                    <h6>Company</h6>
                    <p>About Us</p>
                    <p>Our Team</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </article>
                <article className='articles'>
                    <h6>Services</h6>
                    <p>Climate Resilience Programmes</p>
                    <p>Technology Integration</p>
                    <p>Organic Practices</p>
                    <p>Supply Chain Support</p>
                    <p>Sustainable Irrigation</p>
                </article>
                <article className='articles'>
                    <h6>Information</h6>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Gallery</p>
                </article>
            </section>
            <footer className={'w-full flex justify-between border-t-[1px] text-white'}>
                <p style={{fontSize:'0.65rem'}} className={'pl-[10px] pt-[5px]'}>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </main>
    )
}