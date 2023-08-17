import React,{useEffect} from "react";
import { useGlobalContext } from "./Context";
import HeroSection from "./HeroSection";
//import aboutImage from '../images/about.jpg';

const About = () => {
  const {udpateAboutPage}=useGlobalContext();
  useEffect(() => {
    udpateAboutPage();
  }, [])
  
  return <HeroSection/>;
};

export default About;
