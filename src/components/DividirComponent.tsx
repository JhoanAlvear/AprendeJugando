'use client';

import { useState } from 'react';

const DividirComponent = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(2);
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');

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
