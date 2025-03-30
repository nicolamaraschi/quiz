// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MMDocumentationPage from './pages/MMDocumentationPage';

function App() {
  return (
    <QuizProvider>
      <Router>
        <GlobalStyles />
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz/:moduleId" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/mm-documentation" element={<MMDocumentationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;