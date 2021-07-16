import React from 'react';

import './loading-screen.css';

function LoadingScreen() {
  return (
    <div className="loading-spinner-pulse">
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
