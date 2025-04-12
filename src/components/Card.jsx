import react from 'react';
import Chatbutton from './Chatbutton.jsx';

const Card=({image, title, description, link ,text})=>{
    return (
        <div className="card">
            <img src={image} alt={title} className="card-img" />
            <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <Chatbutton 
                innerText={text}
            />
            </div>
        </div>
    )
}

export default Card;
