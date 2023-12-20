import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Card = ({ imageSrc, name, role, socialLinks }) => (
    <div className="card">
        <div className="imbBx">
            <img src={imageSrc} alt=""/>
        </div>
        <div className="content">
            <div className="contentBx">
                <h3>{name} <br/><span>{role}</span></h3>
            </div>
            <ul className="sci">
                <li>
                    <a href={socialLinks.instagram}><FaInstagram /></a>
                </li>
                <li>
                    <a href={socialLinks.github}><FaGithub /></a>
                </li>
                <li>
                    <a href={socialLinks.linkedin}><FaLinkedin /></a>
                </li>
            </ul>
        </div>
    </div>
);

export default Card;
