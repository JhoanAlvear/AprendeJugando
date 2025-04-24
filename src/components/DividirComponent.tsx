'use client';

import { useState, useEffect } from 'react';

interface Props {
  difficulty: string;
}

const DividirComponent = ({ difficulty }: Props) => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(2);
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

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

  const checkDivision = (guess: number) => {
    if (num2 === 0) {
      setFeedback('No se puede dividir por cero.');
      return;
    }

    const correctAnswer = num1 / num2;
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
    </div>
  );
};

export default DividirComponent;
