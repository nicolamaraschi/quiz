// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';

const HeaderContainer = styled.header`
  background-color: #0056b3;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #f0f0f0;
  }
`;

const Header = () => {
  const { resetQuiz } = useQuiz();

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" onClick={resetQuiz} style={{ color: 'white', textDecoration: 'none' }}>
          SAP ERP Quiz
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/" onClick={resetQuiz}>
          Home
        </NavLink>
        <NavLink to="/about">Info</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;