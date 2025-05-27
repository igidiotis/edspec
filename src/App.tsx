import React from 'react';
import { AppProvider } from './context/AppContext';
import MainContent from './components/MainContent';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;