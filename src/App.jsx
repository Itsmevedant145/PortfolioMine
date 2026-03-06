import React from 'react';
import JuniorDeveloperPortfolio from './JuniorDeveloperPortfolio';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <JuniorDeveloperPortfolio />
    </ThemeProvider>
  );
}

export default App;