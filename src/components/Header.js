import React from 'react';
import logo_full from '../images/logo_full.png';
import logo_short from '../images/logo_short.png';
import logo_word from '../images/logo_word.png';
import astronaut from '../images/astronaut_full.jpeg';
// import astronaut_full from '../images/astronaut_full.jpeg';
import '../components/header.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const showSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
  };

  const hideSideBar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("myHeader");
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos < currentScrollPos) {
        header.style.top = "-100px";
      } else {
        header.style.top = "0";
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <div className='home'>
      <header className="header" id="myHeader">
        <a href="#">
          <img className="logo_full" src={logo_full} alt="Logo" />
          <img className="logo_short" src={logo_short} alt="Logo" />
        </a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#converter">PPT Enhancer</a></li>
          <li><a href="#product">Products</a></li>
          <li><a href="#meetTeam">Our Team</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="mobile-menu"><a onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="29" viewBox="0 -960 960 960" width="29"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
      </header>
      <nav className="sidebar">
        <ul>
          <li className="close-button"><a onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
          <li><img className="logo_word" src={logo_word} alt="logo-word-only"></img></li>
          <li><a href="#" onClick={hideSideBar}>Home</a></li>
          <li><a href="#aboutUs" onClick={hideSideBar}>About Us</a></li>
          <li><a href="#converter" onClick={hideSideBar}>PPT Enhancer</a></li>
          <li><a href="#product" onClick={hideSideBar}>Products</a></li>
          <li><a href="#meetTeam" onClick={hideSideBar}>Our Team</a></li>
          <li><a href="#contact" onClick={hideSideBar}>Contact</a></li>
        </ul>
      </nav>
      <section className="banner header-rise">
        <img src={astronaut} alt="banner"></img>
      </section>
    </div>
  );
}

export default Header;