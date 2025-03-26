// src/context/QuizContext.jsx (CORRETTO)
import React, { createContext, useState, useEffect } from 'react';
import { shuffleArray } from '../utils/quizUtils'; // Utilizziamo la funzione già presente

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentModule, setCurrentModule] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]); // Per conservare l'ordine originale
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [randomMode, setRandomMode] = useState(false); // Nuovo stato per la modalità casuale

  useEffect(() => {
    if (currentModule) {
      // Carica le domande dal modulo selezionato
      import(`../data/quiz/${currentModule}.json`)
        .then((data) => {
          const loadedQuestions = data.default.questions;
          setOriginalQuestions(loadedQuestions);
          
          // Se la modalità casuale è attiva, mischia le domande
          if (randomMode) {
            setQuestions(shuffleArray(loadedQuestions));
          } else {
            setQuestions(loadedQuestions);
          }
          
          setCurrentQuestionIndex(0);
          setAnswers({});
          setScore(0);
          setQuizCompleted(false);
        })
        .catch((error) => console.error('Errore nel caricamento delle domande:', error));
    }
  }, [currentModule, randomMode]);

  const startQuiz = (moduleId, useRandomMode = false) => {
    setRandomMode(useRandomMode);
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
    setOriginalQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(0);
    setQuizCompleted(false);
    setRandomMode(false);
  };

  // Funzione per cambiare la modalità (ordinata/casuale)
  const toggleRandomMode = () => {
    setRandomMode(prev => {
      const newRandomMode = !prev;
      
      // Se stiamo passando a modalità casuale, mischiamo le domande
      if (newRandomMode && originalQuestions.length > 0) {
        setQuestions(shuffleArray(originalQuestions));
      } else if (!newRandomMode && originalQuestions.length > 0) {
        // Altrimenti, ritorna all'ordine originale
        setQuestions(originalQuestions);
      }
      
      return newRandomMode;
    });
    
    // Torna alla prima domanda
    setCurrentQuestionIndex(0);
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
        randomMode,
        startQuiz,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        calculateScore,
        resetQuiz,
        toggleRandomMode,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
