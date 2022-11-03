


function Card(props) {

    const {imgActive, imgSrc, logo, cardTitle, cardDescript, button,link} = props;

    return(
        <div class="card fadeDown">
            <div class="single-service ">

                <div class="text-center part-1">
                    <i class={logo}></i>
                    <h3 class="title">{cardTitle}</h3>
                </div>
                {imgActive === 'active' ? <img className="bg-img" src={imgSrc} /> : ''}
                

                <div class="part-2">
                    <p class="description">{cardDescript}</p>

                    {button === 'active' ? <a href={link} style={{padding: "0 .8rem", fontSize: '1rem'}} className="btn">view live</a> : ''}
                    
                </div>
            </div>
        </div>
    );
}
export default Card;