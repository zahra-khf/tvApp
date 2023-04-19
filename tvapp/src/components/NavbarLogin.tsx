import React from 'react';
import styled from 'styled-components';
import {faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:  #122932;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;



interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavContainer>
       
      <Logo href="/"><FontAwesomeIcon icon={faFilm} size="lg" style={{color: "#faf4fa",}} /> watched</Logo>
     
      
    </NavContainer>
  );
};

export default Navbar;
