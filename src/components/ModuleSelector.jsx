// src/components/ModuleSelector.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const ModuleSelector = () => {
  const navigate = useNavigate();

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

  const handleSelectModule = (moduleId) => {
    navigate(`/quiz/${moduleId}`);
  };

  return (
    <ModulesGrid>
      {modules.map((module) => (
        <ModuleCard key={module.id} onClick={() => handleSelectModule(module.id)}>
          <ModuleTitle>{module.title}</ModuleTitle>
          <ModuleDescription>{module.description}</ModuleDescription>
          <button>Inizia Quiz</button>
        </ModuleCard>
      ))}
    </ModulesGrid>
  );
};

export default ModuleSelector;