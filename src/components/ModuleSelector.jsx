// Modifica 2: src/components/ModuleSelector.jsx
// Aggiungiamo opzioni per selezionare la modalità casuale o ordinata

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
`;

const ModuleCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ModuleTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #0056b3;
`;

const ModuleDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #666;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const QuizButton = styled.button`
  flex: 1;
  font-size: 0.9rem;
  background-color: ${props => props.random ? '#ff9800' : '#0056b3'};
  
  &:hover {
    background-color: ${props => props.random ? '#e68a00' : '#003d82'};
  }
`;

const ModuleSelector = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const modules = [
    {
      id: 'fi',
      title: 'Finance (FI)',
      description: 'Domande sul modulo finanziario, contabilità generale e reportistica finanziaria di SAP.'
    },
    {
      id: 'mm',
      title: 'Materials Management (MM)',
      description: 'Quiz sulla gestione dei materiali, approvvigionamento e logistica di magazzino.'
    },
    {
      id: 'sd',
      title: 'Sales and Distribution (SD)',
      description: 'Test sul ciclo di vendita, gestione ordini clienti e distribuzione.'
    },
    {
      id: 'co',
      title: 'Controlling (CO)',
      description: 'Domande sul controllo di gestione, contabilità analitica e reportistica.'
    },
    {
      id: 'pp',
      title: 'Production Planning (PP)',
      description: 'Quiz sulla pianificazione della produzione, MRP e gestione delle risorse.'
    }
  ];

  const handleSelectModule = (moduleId, useRandomMode) => {
    startQuiz(moduleId, useRandomMode);
    navigate(`/quiz/${moduleId}`);
  };

  return (
    <ModulesGrid>
      {modules.map((module) => (
        <ModuleCard key={module.id}>
          <ModuleTitle>{module.title}</ModuleTitle>
          <ModuleDescription>{module.description}</ModuleDescription>
          <ButtonsContainer>
            <QuizButton onClick={() => handleSelectModule(module.id, false)}>
              Inizia Quiz Ordinato
            </QuizButton>
            <QuizButton 
              random 
              onClick={() => handleSelectModule(module.id, true)}
            >
              Inizia Quiz Random
            </QuizButton>
          </ButtonsContainer>
        </ModuleCard>
      ))}
    </ModulesGrid>
  );
};

export default ModuleSelector;