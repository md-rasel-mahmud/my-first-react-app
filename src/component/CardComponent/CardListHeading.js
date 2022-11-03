


function CardListHeading(props) {

    return(
        <div className="fadeRight CardComponent-content">
            <h1>{props.title}</h1>
            <p className='text-end'>{props.caption}</p>
        </div>
    );
}
export default CardListHeading;