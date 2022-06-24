import React from "react";
import './Whatsapp.css';
import email from './imagens/email.png';
import whatsapp from './imagens/whatsapp.jpg';

export default function Whatsapp() {
    
  
    return (
        <div className="page"> 

                    
            <div className="grid-container" >
                <div className="grid-item">
                <br />
                <h2>Fale conosco nos links abaixo:</h2>
                <br />

                <img className='email' src={email} alt="email" width="23px"></img><a  className="email" href="mailto:seuemail@gmail.com">
                <strong>E-mail: seuemail@gmail.com</strong>
                </a>
                <br />
                <img className='whatsapp' src={whatsapp} alt="whatsapp" width="23px"></img><a className="whats" href="https://api.whatsapp.com/send?phone=5561992607877" target="_blank" rel="noopener noreferrer">
                <strong>Whatsapp: 61 99260-7877</strong>
                </a>     
                </div>
                
                <div className="grid-item">
                <br />
                <h2>Localização:</h2>
                
                <div className="maps1">
                    <iframe className="map" title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.9220308603844!2d-47.884520347277096!3d-15.755263383216581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a34952799ef%3A0xa2982dcf42b8f8b8!2sFausto%20%26%20Manoel!5e0!3m2!1sen!2sbr!4v1654887170330!5m2!1sen!2sbr" width="800" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                </div>  
                </div>         
         </div>
         </div>
)}
