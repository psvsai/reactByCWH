import Naruto from './assets/Naruto.png';
import './Card.css'; 

const Card = () =>{
    return (
        <>
        <div className="Card">
        <header>Welcome to my app</header>
        <h2>Anime</h2>
        <img src = {Naruto} alt ="Naruto Pic"></img>
        <p>Naruto is one of the famous anime in the world,contains friendship,drama,emotional and action </p>
        </div>
        </>
    );
}
export default Card;