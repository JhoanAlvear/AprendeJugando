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
      <CountingObjects />
      <RestarComponent difficulty={difficulty}/>
    </main>
  );
}

