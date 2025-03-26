// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import ModuleSelector from '../components/ModuleSelector';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #0056b3;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Title>Quiz sui Moduli SAP ERP</Title>
        <Description>
          Metti alla prova le tue conoscenze sui diversi moduli SAP ERP: Finance (FI), Materials Management (MM), 
          Sales and Distribution (SD), Controlling (CO) e Production Planning (PP).
        </Description>
      </div>
      <ModuleSelector />
    </HomeContainer>
  );
};

export default Home;