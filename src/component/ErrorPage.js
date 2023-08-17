import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import errorImage from '../images/errorimage.gif';

const Error = () => {
  return (
    <Wrapper>
      <img src={errorImage} alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.2rem;

  .btn {
    font-size: 1.8rem;
    margin-top: 2rem;
  }
`;

export default Error;