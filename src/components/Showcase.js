import React, { useEffect } from 'react';
import logos from '../images/framework-logos.png';
import logoSmall from '../images/framework-logos-small.png';
import logoExtraSmall from '../images/framework-logos-extraSmall.png';
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
        <h1>🚀🌟Welcome to TristarDesign - Your Ultimate PPT AI Design Tools!🖌️🎨</h1>
        <p>
        Unleash the potential of your presentations with TristarDesign, a one-page web service designed to breathe new life into your PowerPoint files. Simply upload your PPT file, customize the style and writing font, and watch as your presentation transforms into a visually stunning masterpiece.
        </p>
      </div>

        <>
          <div className="showcase-img">
            <img className="logos rise" src={logos} alt="" />
            <img className="logos-small rise" src={logoSmall} alt="" />
            <img className="logos-extraSmall rise" src={logoExtraSmall} alt="" />
          </div>

          <p className="showcase-demo rise">
            <small>Join us as the premium member to unlock all the premium services and products</small>
          </p>
        </>
        
    </section>
  );
}

export default Showcase;
