import './App.css';
import Header from '../src/components/Header.js';
import Showcase from '../src/components/Showcase.js';
import About from "../src/components/About.js";
import Splash from "../src/components/Splash.js";
import Converter from '../src/components/Converter.js';
import IntroVideo from '../src/components/introVideo.js';
import Product from '../src/components/Product.js';
import MeetTeam from './components/MeetTeam.js';
import Contact from '../src/components/Contact.js';
import Footer from '../src/components/Footer.js';

// This shall be the index page I will be working on

function App() {
  return (
    // Need to enclose all different components in a single <>
    <>
      <Header />
      <Showcase />
      <About />
      <IntroVideo />
      <Splash />
      <Converter />
      <Product />
      <MeetTeam/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
