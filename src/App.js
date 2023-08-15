import './App.css';
import About from './component/About';
import Products from './component/Products';
import Contact from './component/Contact';
import SinglePage from './component/SingleProduct';
import Cart from './component/Cart';
import ErrorPage from './component/ErrorPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './component/GlobalStyle';
import Footer from './component/Footer';


function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
   <>
   <ThemeProvider theme={theme}>
   <Router>
     <GlobalStyle/>
     <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/singlepage" element={<SinglePage/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/*" element={<ErrorPage/>}/>   
    </Routes>
    <Footer/>
  </Router>
  </ThemeProvider>
   </>
  );
}

export default App;
