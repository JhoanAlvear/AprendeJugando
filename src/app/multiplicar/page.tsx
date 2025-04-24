'use client';

import MultiplicarComponent from '@/components/MultiplicarComponent';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from 'react';

export default function MultiplicarPage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'facil';
    const [num1, setNum1] = useState(5);
    const [num2, setNum2] = useState(3);

    useEffect(() => {
        // Ajustar los números según la dificultad
        switch (difficulty) {
            case 'facil':
                setNum1(Math.floor(Math.random() * 5) + 1);
                setNum2(Math.floor(Math.random() * 5) + 1);
                break;
            case 'medio':
                setNum1(Math.floor(Math.random() * 10) + 5);
                setNum2(Math.floor(Math.random() * 10) + 5);
                break;
            case 'dificil':
                setNum1(Math.floor(Math.random() * 15) + 10);
                setNum2(Math.floor(Math.random() * 15) + 10);
                break;
            default:
                setNum1(5);
                setNum2(3);
        }
    }, [difficulty]);


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Multiplicar
      </h1>
      <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center">
            <MultiplicarComponent difficulty={difficulty}  num1={num1} num2={num2}/>
          </CardContent>
        </Card>
    </main>
  );
}

