
import React, { useContext,useReducer,useEffect } from 'react'
import reducer from "../component/Reducer";
import heroImage from '../images/hero1.jpg'; 
import aboutImage from '../images/about.jpg';


const AppContext=React.createContext();

const API = "https://thapareactapi.up.railway.app";

const Context = ({children}) => {
  const intialState = {
    name: "",
    image: "",
    services: [],
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "AFFAN",
        image: heroImage,
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "MD AFFAN ALAM",
        image: aboutImage,
      },
    });
  };

  
  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>{children}</AppContext.Provider>
  )
}
 const useGlobalContext=()=>{
     return useContext(AppContext)
 }

export {AppContext, Context,useGlobalContext};