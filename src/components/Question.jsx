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
  border: 2px solid ${(props) => (props.selected ? '#0056b3' : '#ddd')};
  background-color: ${(props) => (props.selected ? '#e6f0ff' : 'white')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #0056b3;
    background-color: #f0f7ff;
  }
`;

const Question = ({ question, selectedAnswer, onAnswerSelect }) => {
  if (!question) return null;

  return (
    <QuestionContainer>
      <QuestionText>{question.text}</QuestionText>
      <AnswersContainer>
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            selected={selectedAnswer === answer.id}
            onClick={() => onAnswerSelect(question.id, answer.id)}
          >
            {answer.text}
          </AnswerOption>
        ))}
      </AnswersContainer>
    </QuestionContainer>
  );
};

export default Question;
