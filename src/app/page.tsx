'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [difficulty, setDifficulty] = useState('facil'); // Fácil, Medio, Difícil

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">
        Aprende Jugando
      </h1>

      <div className="flex space-x-4 mb-4">
        <button
          className={`rounded-md px-4 py-2 ${difficulty === 'facil' ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'}`}
          onClick={() => setDifficulty('facil')}
        >
          Fácil
        </button>
        <button
          className={`rounded-md px-4 py-2 ${difficulty === 'medio' ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'}`}
          onClick={() => setDifficulty('medio')}
        >
          Medio
        </button>
        <button
          className={`rounded-md px-4 py-2 ${difficulty === 'dificil' ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'}`}
          onClick={() => setDifficulty('dificil')}
        >
          Difícil
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Card className="bg-primary text-primary-foreground rounded-xl shadow-md hover:bg-primary/80 transition-colors">
            <CardContent className="p-6 flex items-center justify-center text-2xl font-semibold">
              <Link href={`/sumar?difficulty=${difficulty}`}>Sumar</Link>
            </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground rounded-xl shadow-md hover:bg-secondary/80 transition-colors">
            <CardContent className="p-6 flex items-center justify-center text-2xl font-semibold">
              <Link href={`/restar?difficulty=${difficulty}`}>Restar</Link>
            </CardContent>
        </Card>
        <Card className="bg-chart-2 text-primary-foreground rounded-xl shadow-md hover:bg-chart-2/80 transition-colors">
            <CardContent className="p-6 flex items-center justify-center text-2xl font-semibold">
              <Link href={`/multiplicar?difficulty=${difficulty}`}>Multiplicar</Link>
            </CardContent>
        </Card>
        <Card className="bg-chart-1 text-primary-foreground rounded-xl shadow-md hover:bg-chart-1/80 transition-colors">
            <CardContent className="p-6 flex items-center justify-center text-2xl font-semibold">
              <Link href={`/dividir?difficulty=${difficulty}`}>Dividir</Link>
            </CardContent>
        </Card>
        <Card className="bg-accent text-accent-foreground rounded-xl shadow-md hover:bg-accent/80 transition-colors">
            <CardContent className="p-6 flex items-center justify-center text-2xl font-semibold">
             <Link href={`/leer?difficulty=${difficulty}`}>Leer</Link>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
