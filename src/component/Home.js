import React,{useEffect} from "react";
import { useGlobalContext } from "./Context";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
//import heroImage from '../images/hero1.jpg'; // Make sure this path is correct

const Home = () => {
  const {updateHomePage}=useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, [])
  
  return (
  <>
  <HeroSection/>
  <Contact/>
  </>
  )
};

export default Home;
