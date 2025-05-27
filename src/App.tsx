import React from 'react';
import { AppProvider } from './context/AppContext';
import MainContent from './components/MainContent';
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <AppProvider>
      <Analytics />
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;