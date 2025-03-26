// src/pages/ResultsPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';
import Results from '../components/Results';

const ResultsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0056b3;
`;

const ResultsPage = () => {
  const navigate = useNavigate();
  const { quizCompleted, currentModule } = useQuiz();

  useEffect(() => {
    if (!quizCompleted || !currentModule) {
      navigate('/');
    }
  }, [quizCompleted, currentModule, navigate]);

  if (!quizCompleted || !currentModule) {
    return null;
  }

  let moduleTitle = '';
  switch (currentModule) {
    case 'fi':
      moduleTitle = 'Finance (FI)';
      break;
    case 'mm':
      moduleTitle = 'Materials Management (MM)';
      break;
    case 'sd':
      moduleTitle = 'Sales and Distribution (SD)';
      break;
    case 'co':
      moduleTitle = 'Controlling (CO)';
      break;
    case 'pp':
      moduleTitle = 'Production Planning (PP)';
      break;
    default:
      moduleTitle = 'SAP ERP';
  }

  return (
    <ResultsPageContainer>
      <ResultsTitle>Risultati: {moduleTitle}</ResultsTitle>
      <Results />
    </ResultsPageContainer>
  );
};

export default ResultsPage;