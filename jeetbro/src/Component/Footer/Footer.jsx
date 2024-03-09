import React from "react";
import "./Footer.css";
import UilWhatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram"
import UilTelegram from "@iconscout/react-unicons/icons/uil-telegram"
import UilChat from "@iconscout/react-unicons/icons/uil-chat"
import UilFastMail from "@iconscout/react-unicons/icons/uil-fast-mail";
const Footer = () => {
    return (
        <div className="footer">
<img src="../Images/Logo.png" alt="logo" style={{width:"100px" , height:"100px"}}/>
            <div className="f-header">
                <p>Contact us at below platforms.</p>
                <a href="chat"><span><UilChat color="white" size={"1rem"} /> </span>Contact Live Chat</a>
            </div>

            <div className="f-content">
                <span>Send us an email:<span><UilFastMail color="white" size={"3rem"} /></span><a href="mail">info@jeetBro.com</a></span>
            </div>

            <p style={{fontSize:"20px" , fontWeight:"bold"}}>Get in touch</p>
            <div className="f-icons">
                <UilWhatsapp color="white" size={"3rem"} />
                <UilInstagram color="white" size={"3rem"} />
                <UilTelegram color="white" size={"3rem"} />
            </div>

        </div>
    );
};

export default Footer;
