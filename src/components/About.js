import React from "react";
import { FaRocket, FaBook } from "react-icons/fa";
import aboutUsImg from "../images/aboutUs.jpg";
import "../components/about.css";
import { useEffect } from 'react';

const Mission = () => {

    return (
        <>
        {/* ABOUT US CONTENT */}
        <section className="about" id="aboutUs">
            <h1 className="about-header rise"><span>About</span> Us</h1>
            <p className="about-shortDesc rise"> Catch a glimpse of who we really are. Explore more about our past, present and the future!!</p>

            <div className="about-content">
                <div className="aboutColumn1 rise">
                    
                    <div className="about-container">
                        <div className="image">
                            <img className="aboutImage" src={aboutUsImg} alt="aboutUs-Image" />
                        </div>
                        <div className="intro-text rise">
                            <div>
                                <h3>BKLT Company Inc.</h3> 
                            </div>

                            <p>Welcome to BKLT, where innovation meets imagination! As a rapidly evolving software company, we pride ourselves on cultivating a dynamic culture that thrives on creativity and innovation. At the core of our mission is a commitment to empowering our customers to unleash their creativity seamlessly, enabling them to craft extraordinary PowerPoint content effortlessly.
                            <br /><br />
                            Our journey began with a vision to revolutionize the way people design presentations. We recognized the need for a powerful design platform that transcends traditional boundaries, allowing individuals and businesses to bring their ideas to life without the complexities of coding. BKLT was born from this aspiration, and today, we stand as a testament to the endless possibilities that unfold when technology meets ingenuity.
                            <br /><br />
                            At BKLT, we invite you to explore a world where design knows no limits, where presentations become a canvas for your imagination, and where every click brings you closer to unlocking the full potential of your creativity. Welcome to a new era of presentation design, where innovation meets simplicity, and where your ideas become captivating stories without the need for a single line of code.
                            <br /><br />
                            Join us as we redefine the art of presentation – one slide at a time.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* END OF ABOUT US CONTENT */}
        
        {/* MISSION & VISION CONTENT */}
        <section className="mission" id="mission">
            <h1 className="mission-header rise">Mission & Vision</h1>
            <p className="mission-shortDesc rise"> Why does the service exist and what are the goals and aspirations.</p>

            <div className="mission-content">
                <div className="column1 rise">
                    <div>
                        <h3>Our Mission <FaRocket /></h3> 
                        {/* <img src={missionImg} alt="Mission-Images" /> */}
                    </div>
                    <div>
                        <p>Our mission is to revolutionize presentations, turning dull PowerPoint slides into captivating spectacles that align seamlessly with users' themes. Through innovative design and creative flair, we aim to breathe life into every presentation, ensuring it not only engages but resonates, leaving a lasting impact on audiences and transforming information delivery.</p>
                    </div>
                   
                </div>
                <div className="column2 rise">
                    <h3>Our Vision <FaBook/></h3>
                    {/* <img src={visionImg} alt="vision"></img> */}
                    <p>Our vision is to develop an AI service that not only comprehensively understands and organizes documents but also seamlessly integrates with productivity tools. By automating information handling, our goal is to shift users' focus from compiling data to actively acting on insights, thereby enhancing efficiency and productivity in a transformative manner.</p>
                </div>

            </div>
        </section>
        
        </>
    );
}

export default Mission;