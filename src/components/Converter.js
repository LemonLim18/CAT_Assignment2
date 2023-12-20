import React from 'react';
import "../components/converter.css";
import CloudIcon from  "../images/cloud.png";

class Converter extends React.Component {
    render() {
        return (
            <section className="converter rise" id="converter">
                <header>
                    <h2>PPT AI Enhancer</h2>
                </header>
                <div className="container" id="navigate-to-converter-container-afterReload">
                    <div className="header-section">
                        <h1>Upload Files</h1>
                        <p>Upload PPT files to enhance with any themes using AI</p>
                        <p>Only PPT files format are allowed</p>
                    </div>
                    
                    {/* Browse Section */}
                    <div className="browse-section">
                        <div className="col">
                            <div className="cloud-icon">
                                <img src={CloudIcon} alt="cloud" />
                                {/* KAA HONG'S UPLOAD CODE */}
                                <h1><span>File Upload and Retrieval</span></h1>
                                <form className="upload" action="" method="post" enctype="multipart/form-data">
                                    <input className="browse-file" type="file" id="file" name="file[]" multiple accept=".pdf, .txt, .ppt" required />
                                    <label htmlFor="file" className="file-label">Browse Files</label>
                                    <button type="submit">Upload</button>
                                </form>
                                {/* END OF KAA HONG'S UPLOAD CODE */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="downPart">
                    <div className="themeSelection">
                        <h1>Theme Selection</h1>
                        <p>Select a theme to enhance your PPT</p>
                        <p>Only one theme can be selected</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Converter;
