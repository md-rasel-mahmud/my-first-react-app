import "./Contact.css"
import CardListHeading from "../CardComponent/CardListHeading";

function Contact() {
    return(
        <section className="fadeDown"  id="CardComponent-area">
            
			<CardListHeading title='get in touch' caption={
                <span>
                    <a> Belghoria Hat-6250, Bagmara, Rajshahi <i className="fas fa-map-marker-alt"></i> </a><br />
                    <a href="mailto:md.rasel.mahmud.mail@gmail.com"> md.rasel.mahmud.mail@gmail.com <i className="fas fa-envelope"></i></a><br />
                    <a href="tel:+8801728-140505"> +880 1728-140 505 <i className="fas fa-phone"></i></a>

                </span>
            }/>
            
            <div className="card-content  row">
                <form className="d-flex flex-column" action="#">
                    <input placeholder="Enter your Name" type="text" />
                    <input placeholder="Enter your Email" type="email" />
                    <input placeholder="Enter your Phone Number" type="tell" />
                    <input className="input-discribe" placeholder="Write Describe" type="text" />
                    <a href="#" style={{margin: '0 auto'}} className="btn">Submit</a>
                </form>
			</div>

        </section>
    );
}
export default Contact;