import React from 'react';
import { useQuiz } from '../context/QuizContext';
import './Settings.css';

const Settings = () => {
  const { showImmediateFeedback, setShowImmediateFeedback, quizCompleted } = useQuiz();

  return (
    <div className="settings">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={showImmediateFeedback}
          onChange={(e) => setShowImmediateFeedback(e.target.checked)}
          disabled={quizCompleted}
        />
        <span className="slider round"></span>
        <span className="toggle-label">Feedback immediato</span>
      </label>
    </div>
  );
};

export default Settings;