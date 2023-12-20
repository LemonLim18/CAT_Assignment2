import React from 'react';
import "../components/contact.css";

const Contact = () => {
    return (
        <section class="page-content rise" id="contact">
            <h2><span>Contact</span> Us</h2>
            <p class="short-desc">
                Drop a message or feedback here and we will get back to you as soon as possible 📬
            </p>
            <div class="container">
                <div class="address">
                        <div class="details">
                            <h3>Company Details</h3>
                            <p>Address: Kelana Square, 17, Jalan SS7/26, 47500 Petaling Jaya, Selangor Darul'Ehsan, Malaysia</p>
                            <p>Phone: 03-5629 5000</p>
                            <p class="email">Email: TextifyPDF2023@BLKT.com</p>
                        </div>
                        <div class="icon-list">
                            <a href="https://www.facebook.com/profile.php?id=100004293498253"><i class="fa fa-facebook-f"></i></a>
                            <a href="https://wa.me/+601115411073"><i class="fa fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com/lemon_lim03/"><i class="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/miin-ning-lim-4952a8256/"><i class="fa fa-linkedin"></i></a>
                        </div>
                </div>
                <form className='contactForm'>
                    <h3>LEAVE YOUR MESSAGE 💬</h3>
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Email Address" required />
                    <input type="text" id="phone" placeholder="Phone no." required />
                    <textarea id="message" rows="4" placeholder="Please leave your message here. Kamsahamida~" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}


export default Contact;