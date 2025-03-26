// src/context/QuizContext.jsx (CORRETTO)
import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentModule, setCurrentModule] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (currentModule) {
      // Carica le domande dal modulo selezionato
      import(`../data/quiz/${currentModule}.json`)
        .then((data) => {
          setQuestions(data.default.questions);
          setCurrentQuestionIndex(0);
          setAnswers({});
          setScore(0);
          setQuizCompleted(false);
        })
        .catch((error) => console.error('Errore nel caricamento delle domande:', error));
    }
  }, [currentModule]);

  const startQuiz = (moduleId) => {
    setCurrentModule(moduleId);
  };

  const answerQuestion = (questionId, answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateScore();
      setQuizCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers += 1;
      }
    });
    setScore((correctAnswers / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentModule(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <QuizContext.Provider
      value={{
        currentModule,
        questions,
        currentQuestionIndex,
        answers,
        score,
        quizCompleted,
        startQuiz,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        calculateScore,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
