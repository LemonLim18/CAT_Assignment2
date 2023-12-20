import './App.css';
import Header from '../src/components/Header.js';
import Showcase from '../src/components/Showcase.js';
import About from "./components/About.js";
import Splash from "../src/components/Splash.js";
import Converter from '../src/components/Converter.js';
import Product from '../src/components/Product.js';
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
      <Splash />
      <Converter />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
