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
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [currentNum1, setCurrentNum1] = useState(num1);
  const [currentNum2, setCurrentNum2] = useState(num2);
 

  useEffect(() => {
  if (difficulty === 'facil') {
  setCountingObjects1(Array.from({ length: currentNum1 }, (_, i) => '🌻'));
  setCountingObjects2(Array.from({ length: currentNum2 }, (_, i) => '🌻'));
  } else {
  setCountingObjects1([]);
  setCountingObjects2([]);
  }
  }, [difficulty, currentNum1, currentNum2]);
 

  const checkSum = () => {
  const correctAnswer = currentNum1 + currentNum2;
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
 

    if (difficulty === 'facil') {
  setCurrentNum1(Math.floor(Math.random() * 5) + 1);
        setCurrentNum2(Math.floor(Math.random() * 5) + 1);
    } else {
  setCurrentNum1(Math.floor(Math.random() * 15) + 10);
        setCurrentNum2(Math.floor(Math.random() * 15) + 10);
    }
 

  setShowSubmitButton(true);
  };
 

 

   return (
 

   <CardContent className="flex flex-col items-center">
   <p className="text-lg text-muted-foreground mb-4">
   ¿Cuánto es {currentNum1} + {currentNum2}?
   </p>
   {difficulty === 'facil' && (
   <div className="flex items-center space-x-2 mb-4">
   <div className="flex space-x-1">
   {countingObjects1.map((object, index) => (
   <span key={`obj1-${index}`} className="text-2xl">{object}</span>
   ))}
   </div>
   <span>+</span>
   <div className="flex space-x-1">
   {countingObjects2.map((object, index) => (
   <span key={`obj2-${index}`} className="text-2xl">{object}</span>
   ))}
   </div>
   </div>
   )}
   <input
   type="number"
   className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
   placeholder="
   Escribe tu respuesta"
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
   {showSubmitButton && <Button onClick={checkSum} className="mb-2">Enviar Respuesta</Button>}
   <Button onClick={handleNewOperation}>Nueva Operación</Button>
   </CardContent>
 

   );
  };
 

 export default SumarComponent;
 

