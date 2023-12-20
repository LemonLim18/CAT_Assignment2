import React from "react";
import "../components/footer.css";
import { FaBalanceScale, FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">PDF/TXT Converter</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Products</a></li>
                        </ul>
                    </div>
                    <div className="footer-col"> 
                        <h4>Services</h4>
                        <ul>
                            <li><a href="https://www.pdffiller.com/en/functionality/word-editor-online?keyword=&campaignid=304097320&adgroupid=24662950240&gad_source=1&gclid=CjwKCAiA1MCrBhAoEiwAC2d64SBYkUx2xxSGcEmylicjtRplkBxxIGGywlwIXy4cCYyY94WGhnkM3hoCUq4QAvD_BwE">Word Editor</a></li>
                            <li><a href="https://pdfsimpli.com/lp/pdf-to-edit/?account=242-758-0902&campaignid=8589165324&adgroupid=136801054274&keyword=pdf%20editor&gclid=CjwKCAiA1MCrBhAoEiwAC2d64eWsq7dpl5ki-Jw-weC4ACLkfuT-7B3g3EJDOJxSTsv8dzP2o_M0tRoCWCUQAvD_BwE&source=g&matchtype=e&location=9066567&gad_source=1">PDF Editor</a></li>
                            <li><a href="https://www.fotor.com/">Photo Editor</a></li>
                            <li><a href="https://chat.openai.com/">ChatGPT AI</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">FAQ</a></li>
                            <li><a href="https://www.youtube.com/watch?v=cgwmH9MmnUw">Return & Refund</a></li>
                            <li><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Promotion</a></li>
                            <li><a href="https://www.youtube.com/watch?v=cgwmH9MmnUw">Payment Options</a></li>
                            <li><a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Premium Membership</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=100004293498253"><FaFacebookF /></a>
                            <a href="https://wa.me/+601115411073"><FaWhatsapp /></a>
                            <a href="https://www.instagram.com/lemon_lim03/"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/miin-ning-lim-4952a8256/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                <div className="copyright">
                    <p>TextifyPDF Inc © 2023 - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
