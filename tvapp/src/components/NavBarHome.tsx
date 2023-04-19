import React from 'react';
import styled from 'styled-components';
import {faFilm,faHeart,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


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
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 1.5rem;
  color: #f1e9ef;
  text-decoration: none;
`;
const FavoritesLink = styled(NavLink)`
  margin-left: 70%;
  margin-bottom: 0.5rem;
`;

const NavButton = styled.button`
  margin-left: 1.5rem;
  background-color: #122932;
  color: #f1e9ef;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;



interface NavbarProps {
  
}

const NavbarHome: React.FC<NavbarProps> = () => {
  return (
    <NavContainer>
       
      <Logo href="/"><FontAwesomeIcon icon={faFilm} size="lg" style={{color: "#faf4fa",}} /> watched</Logo>
      <FavoritesLink to="/favorites"><FontAwesomeIcon icon={faHeart} style={{color: "#f1e9f1",}} /> Favorites</FavoritesLink>
      <NavButton>
         <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
        </NavButton>
     
      
    </NavContainer>
  );
};

export default NavbarHome;
