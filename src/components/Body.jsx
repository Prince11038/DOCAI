import React from "react";
import Card from "../components/Card.jsx";
// import ProfileDetails from "../components/ProfileDetails.jsx";
// import UserHistory from "./UserHistory.jsx";
// import MakeAppointment from "./MakeAppointment.jsx";
import "./Body.css";

import Physiatry from "../assets/image/Physiatry.svg";
import Radiology from "../assets/image/Radiology.svg";
import Nutrition from "../assets/image/Nutrition.svg";
import Checkup from "../assets/image/Checkup.svg";
import Dermatology from "../assets/image/Dermatology.svg";
import Doctor from "../assets/image/MedicalProfessional.svg";
import Medicine from "../assets/image/Medicine.svg";
import {Link} from "react-router-dom";

function Body() {
  return (
    <div className="body-container">
        <h1>Our Services</h1>
        <p className="HeaderTag">Our services are designed to help you feel better and live a healthier life.</p>
        <div className="row1">
            <Card   
                image={Physiatry}
                title="Mental Health"
                description="Empower your emotional well-being for stress, anxiety, and self-care."
                link="https://preview--mindful-companion-hub.lovable.app/"
                text="Try it now"
            />
            <Card   
                image={Nutrition}
                title="Nutrition"
                description="Your smart food companion for balanced meals and a healthier you."
                link="https://mindfulness-5pun.onrender.com"
                text="Chat with us"
            />


        </div>  

        <div className="row2">
            <Card
                image={Checkup}
                title="General Checkup"
                description="Your 24/7 virtual health assistant for fast, accurate medical support."
                link="https://mindfulness-5pun.onrender.com"
                text="Chat with us"
            />
            
            <Card   
                image={Doctor}
                title="Doctor"
                description="Get in the touch with a Real doctor for your health-related queries."
                link="https://mindfulness-5pun.onrender.com"
                text="Book an appointment"
            />
        </div> 
        <h1>MedSewak</h1> 
        <p className="Med">Provide the medicine name or composition to access comprehensive details about the medication.</p>

        <div className="MedicineContainer">

            <img src={Medicine} alt="Medicine" className="Medicine" />
            
            <iframe
            src="https://ausaadhiisthal.onrender.com/"
            width="100%"
            height="500px"
            style={{ border: "none" }}
            allowFullScreen
            ></iframe>
        </div>
        
    </div>
  );
}

export default Body;    