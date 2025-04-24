'use client';

import { useState } from 'react';

interface Props {
  difficulty: string;
  num1: number;
  num2: number;
}

const MultiplicarComponent = ({ difficulty, num1, num2 }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

  const checkMultiplication = (guess: number) => {
    const correctAnswer = num1 * num2;
    if (guess === correctAnswer) {
      setResult(correctAnswer);
      setFeedback('¡Correcto! ¡Bien hecho!');
    } else {
      setResult(null);
      setFeedback(`Incorrecto. Intenta de nuevo.`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg text-muted-foreground mb-4">
        ¿Cuánto es {num1} x {num2}?
      </p>
      <input
        type="number"
        className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
        placeholder="Escribe tu respuesta"
        onChange={(e) => {
          const guess = parseFloat(e.target.value);
          if (!isNaN(guess)) {
            checkMultiplication(guess);
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
    </div>
  );
};

export default MultiplicarComponent;
