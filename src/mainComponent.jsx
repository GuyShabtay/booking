import React, { useState } from 'react';
import DateSelector from './dateSelector';
import ProgressBar from './progressBar';

const MainComponent = () => {
  const [progress, setProgress] = useState(0);


  return (
    <div>
    <ProgressBar progress={progress}  />
    <DateSelector setProgress={setProgress}  />
    </div>
  );
};

export default MainComponent;
