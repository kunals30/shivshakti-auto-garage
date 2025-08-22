import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import WhatsappBtn from "./WhatsappBtn";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import BookService from "./BookService";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <BookService/>
      <Footer></Footer>
      <WhatsappBtn></WhatsappBtn>
    </div>
  );
}

export default App;
