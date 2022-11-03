import "./Portfolio.css"
import CardListHeading from "../CardComponent/CardListHeading";
import Card from "../CardComponent/Card";
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';

function Portfolio() {
    return(
        <section className="fadeDown" id="CardComponent-area">
            
			<CardListHeading title='my portfolio' caption=''/>

            <div class="card-content row">


			<Card
				imgSrc={project1}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="Find Largest number project."
				button="active"
                
			></Card>

			<Card
				imgSrc={project2}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="Check Even or Odd number project."
				button="active"
                link=''
			></Card>

			<Card
				imgSrc={project3}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="This is simple calculator website."
				button="active"
                link='https://myself-rasel-mahmud.github.io/javascript-calculator/'
			></Card>

            <Card
				imgSrc={project4}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="Portfolio website made for my uncle."
				button="active"
                link='https://myself-rasel-mahmud.github.io/mizanur-rahman-portfolio/'                
			></Card>

            <Card
				imgSrc={project5}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="This website made for clinic."
				button="active"
                link='https://myself-rasel-mahmud.github.io/faysal-clinic/'
			></Card>

            <Card
				imgSrc={project6}
				imgActive="active"
				logo="fas fa-pen-ruler"
				cardTitle="graphics design"
				cardDescript="This is my curent website."
				button="active"
                link=''
			></Card>	

				
				
			</div>

        </section>
    );
}
export default Portfolio;