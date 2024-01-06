import React from "react";
import "../components/intro_video.css";

const IntroVideo = () => {
    return (
        <section className="video-section">
            <iframe title="Intro Video" src="https://www.youtube.com/embed/RBAHYHsePtE" frameborder="0" allow />
        </section> 
    );
}
 
export default IntroVideo;