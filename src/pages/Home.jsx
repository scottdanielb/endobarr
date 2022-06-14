import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.component';
import Sidebar from '../components/Sidebar/Sidebar';
import HeroSection from '../components/HeroSection/HeroSection';
import GlobalStyles from '../GlobalStyles';
import Pricing from '../components/WorksSection2/WorksSection2';
import InfoSection from '../components/InfoSection/InfoSection';
import { homeObjOne } from '../components/InfoSection/data';
import EndoSection from '../components/EndoSection/EndoSection';
import { homeObjTwo } from '../components/EndoSection/data';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';
import ContactFormSection from '../components/ContactForm/ContactForm';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <GlobalStyles />
      <Pricing />
      <InfoSection {...homeObjOne} />
      <EndoSection {...homeObjTwo} />
      <Testimonial />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Home;
