import './Footer.css'
import {FiMail} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () =>{
    
    return(
        <div className="footer">
            <div>
                <img src="./Logo_LaGertrudis.png" />
                <div className="footerIcons">
                <FiMail/>
                <FaWhatsapp/>
                <BsInstagram/>
                </div>
            </div>
            <div className="footerSection footerSection2">
                <h3>Contacto</h3>
                <span>02622 57-6877</span>
                <span>02622 46-9691</span>
            </div>
            <div className="footerSection">
                <h3>Ubicación</h3>
                <span>Ruta 40</span>
                <span>Frente a INTA La Consulta</span>
                <span>M5567 La Consulta</span>
                <span>Mendoza</span>
                <span>Argentina</span>
            </div>
        </div>
    )
}
export default Footer;

            /*<div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.5702699782905!2d-69.07771670320513!3d-33.70811665597395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967c3d4320e67a71%3A0xa2fed054cb158bb9!2sLa%20Gertrudis%20Casa%20de%20Campo!5e1!3m2!1sen!2spe!4v1663628842711!5m2!1sen!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>*/