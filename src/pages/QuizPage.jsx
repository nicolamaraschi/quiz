
// Aggiungiamo un indicatore di modalità casuale

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';
import Quiz from '../components/Quiz';

const QuizPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModuleTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #0056b3;
`;

const ModeBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-bottom: 2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: ${props => props.random ? '#ff9800' : '#0056b3'};
  color: white;
`;

const QuizPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { startQuiz, quizCompleted, currentModule, questions, randomMode } = useQuiz();

  useEffect(() => {
    if (moduleId) {
      // Non passiamo randomMode qui perché è già stato impostato quando l'utente ha scelto
      // il modulo dalla pagina home. startQuiz() viene chiamato per assicurarci che
      // il modulo corrente sia correttamente impostato.
      if (!currentModule) {
        startQuiz(moduleId);
      }
    }
  }, [moduleId, startQuiz, currentModule]);

  useEffect(() => {
    if (quizCompleted) {
      navigate('/results');
    }
  }, [quizCompleted, navigate]);

  if (!currentModule || questions.length === 0) {
    return (
      <QuizPageContainer>
        <div className="card">
          <p>Caricamento domande...</p>
        </div>
      </QuizPageContainer>
    );
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
    <QuizPageContainer>
      <ModuleTitle>Quiz: {moduleTitle}</ModuleTitle>
      <ModeBadge random={randomMode}>
        {randomMode ? 'Modalità Random' : 'Modalità Ordinata'}
      </ModeBadge>
      <Quiz />
    </QuizPageContainer>
  );
};

export default QuizPage;