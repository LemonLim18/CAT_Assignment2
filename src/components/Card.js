import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Card = ({ imageSrc, name, role, socialLinks }) => {
    const modalId = `modal_${name.replace(/\s/g, '')}`; // Create a unique ID for each modal

    const openModal = () => {
        document.getElementById(modalId).showModal();
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    };

    const closeModal = () => {
        document.getElementById(modalId).close();
        document.body.style.overflow = 'auto'; // Re-enable scrolling on the body
    };

    return (
        <div className="card" onClick={openModal}>
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
            <dialog id={modalId} className="modal" onClose = {closeModal}>
                <div className="modal-box">
                    <h2>{name}</h2>
                    <p>{role}</p>
                    {/* Add more information and job description here */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Card;
