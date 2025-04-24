'use client';

import DividirComponent from '@/components/DividirComponent';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from 'react';

export default function DividirPage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'facil';
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(2);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Ajustar los números según la dificultad
    switch (difficulty) {
      case 'facil':
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 5) + 1);
        break;
      case 'medio':
        setNum1(Math.floor(Math.random() * 20) + 10);
        setNum2(Math.floor(Math.random() * 10) + 2);
        break;
      case 'dificil':
        setNum1(Math.floor(Math.random() * 50) + 20);
        setNum2(Math.floor(Math.random() * 15) + 5);
        break;
      default:
        setNum1(10);
        setNum2(2);
    }
  }, [difficulty]);

  const handleCorrectAnswer = () => {
    setStreak(prevStreak => prevStreak + 1);
  };

  const handleIncorrectAnswer = () => {
    setStreak(0);
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Dividir
      </h1>
      <p className="text-xl font-semibold mb-4 text-muted-foreground">
        Racha: {streak}
      </p>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center">
            <DividirComponent difficulty={difficulty} num1={num1} num2={num2} onCorrectAnswer={handleCorrectAnswer} onIncorrectAnswer={handleIncorrectAnswer}/>
          </CardContent>
        </Card>
    </main>
  );
}
