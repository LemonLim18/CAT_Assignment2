import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "../components/card.css";

const Card = ({ imageSrc, innerImage, name, role, jobDescFirst, jobDescSecond, socialLinks }) => {
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
        <div className="card">
            <div className="imbBx">
                <img src={imageSrc} alt="" onClick={openModal}/>
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
                    {/* LEFT PANE */}
                    <div className = "col1">
                        <img src= {innerImage}></img>
                    </div>

                    {/* RIGHT PANE */}
                    <div className='col2'>
                        {/* first row for X button */}
                        <div className="row1">
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                 <button className="buttonTeam " onClick={closeModal}>✕</button>
                            </form>
                            </div>
                        </div>

                        {/* second row for information display */}
                        <div className="row2">
                            <h2>{name}</h2>
                            <p>{ jobDescFirst }</p>
                            <p>{ jobDescSecond }</p>

                            {/* Add media icon */}
                            <div className="iconList">
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
                    </div>
                    
                </div>
            </dialog>
        </div>
    );
};

export default Card;
