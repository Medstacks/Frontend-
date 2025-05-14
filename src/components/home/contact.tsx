import "../../App.css"
export default function Contact() {
    return (
        <section className="contact">
            <h5>Contact us</h5>
            <section>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email"/>
                <textarea name="" placeholder="Description and Notes" cols={5} className="resize-none"></textarea>
                <footer>
                    <button>Send</button>
                </footer>
            </section>
        </section>
    )
}