import React from 'react';
import Quiz from './components/Quiz';
import OceanBody from './components/OceanBody';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
          Et si l'océan était un corps humain ?
        </h1>
        
        <div className="mb-12">
          <OceanBody />
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-lg text-blue-800 text-center mb-8">
            L'océan, vaste et mystérieux, fonctionne comme un organisme vivant. 
            Chaque élément de son écosystème est interconnecté, tout comme les organes 
            et systèmes d'un corps humain.
          </p>
        </div>

        <Quiz />
      </div>
    </div>
  );
}

export default App;