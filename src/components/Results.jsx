// src/components/Results.jsx (CORRETTO)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const ScoreSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ScoreValue = styled.h2`
  font-size: 3rem;
  color: ${(props) => {
    if (props.score >= 80) return '#4caf50';
    if (props.score >= 60) return '#ff9800';
    return '#f44336';
  }};
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #666;
`;

const QuestionsReview = styled.div`
  margin-top: 2rem;
`;

const ReviewTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0056b3;
`;

const QuestionItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const QuestionText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const AnswerText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => {
    if (props.correct && props.selected) return '#4caf50';
    if (!props.correct && props.selected) return '#f44336';
    if (props.correct) return '#4caf50';
    return '#666';
  }};
  font-weight: ${(props) => {
    if (props.correct || props.selected) return 'bold';
    return 'normal';
  }};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Results = () => {
  const navigate = useNavigate();
  const { score, questions, answers, resetQuiz, currentModule } = useQuiz();

  // Rimossa la funzione getAnswerText che non viene utilizzata

  const handleRetryQuiz = () => {
    // Correggiamo l'uso di useQuiz() direttamente dentro questa funzione
    navigate(`/quiz/${currentModule}`);
  };

  const handleBackToHome = () => {
    resetQuiz();
    navigate('/');
  };

  return (
    <ResultsContainer>
      <ScoreSection>
        <ScoreValue score={score}>{Math.round(score)}%</ScoreValue>
        <ScoreText>
          Hai risposto correttamente a {Math.round((score / 100) * questions.length)} domande su {questions.length}
        </ScoreText>
      </ScoreSection>

      <QuestionsReview>
        <ReviewTitle>Revisione delle Domande</ReviewTitle>
        
        {questions.map((question) => (
          <QuestionItem key={question.id}>
            <QuestionText>{question.text}</QuestionText>
            {question.answers.map((answer) => (
              <AnswerText
                key={answer.id}
                selected={answers[question.id] === answer.id}
                correct={question.correctAnswer === answer.id}
              >
                {answer.text} 
                {question.correctAnswer === answer.id && ' ✓'}
                {answers[question.id] === answer.id && question.correctAnswer !== answer.id && ' ✗'}
              </AnswerText>
            ))}
          </QuestionItem>
        ))}
      </QuestionsReview>

      <ButtonsContainer>
        <button onClick={handleRetryQuiz}>Riprova Quiz</button>
        <button onClick={handleBackToHome}>Torna alla Home</button>
      </ButtonsContainer>
    </ResultsContainer>
  );
};

export default Results;