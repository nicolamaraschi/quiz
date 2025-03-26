// src/components/Question.jsx
import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  margin-bottom: 2rem;
`;

const QuestionText = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const AnswerOption = styled.div`
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${(props) => {
    if (props.isAnswered) {
      if (props.isCorrect) {
        return '#4caf50'; // Verde per risposta corretta
      } else if (props.selected) {
        return '#f44336'; // Rosso per risposta sbagliata selezionata
      }
    }
    return props.selected ? '#0056b3' : '#ddd';
  }};
  background-color: ${(props) => {
    if (props.isAnswered) {
      if (props.isCorrect) {
        return '#e8f5e9'; // Sfondo verde chiaro per risposta corretta
      } else if (props.selected) {
        return '#ffebee'; // Sfondo rosso chiaro per risposta sbagliata selezionata
      }
    }
    return props.selected ? '#e6f0ff' : 'white';
  }};
  cursor: ${(props) => (props.isAnswered ? 'default' : 'pointer')};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => (props.isAnswered ? 'inherit' : '#0056b3')};
    background-color: ${(props) => (props.isAnswered ? 'inherit' : '#f0f7ff')};
  }
`;

const FeedbackText = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.isCorrect ? '#4caf50' : '#f44336')};
`;

const Question = ({ question, selectedAnswer, onAnswerSelect, isAnswered }) => {
  if (!question) return null;

  const handleAnswerSelect = (questionId, answerId) => {
    if (!isAnswered) {
      onAnswerSelect(questionId, answerId);
    }
  };

  return (
    <QuestionContainer>
      <QuestionText>{question.text}</QuestionText>
      <AnswersContainer>
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            selected={selectedAnswer === answer.id}
            isCorrect={isAnswered && question.correctAnswer === answer.id}
            isAnswered={isAnswered}
            onClick={() => handleAnswerSelect(question.id, answer.id)}
          >
            {answer.text}
            {isAnswered && question.correctAnswer === answer.id && ' ✓'}
            {isAnswered && selectedAnswer === answer.id && question.correctAnswer !== answer.id && ' ✗'}
          </AnswerOption>
        ))}
      </AnswersContainer>
      
      {isAnswered && (
        <FeedbackText isCorrect={selectedAnswer === question.correctAnswer}>
          {selectedAnswer === question.correctAnswer 
            ? 'Risposta corretta!' 
            : 'Risposta sbagliata!'}
        </FeedbackText>
      )}
    </QuestionContainer>
  );
};

export default Question;