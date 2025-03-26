// src/pages/QuizPage.jsx
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
  margin-bottom: 2rem;
  color: #0056b3;
`;

const QuizPage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { startQuiz, quizCompleted, currentModule, questions } = useQuiz();

  useEffect(() => {
    if (moduleId) {
      startQuiz(moduleId);
    }
  }, [moduleId, startQuiz]);

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
      <Quiz />
    </QuizPageContainer>
  );
};

export default QuizPage;