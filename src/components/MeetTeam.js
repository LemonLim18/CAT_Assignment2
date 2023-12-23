import React from 'react';
import "../components/meetteam.css";
import Team from "../images/teamPic.jpg";
import person1 from "../images/pic01.jpg";
import person2 from "../images/pic02.jpg";
import person3 from "../images/pic03.jpg";
import person4 from "../images/pic04.jpg";
import kaahong from "../images/kaahong.jpg";
import miinning from "../images/miinning.jpg";
import miinning_casual from "../images/miinning_casual.jpg";
import kailun from "../images/kailun.jpg";
import kailun_casual from "../images/kailun_casual.jpg";
import weihong from "../images/weihong.jpg";
import weihong_casual from "../images/weihong_casual.jpg";
import innerWeiHong from "../images/innerBok.png";
import innerKaaHong from "../images/innerKaaHong.png";
import innerKaiLun from "../images/innerKaiLun.png";
import innerMiinNing from "../images/innerMiinNing.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card.js";

const MeetTeam = () => {
    return (  
        <section className="meetTeam" id="meetTeam">
            {/* Start of Meet Our Team */}
            <div className="wrapper">

                <div className="title">
                    <h3>Meet Our <span>Team</span></h3>
                </div>

                <div className="card_Container">

                    <Card 
                        imageSrc={kaahong}
                        innerImage = {innerKaaHong} 
                        name="Albert Khoo Kaa Hong" 
                        role="CEO & Founder"
                        jobDescFirst='Our dynamic Chief Executive Officer and visionary leader at BKLT Inc. Albert holds a Ph.D. in Artificial Intelligence from Stanford University, bringing a strong educational foundation to his role.With a remarkable career marked by being recognized as "Innovator of the Year" in 2023, Albert has propelled BKLT Inc. to the forefront of AI-powered presentation enhancement. His strategic vision and dedication to innovation continue to drive our commitment to transforming the landscape of presentations.'
                        jobDescSecond=''
                        socialLinks={{ 
                            // wait for Kaa Hong to provide the links
                            instagram: 'https://www.instagram.com/albertkhoo0806/', 
                            github: 'https://github.com/AlbertKhoo', 
                            linkedin: 'https://www.linkedin.com/in/kaa-hong-khoo-73b28a271/' 
                        }} 
                    />

                    <Card 
                        imageSrc={miinning_casual} 
                        innerImage = {innerMiinNing} 
                        name="Lim Miin Ning" 
                        role="Front-End Web Developer" 
                        jobDesc=""
                        socialLinks={{ 
                            instagram: 'https://www.instagram.com/lemon_lim03?igshid=OGQ5ZDc2ODk2ZA==', 
                            github: 'https://github.com/LemonLim18', 
                            linkedin: 'https://www.linkedin.com/in/miin-ning-lim-4952a8256/' 
                        }} 
                    />

                    <Card 
                        imageSrc={weihong} 
                        innerImage = {innerWeiHong} 
                        name="Bok Wei Hong" 
                        role="Back-End Web Developer" 
                        jobDesc=""
                        socialLinks={{ 
                            instagram: 'https://www.instagram.com/chuck_bok2901/', 
                            github: 'https://github.com/BokWeiHong', 
                            linkedin: 'https://www.linkedin.com/in/bok-wei-hong-829959182/' 
                        }} 
                    />

                    <Card 
                        imageSrc={kailun_casual} 
                        innerImage = {innerKaiLun} 
                        name="Teoh Kai Lun" 
                        role="UI/UX Designer" 
                        jobDesc=""
                        socialLinks={{ 
                            instagram: 'https://www.instagram.com/kailun09_/', 
                            github: 'https://github.com/Kailun03', 
                            linkedin: 'https://www.linkedin.com/in/kai-lun-teoh-75079a269/' 
                        }} 
                    />
                {/* End of the Card container */}
                </div>

            </div>

            {/* End of Meet Our Team */}


            {/* Start of the group photo */}
            <div className='groupPhoto'>
                <div className="overlay rise">
                    <p>
                        Thumbs up for <span>creative</span> design,<br></br>
                        Piece sign for <span>fast</span> outcome.
                    </p>
                </div>
                <img src={Team}></img>
            </div>
            {/* End of the group photo */}
            
        </section>
    );
}
 
export default MeetTeam;
