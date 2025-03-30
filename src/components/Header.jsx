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
    flex-wrap: wrap;
    gap: 0.8rem;
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
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
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
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 100;
  border-radius: 4px;
  top: 100%;
  left: ${props => props.isMobile ? '50%' : '0'};
  transform: ${props => props.isMobile ? 'translateX(-50%)' : 'none'};
  margin-top: 6px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 180px;
  }
`;

const DropdownItem = styled.div`
  color: #333;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #f0f7ff;
    color: #0056b3;
    border-left: 3px solid #0056b3;
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

// Menu hamburger per mobile
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  
  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: 480px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    margin-top: 0.5rem;
  }
`;

const Header = () => {
  const { resetQuiz, startQuiz } = useQuiz();
  const location = useLocation();
  const navigate = useNavigate();
  const [modulesOpen, setModulesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Rileva se siamo su mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
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
    setMobileMenuOpen(false);
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
    setMobileMenuOpen(false); // Chiudi il menu mobile
  };

  // Gestisce la navigazione alla documentazione
  const handleDocsNavigation = (path) => {
    navigate(path);
    setDocsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" onClick={resetQuiz} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <LogoIcon>🎓</LogoIcon>
          SAP ERP Quiz
        </Link>
      </Logo>
      
      {/* Bottone hamburger per schermi piccoli */}
      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <MobileNav isOpen={mobileMenuOpen || window.innerWidth > 480}>
        <Nav>
          <NavLink to="/" onClick={resetQuiz} active={isActive('/') ? 1 : 0}>
            Home
          </NavLink>
          
          <DropdownContainer onClick={(e) => e.stopPropagation()}>
            <DropdownButton 
              onClick={handleDropdownClick(setModulesOpen)}
              active={isActive('/quiz') ? 1 : 0}
            >
              Quiz <span>{modulesOpen ? '▲' : '▼'}</span>
            </DropdownButton>
            <DropdownContent isOpen={modulesOpen} isMobile={isMobile}>
              <DropdownItem onClick={() => handleQuizNavigation('fi')}>Finance (FI)</DropdownItem>
              <DropdownItem onClick={() => handleQuizNavigation('mm')}>Materials (MM)</DropdownItem>
              <DropdownItem onClick={() => handleQuizNavigation('sd')}>Sales (SD)</DropdownItem>
              <DropdownItem onClick={() => handleQuizNavigation('co')}>Controlling (CO)</DropdownItem>
              <DropdownItem onClick={() => handleQuizNavigation('pp')}>Production (PP)</DropdownItem>
            </DropdownContent>
          </DropdownContainer>
          
          <DropdownContainer onClick={(e) => e.stopPropagation()}>
            <DropdownButton 
              onClick={handleDropdownClick(setDocsOpen)}
              active={isActive('/mm-documentation') || isActive('/fi-documentation') ? 1 : 0}
            >
              Docs <span>{docsOpen ? '▲' : '▼'}</span>
            </DropdownButton>
            <DropdownContent isOpen={docsOpen} isMobile={isMobile}>
              <DropdownItem onClick={() => handleDocsNavigation('/fi-documentation')}>
                Finance (FI)
              </DropdownItem>
              <DropdownItem onClick={() => handleDocsNavigation('/mm-documentation')}>
                Material (MM)
              </DropdownItem>
              <DropdownItem onClick={() => handleDocsNavigation('/sd-documentation')}>
              Sales & Distribution (SD)
              </DropdownItem>
            </DropdownContent>
          </DropdownContainer>
          
          <NavLink to="/about" active={isActive('/about') ? 1 : 0}>
            Info
          </NavLink>
        </Nav>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;