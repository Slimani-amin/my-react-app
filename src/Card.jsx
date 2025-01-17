import profilePic from './assets/1.jpg'




function Card(){
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="photo de amine" />
            <h2 className='card-title'>Amine</h2>
            <p className='card-text'>I am Studnt at EHTP</p>

        </div>

    );

    
}

export default Card;