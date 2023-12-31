import React from "react";
import splashImg from "../images/splash.jpg"
import splashAnimation from "../images/splash_animation.mp4"
import "../components/splash.css";

const Splash = () => {
    return (  
        <section className="splash-section rise">
            <video src={splashAnimation} autoPlay loop muted playsInline />
        </section>
    );
}
 
export default Splash;
