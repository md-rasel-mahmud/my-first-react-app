import "./About.css"
import CardListHeading from "../CardComponent/CardListHeading";

function About() {

    return(
        <section className="fadeDown" id="about-area">

            <CardListHeading title='About Me' caption="Hello There! I'm Rasel Mahmud. I'm Study In Diploma Engineering Department Of Computer Science Technology (CST) At Moulvibazar Polytechnic Institute. I Love Computer Programing & Designing. That's Why I Learned & Learning as a Front-end Web Developer."/>

            
            <div className="skills-bar fadeDown">

                <h1>My skills</h1>

                <div class="bar">
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="progress-line html"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Bootstrap</span>
                    </div>
                    <div class="progress-line bst"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>Javascript</span>
                    </div>
                    <div class="progress-line js"><span></span></div>
                </div>
                <div class="bar">
                    <div class="info">
                        <span>React</span>
                    </div>
                    <div class="progress-line react"><span></span></div>
                </div>
            </div>
        </section>
    );
}
export default About;