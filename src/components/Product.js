import React from "react";
import product1 from "../images/microsoftWord.jpg";
import product2 from "../images/pdfEditor2.jpg";
import product3 from "../images/photoEditor.jpg";
import product4 from "../images/chatgpt.jpg";
import product5 from "../images/grammarly.png";
import product6 from "../images/turnitin.png";
import "../components/product.css";


const Product = () => {
    return (
        <section className="product" id="product">
            <h2 className="heading">Other <span>Products</span></h2>
            
            <div className="product-container">
                <a href="https://www.office.com/launch/Word/?ui=en-US&rs=US&auth=1">
                <div className="product-box">
                    <img src={product1} alt="product1" />
                    <div className="product-layer">
                        <h4>Word Editor</h4>
                        <p>Word Editor is a software application used for creating, editing, and formatting text documents. It typically includes features for text styling, formatting, and document organization, making it a versatile tool for word processing tasks.</p>
                    </div>
                </div>
                </a>

                <a href="https://pdfmaster.app/edit-pdf?id_partner=g_search&feature=editPDF&clickid=CjwKCAiAp5qsBhAPEiwAP0qeJhAkN4cuJ1-Pf1c8CA5r3L5AT7Ux7-o0Ys1RWcO5sBrDvtObBMfERxoC4eAQAvD_BwE&campid=20564975430&agid=153315570946&keyword=pdf%20editor%20online&matchtype=e&creatid=674586769176&extid=&targetid=kwd-8022933197&device=c&devmod=&placement=&adpos=&gclid=CjwKCAiAp5qsBhAPEiwAP0qeJhAkN4cuJ1-Pf1c8CA5r3L5AT7Ux7-o0Ys1RWcO5sBrDvtObBMfERxoC4eAQAvD_BwE">
                <div className="product-box">
                    <img src={product2} alt="product1" />
                    <div className="product-layer">
                        <h4>PDF Editor</h4>
                        <p>PDF Editor allows users to modify, annotate, and manipulate PDF documents. It provides features like text editing, adding images, and highlighting, offering flexibility in working with PDF files.</p>
                    </div>
                </div>
                </a>

                <a href="https://www.fotor.com/">
                <div className="product-box">
                    <img src={product3} alt="product1" />
                    <div className="product-layer">
                        <h4>Photo Editor</h4>
                        <p>Photo Editor is a software application that enables users to modify and enhance images. It provides tools for tasks such as cropping, retouching, and applying filters, allowing users to improve the visual quality of their photos.</p>
                    </div>
                </div>
                </a>

                <a href="https://chat.openai.com/">
                <div className="product-box">
                    <img src={product4} alt="product1" />
                    <div className="product-layer">
                        <h4>ChatGPT</h4>
                        <p>ChatGPT, developed by OpenAI, is a language model that utilizes artificial intelligence to generate human-like text based on the input it receives. It can be employed for a variety of applications, including natural language understanding and generation.</p>
                    </div>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
                </a>

                <a href="https://app.grammarly.com/?transaction_id=102cf63b4fe003f9a2997af7fc876a&affiliateNetwork=ho&affiliateID=133589">
                <div className="product-box">
                    <img src={product5} alt="product1" />
                    <div className="product-layer">
                        <h4>Grammarly</h4>
                        <p>Grammarly is an advanced writing assistance tool that offers grammar and spelling checks, as well as suggestions for improving writing style and clarity. It helps users enhance the overall quality of their written content.</p>
                    </div>
                </div>
                </a>

                <a href="https://www.turnitin.com/">
                <div className="product-box">
                    <img src={product6} alt="product1" />
                    <div className="product-layer">
                        <h4>Turnitin</h4>
                        <p>Turnitin is an online plagiarism detection service widely used in educational institutions. It helps educators and institutions maintain academic integrity by comparing submitted documents to a vast database of academic content, detecting potential instances of plagiarism and providing detailed reports to facilitate proper citation and attribution.</p>
                    </div>
                </div>
                </a>
            </div>
        </section>
    );
}

export default Product;