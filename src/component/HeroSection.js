import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'
import { useGlobalContext } from './Context';

//import { GlobalStyle } from './GlobalStyle';

const HeroSection = () => {
  const {name,image} = useGlobalContext();
  return (
      <Wrapper>
          <div className='container grid grid-two-column'>
              <div className='section-hero-data'>
                <p>This is Me</p>
                <h1>{name}</h1>
                <p>I am {name}.I'm currently studying Bachelor of Technology in Computer Science and Engineering.</p>
                <Button className='btn hireme-btn'><NavLink to='/'>Hire Me</NavLink></Button>
              </div>
              {/*For image */}
              <div className='section-hero-image'>
                    <picture>
                        <img src={image} alt=''   ></img>                 
                        </picture>
              </div>
          </div>
      </Wrapper>
    
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
    margin-top: 2rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
  
`;



export default HeroSection