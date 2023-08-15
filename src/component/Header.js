import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
//import logo from '../images/logo.png'

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <h3 className="top-heading">Protofolio</h3>
      </NavLink>
      <Navbar />
    </Mainheader>
  );
};
const Mainheader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .top-heading{
    text-transform: uppercase;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
  }
`;

export default Header;
