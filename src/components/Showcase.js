import React, { useEffect } from 'react';
import logos from '../images/framework-logos.png';
import logoSmall from '../images/framework-logos-small.png';
import "../components/showcase.css";

const Showcase = (props) => {
    useEffect(() => {
      const handleScroll = () => {
        var content = document.querySelectorAll('.rise');
        content.forEach(function(element) {
          var rect = element.getBoundingClientRect();
          if(rect.top <= window.innerHeight) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
          } else {
            element.style.opacity = 0;
            element.style.transform = 'translateY(30px)';
          }
        });
      };
    
      window.addEventListener('scroll', handleScroll);
    
      // Clean up function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <section className="showcase">
      <div className="showcase-text rise">
        <h1>🚀Welcome to TextifyPDF - Your Ultimate PDF Conversion Solution!📝</h1>
        <p>
        Experience the weightless transformation of your PDFs into interstellar text marvels with TextifyPDF. Watch as your documents gracefully navigate the cosmic currents of the web with out TextifyPDF transcends earthly constraints, converting your PDFs into cosmic text wonders. The conversion shines brightly across the vast expanse of your HTML-first universe.
        </p>
      </div>

        <>
          <div className="showcase-img">
            <img className="logos rise" src={logos} alt="" />
            <img className="logos-small rise" src={logoSmall} alt="" />
          </div>

          <p className="showcase-demo rise">
            <small>Join us as the premium member to unlock all the premium services and products</small>
          </p>
        </>
        
    </section>
  );
}

export default Showcase;
