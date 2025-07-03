

function Card(props){
    return(
        <div className="Card"> 
            <img src={props.img} alt="Picture" className='Card-img' ></img>
            <h2 className='Card-title'>{props.name}</h2>
            <p className='Card-desc'>{props.desc}</p>
        </div>
    );
}

export default Card