'use client';

import RestarComponent from '@/components/RestarComponent';
import CountingObjects from '@/components/CountingObjects';
import { useState } from 'react';

export default function RestarPage() {
    const [difficulty, setDifficulty] = useState('facil'); // Fácil, Medio, Difícil
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Restar
      </h1>
       <div className="flex space-x-4 mb-4">
        <button
          className={`bg-muted text-foreground rounded-md px-4 py-2 ${difficulty === 'facil' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => setDifficulty('facil')}
        >
          Fácil
        </button>
        <button
          className={`bg-muted text-foreground rounded-md px-4 py-2 ${difficulty === 'medio' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => setDifficulty('medio')}
        >
          Medio
        </button>
        <button
          className={`bg-muted text-foreground rounded-md px-4 py-2 ${difficulty === 'dificil' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => setDifficulty('dificil')}
        >
          Difícil
        </button>
      </div>
      <CountingObjects difficulty={difficulty}/>
      <RestarComponent difficulty={difficulty}/>
    </main>
  );
}


