import profilePic from './assets/pictures/parker_profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile picture"></img>
            <h2 className='card-title'>Parker Harmon</h2>
            <p className='card-text'>Studying Computer Science at Grand Valley State Univesity</p>
        </div>

    );
}

export default Card