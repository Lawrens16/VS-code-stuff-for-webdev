import Pfp from './assets/Pfp.jpg'

function Card(){
    return(
        <div className="Card"> 
            <img src={Pfp} alt="Picture of Me" className='Card-img' ></img>
            <h2 className='Card-title'>Lawrence</h2>
            <p className='Card-desc'>Hi! I'm Lawrence. I love to read and breathe</p>
        </div>
    );
}

export default Card