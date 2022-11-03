import "./Services.css"
import CardListHeading from "../CardComponent/CardListHeading";
import Card from "../CardComponent/Card";


function Services() {
    return(
        <section className="fadeDown"  id="CardComponent-area">
            
			<CardListHeading title='my services' caption='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat necessitatibus neque reiciendis omnis magnam earum consequatur debitis porro modi eaque!'/>

            <div class="card-content row">


			<Card
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="I have 1 year of expereance on this fild"
			></Card>

			<Card
				logo="fas fa-laptop-code"
				cardTitle="Web Development"
				cardDescript="I have 1 year of expereance on this fild"
			></Card>

			<Card
				logo="fas fa-laptop-medical"
				cardTitle="computer operator"
				cardDescript="I have 1 year of expereance on this fild"
			></Card>	
				
				
			</div>

        </section>
    );
}
export default Services;