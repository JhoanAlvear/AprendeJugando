'use client';
 

 import { useState, useEffect } from 'react';
 import { Card, CardContent } from "@/components/ui/card"
 import { Button } from "@/components/ui/button"
 

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
  const [guess, setGuess] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(true);
 

  const checkDivision = () => {
  if (num2 === 0) {
  setFeedback('No se puede dividir por cero.');
  onIncorrectAnswer();
  return;
  }
 

  const correctAnswer = num1 / num2;
  if (parseFloat(guess) === correctAnswer) {
  setResult(correctAnswer);
  setFeedback('¡Correcto! ¡Bien hecho!');
  onCorrectAnswer();
  setShowSubmitButton(false);
  } else {
  setResult(null);
  setFeedback(`Incorrecto. Intenta de nuevo.`);
  onIncorrectAnswer();
  }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setGuess(e.target.value);
  setResult(null);
  setFeedback('');
  };
 

  const handleNewOperation = () => {
  setGuess('');
  setResult(null);
  setFeedback('');
  setShowSubmitButton(true);
  };
 

  return (
  <Card className="rounded-lg border-none bg-card text-card-foreground shadow-sm w-full max-w-md">
  <CardContent className="flex flex-col items-center">
  <p className="text-lg text-muted-foreground mb-4">
  ¿Cuánto es {num1} ÷ {num2}?
  </p>
  <input
  type="number"
  className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
  placeholder="Escribe tu respuesta"
  value={guess}
  onChange={handleInputChange}
  />
        {result !== null && (
          <p className="text-xl font-semibold text-primary-foreground mt-2">
            Resultado: {result}
          </p>
        )}
        {feedback && (
          <p className="text-md font-medium mt-2">{feedback}</p>
        )}
  {showSubmitButton && <Button onClick={checkDivision} className="mb-2">Enviar Respuesta</Button>}
  <Button onClick={handleNewOperation}>Nueva Operación</Button>
  </CardContent>
  </Card>
  );
 };
 

 export default DividirComponent;
 

