'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"

interface Props {
  difficulty: string;
  num1: number;
  num2: number;
}

const RestarComponent = ({ difficulty, num1, num2 }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
    const [countingObjects, setCountingObjects] = useState<string[]>([]);

    useEffect(() => {
        if (difficulty === 'facil') {
            const objects = Array(num1).fill('🍎'); // Use a simple apple emoji
            setCountingObjects(objects);
        } else {
            setCountingObjects([]);
        }
    }, [difficulty, num1]);

  const checkSubtraction = (guess: number) => {
    const correctAnswer = num1 - num2;
    if (guess === correctAnswer) {
      setResult(correctAnswer);
      setFeedback('¡Correcto! ¡Bien hecho!');
    } else {
      setResult(null);
      setFeedback(`Incorrecto. Intenta de nuevo.`);
    }
  };

  return (
    <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center">
            <p className="text-lg text-muted-foreground mb-4">
              ¿Cuánto es {num1} - {num2}?
            </p>
            {difficulty === 'facil' && (
                <div className="flex space-x-2 mb-4">
                    {countingObjects.map((object, index) => (
                        <span key={index} className="text-2xl">{object}</span>
                    ))}
                </div>
            )}
            <input
              type="number"
              className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
              placeholder="Escribe tu respuesta"
              onChange={(e) => {
                const guess = parseFloat(e.target.value);
                if (!isNaN(guess)) {
                  checkSubtraction(guess);
                } else {
                  setResult(null);
                  setFeedback('');
                }
              }}
            />
            {result !== null && (
              <p className="text-xl font-semibold text-primary-foreground mt-2">
                Resultado: {result}
              </p>
            )}
            {feedback && (
              <p className="text-md font-medium mt-2">{feedback}</p>
            )}
        </CardContent>
      </Card>
  );
};

export default RestarComponent;
