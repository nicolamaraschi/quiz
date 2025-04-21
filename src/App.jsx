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
import FIDocumentationPage from './pages/FIDocumentationPage';
import SDDocumentationPage from './pages/SDDocumentationPage';
import PPDocumentationPage from './pages/PPDocumentationPage';
import SAPSecurityPageDocumentation from './pages/SAPSecurityPageDocumentation';
import CxDocumentationPage from './pages/cxDocumentationPage';
import HcmDocumentationPage from './pages/hcmDocumentationPage';
import CoDocumentationPage from './pages/CODocumentationPage';
import ABAPDocumentationPage from './pages/ABAPDocumentationPage';
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
              <Route path="/fi-documentation" element={<FIDocumentationPage />} />
              <Route path="/sd-documentation" element={<SDDocumentationPage />} />
              <Route path="/pp-documentation" element={<PPDocumentationPage />} />
              <Route path="/security-documentation" element={<SAPSecurityPageDocumentation />} />
              <Route path="/cx-documentation" element={<CxDocumentationPage />} />
              <Route path="/hcm-documentation" element={<HcmDocumentationPage />} />
              <Route path="/Co-Documentation" element={<CoDocumentationPage />} />
              <Route path="/abap-Documentation" element={<ABAPDocumentationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;