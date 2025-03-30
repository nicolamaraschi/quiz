// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';

const HeaderContainer = styled.header`
  background-color: #0056b3;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.span`
  margin-right: 10px;
  font-size: 1.6rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 8px 12px;
  border-radius: 4px;
  position: relative;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '50%' : '0'};
    height: 3px;
    background-color: white;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 50%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: white;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  border: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  min-width: 220px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 100;
  border-radius: 4px;
  top: 100%;
  left: 0;
  margin-top: 6px;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #f0f7ff;
    color: #0056b3;
    border-left: 3px solid #0056b3;
  }
`;

const Header = () => {
  const { resetQuiz, startQuiz } = useQuiz();
  const location = useLocation();
  const navigate = useNavigate();
  const [modulesOpen, setModulesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  
  // Chiudi i dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = () => {
      setModulesOpen(false);
      setDocsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Chiudi dropdown quando cambia la location
  useEffect(() => {
    setModulesOpen(false);
    setDocsOpen(false);
  }, [location.pathname]);

  // Gestisci click sui dropdown evitando la propagazione
  const handleDropdownClick = (setter) => (e) => {
    e.stopPropagation();
    setter(prev => !prev);
  };

  // Determina se un link dovrebbe essere attivo
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Gestisce la navigazione ai quiz
  const handleQuizNavigation = (moduleId) => {
    resetQuiz(); // Reset lo stato del quiz
    startQuiz(moduleId, false); // Inizializza il nuovo quiz
    navigate(`/quiz/${moduleId}`); // Naviga alla pagina del quiz
    setModulesOpen(false); // Chiudi il dropdown
  };

  // Gestisce la navigazione alla documentazione
  const handleDocsNavigation = (path) => {
    navigate(path);
    setDocsOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" onClick={resetQuiz} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <LogoIcon>🎓</LogoIcon>
          SAP ERP Quiz
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/" onClick={resetQuiz} active={isActive('/') ? 1 : 0}>
          Home
        </NavLink>
        
        <DropdownContainer onClick={(e) => e.stopPropagation()}>
          <DropdownButton 
            onClick={handleDropdownClick(setModulesOpen)}
            active={isActive('/quiz') ? 1 : 0}
          >
            Moduli Quiz <span>{modulesOpen ? '▲' : '▼'}</span>
          </DropdownButton>
          <DropdownContent isOpen={modulesOpen}>
            <DropdownItem onClick={() => handleQuizNavigation('fi')}>Finance (FI)</DropdownItem>
            <DropdownItem onClick={() => handleQuizNavigation('mm')}>Materials Management (MM)</DropdownItem>
            <DropdownItem onClick={() => handleQuizNavigation('sd')}>Sales and Distribution (SD)</DropdownItem>
            <DropdownItem onClick={() => handleQuizNavigation('co')}>Controlling (CO)</DropdownItem>
            <DropdownItem onClick={() => handleQuizNavigation('pp')}>Production Planning (PP)</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
        
        <DropdownContainer onClick={(e) => e.stopPropagation()}>
          <DropdownButton 
            onClick={handleDropdownClick(setDocsOpen)}
            active={isActive('/mm-documentation') ? 1 : 0}
          >
            Documentazione <span>{docsOpen ? '▲' : '▼'}</span>
          </DropdownButton>
          <DropdownContent isOpen={docsOpen}>
            <DropdownItem onClick={() => handleDocsNavigation('/mm-documentation')}>
              Material Management (MM)
            </DropdownItem>
            {/* Aggiungi altri link alla documentazione quando disponibili */}
          </DropdownContent>
        </DropdownContainer>
        
        <NavLink to="/about" active={isActive('/about') ? 1 : 0}>
          Info
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;