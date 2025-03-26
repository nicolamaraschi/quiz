// src/components/ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin: 1rem 0;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #0056b3;
  width: ${(props) => props.percentage}%;
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
  text-align: right;
`;

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div>
      <ProgressBarContainer>
        <Progress percentage={percentage} />
      </ProgressBarContainer>
      <ProgressText>
        Domanda {current} di {total}
      </ProgressText>
    </div>
  );
};

export default ProgressBar;