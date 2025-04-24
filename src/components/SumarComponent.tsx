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
 

 const SumarComponent = ({ difficulty, num1, num2, onCorrectAnswer, onIncorrectAnswer }: Props) => {
  const [result, setResult] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [guess, setGuess] = useState('');
  const [countingObjects1, setCountingObjects1] = useState<string[]>([]);
  const [countingObjects2, setCountingObjects2] = useState<string[]>([]);
 

  useEffect(() => {
  if (difficulty === 'facil') {
  setCountingObjects1(Array.from({ length: num1 }, (_, i) => '🌻'));
  setCountingObjects2(Array.from({ length: num2 }, (_, i) => '🌻'));
  } else {
  setCountingObjects1([]);
  setCountingObjects2([]);
  }
  }, [difficulty, num1, num2]);
 

  const checkSum = () => {
  const correctAnswer = num1 + num2;
  if (parseFloat(guess) === correctAnswer) {
  setResult(correctAnswer);
  setFeedback('¡Correcto! ¡Bien hecho!');
  onCorrectAnswer();
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
  };
 

  return (
  <Card className="rounded-lg border-none bg-card text-card-foreground shadow-sm w-full max-w-md">
  <CardContent className="flex flex-col items-center">
  <p className="text-lg text-muted-foreground mb-4">
  ¿Cuánto es {num1} + {num2}?
  </p>
  {difficulty === 'facil' && (
  <div className="flex flex-col items-center space-y-2 mb-4">
  <div className="flex space-x-2">
  {countingObjects1.map((object, index) => (
  <span key={`obj1-${index}`} className="text-2xl">{object}</span>
  ))}
  </div>
  <span className="text-2xl">+</span>
  <div className="flex space-x-2">
  {countingObjects2.map((object, index) => (
  <span key={`obj2-${index}`} className="text-2xl">{object}</span>
  ))}
  </div>
  </div>
  )}
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
  <Button onClick={checkSum} className="mb-2">Enviar Respuesta</Button>
  <Button onClick={handleNewOperation}>Nueva Operación</Button>
  </CardContent>
  </Card>
  );
 };
 

 export default SumarComponent;
 

