// src/components/Quiz.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import useQuiz from '../hooks/useQuiz';
import Question from './Question';
import ProgressBar from './ProgressBar';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    answers,
    answerQuestion,
    nextQuestion,
    previousQuestion
  } = useQuiz();
  
  // Stato per tenere traccia se l'utente ha risposto alla domanda corrente
  const [questionAnswered, setQuestionAnswered] = useState({});

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  // Controlla se la domanda corrente è già stata risposta
  const isCurrentQuestionAnswered = currentQuestion ? questionAnswered[currentQuestion.id] : false;

  // Funzione wrapper per gestire la risposta dell'utente
  const handleAnswerSelect = (questionId, answerId) => {
    answerQuestion(questionId, answerId);
    setQuestionAnswered(prev => ({ ...prev, [questionId]: true }));
  };

  // Funzione wrapper per passare alla domanda successiva
  const handleNextQuestion = () => {
    nextQuestion();
  };

  return (
    <QuizContainer>
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      
      <Question
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        isAnswered={isCurrentQuestionAnswered}
      />
      
      <ButtonsContainer>
        <button onClick={previousQuestion} disabled={currentQuestionIndex === 0}>
          Indietro
        </button>
        <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
          {isLastQuestion ? 'Termina Quiz' : 'Avanti'}
        </button>
      </ButtonsContainer>
    </QuizContainer>
  );
};

export default Quiz;
