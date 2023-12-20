import React from "react";
import splashImg from "../images/splash.jpg"
import "../components/splash.css";

const Splash = () => {
    return (  
        <section className="splash-section">
            <img src={splashImg} alt="imager_divider" />
        </section>
    );
}
 
export default Splash;
