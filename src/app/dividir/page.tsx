import DividirComponent from '@/components/DividirComponent';
import CountingObjects from '@/components/CountingObjects';
import { useState } from 'react';

export default function DividirPage() {
  const [difficulty, setDifficulty] = useState('facil'); // Fácil, Medio, Difícil

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Dividir
      </h1>
      <CountingObjects />
      <DividirComponent difficulty={difficulty} />
    </main>
  );
}

