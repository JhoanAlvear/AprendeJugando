'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"

interface Props {
  difficulty: string;
  num1: number;
  num2: number;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
}

const DividirComponent = ({ difficulty, num1, num2, onCorrectAnswer, onIncorrectAnswer }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const checkDivision = (guess: number) => {
    if (num2 === 0) {
      setFeedback('No se puede dividir por cero.');
      onIncorrectAnswer();
      return;
    }

    const correctAnswer = num1 / num2;
    if (guess === correctAnswer) {
      setResult(correctAnswer);
      setFeedback('¡Correcto! ¡Bien hecho!');
      onCorrectAnswer();
    } else {
      setResult(null);
      setFeedback(`Incorrecto. Intenta de nuevo.`);
      onIncorrectAnswer();
    }
  };

  return (
    <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center">
            <p className="text-lg text-muted-foreground mb-4">
              ¿Cuánto es {num1} ÷ {num2}?
            </p>
            <input
              type="number"
              className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
              placeholder="Escribe tu respuesta"
              onChange={(e) => {
                const guess = parseFloat(e.target.value);
                if (!isNaN(guess)) {
                  checkDivision(guess);
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

export default DividirComponent;
