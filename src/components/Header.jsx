// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';

// Modifica il HeaderContainer
const HeaderContainer = styled.header`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between; // Cambia questo in space-around o space-evenly
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;
// Aggiungi questo nuovo container che andrà a sostituire NavContainer
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

// Modifica NavContainer
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Aggiungi questa proprietà
  flex: 1; // Aggiungi questa proprietà per farlo espandere
  gap: 1rem;
`;

// Modifica Nav
const Nav = styled.nav`
  display: flex;
  gap: 2rem; // Aumenta lo spazio tra i link
  align-items: center;
  justify-content: center; // Centra gli elementi
  width: 100%; // Usa tutta la larghezza disponibile
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background-color: #1e40af;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; // Ripristina l'allineamento per mobile
    padding: 5rem 1.5rem 2rem;
    gap: 1.25rem;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none'};
    overflow-y: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 101;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    opacity: 0.9;
  }
`;

const LogoIcon = styled.span`
  font-size: 1.6rem;
`;


const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

const MegaMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 1rem;
  min-width: 270px;
  display: ${props => props.isOpen ? 'grid' : 'none'};
  grid-template-columns: 1fr;
  gap: 0.25rem;
  z-index: 200;
  
  @media (max-width: 768px) {
    position: relative;
    top: 0.5rem;
    left: 0;
    transform: none;
    width: 100%;
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    margin-top: 0.25rem;
    padding: 0.5rem;
  }
`;

const DocsMegaMenu = styled(MegaMenu)`
  min-width: 300px;
  grid-template-columns: repeat(2, 1fr);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MenuTitle = styled.div`
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  grid-column: 1 / -1;
  
  @media (max-width: 768px) {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const MenuItem = styled.div`
  padding: 0.6rem 0.75rem;
  color: #334155;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #f1f5fd;
    color: #2563eb;
  }
  
  @media (max-width: 768px) {
    color: white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
`;

const NavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 90;
`;

const ModuleIcon = {
  fi: "💰",
  mm: "📦",
  sd: "🛒",
  co: "📊",
  pp: "🏭",
  security: "🔒",
  cx: "👥",
  hcm: "👤",
  abap: "💻"
};

const Header = () => {
  const { resetQuiz, startQuiz } = useQuiz();
  const location = useLocation();
  const navigate = useNavigate();
  const [quizMenuOpen, setQuizMenuOpen] = useState(false);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const quizRef = useRef(null);
  const docsRef = useRef(null);
  
  // Gestione dei click esterni per chiudere i menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (quizRef.current && !quizRef.current.contains(event.target)) {
        setQuizMenuOpen(false);
      }
      if (docsRef.current && !docsRef.current.contains(event.target)) {
        setDocsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Chiudi menu quando cambia la location
  useEffect(() => {
    setQuizMenuOpen(false);
    setDocsMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Gestisci chiusura menu con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setQuizMenuOpen(false);
        setDocsMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Disabilita lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleQuizNavigation = (moduleId) => {
    resetQuiz();
    startQuiz(moduleId, false);
    navigate(`/quiz/${moduleId}`);
    setQuizMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleDocsNavigation = (path) => {
    navigate(path);
    setDocsMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <MainContainer>
          <LogoContainer>
            <Logo to="/" onClick={resetQuiz}>
              <LogoIcon>🎓</LogoIcon>
              SAP ERP Quiz
            </Logo>
          </LogoContainer>
          
          <NavContainer>
            <NavToggle onClick={toggleMobileMenu}>
              {mobileMenuOpen ? "✕" : "☰"}
            </NavToggle>
            
            <Nav isOpen={mobileMenuOpen}>
              <NavItem>
                <NavLink to="/" onClick={resetQuiz} active={isActive('/') ? 1 : 0}>
                  Home
                </NavLink>
              </NavItem>
              
              <NavItem ref={quizRef}>
                <NavLink 
                  as="button" 
                  onClick={() => setQuizMenuOpen(!quizMenuOpen)} 
                  active={isActive('/quiz') ? 1 : 0}
                >
                  Quiz <span style={{ marginLeft: '4px', fontSize: '0.8rem' }}>{quizMenuOpen ? '▲' : '▼'}</span>
                </NavLink>
                
                <MegaMenu isOpen={quizMenuOpen}>
                  <MenuTitle>Scegli un modulo SAP</MenuTitle>
                  <MenuItem onClick={() => handleQuizNavigation('fi')}>
                    {ModuleIcon.fi} Finance (FI)
                  </MenuItem>
                  <MenuItem onClick={() => handleQuizNavigation('mm')}>
                    {ModuleIcon.mm} Materials (MM)
                  </MenuItem>
                  <MenuItem onClick={() => handleQuizNavigation('sd')}>
                    {ModuleIcon.sd} Sales (SD)
                  </MenuItem>
                  <MenuItem onClick={() => handleQuizNavigation('co')}>
                    {ModuleIcon.co} Controlling (CO)
                  </MenuItem>
                  <MenuItem onClick={() => handleQuizNavigation('pp')}>
                    {ModuleIcon.pp} Production (PP)
                  </MenuItem>
                </MegaMenu>
              </NavItem>
              
              <NavItem ref={docsRef}>
                <NavLink 
                  as="button" 
                  onClick={() => setDocsMenuOpen(!docsMenuOpen)} 
                  active={(isActive('/mm-documentation') || isActive('/fi-documentation')) ? 1 : 0}
                >
                  Documentazione <span style={{ marginLeft: '4px', fontSize: '0.8rem' }}>{docsMenuOpen ? '▲' : '▼'}</span>
                </NavLink>
                
                <DocsMegaMenu isOpen={docsMenuOpen}>
                  <MenuTitle>Documentazione Moduli SAP</MenuTitle>
                  <MenuItem onClick={() => handleDocsNavigation('/fi-documentation')}>
                    {ModuleIcon.fi} Finance (FI)
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/mm-documentation')}>
                    {ModuleIcon.mm} Material (MM)
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/sd-documentation')}>
                    {ModuleIcon.sd} Sales (SD)
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/pp-documentation')}>
                    {ModuleIcon.pp} Production Planning
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/co-documentation')}>
                    {ModuleIcon.co} Controlling (CO)
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/security-documentation')}>
                    {ModuleIcon.security} Security
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/cx-documentation')}>
                    {ModuleIcon.cx} Customer Experience
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/hcm-documentation')}>
                    {ModuleIcon.hcm} Human Capital
                  </MenuItem>
                  <MenuItem onClick={() => handleDocsNavigation('/abap-documentation')}>
                    {ModuleIcon.abap} ABAP Development
                  </MenuItem>
                </DocsMegaMenu>
              </NavItem>
              
              <NavItem>
                <NavLink to="/about" active={isActive('/about') ? 1 : 0}>
                  Info
                </NavLink>
              </NavItem>
            </Nav>
          </NavContainer>
        </MainContainer>
      </HeaderContainer>
      
      <Backdrop isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;