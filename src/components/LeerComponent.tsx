'use client';
 

 import { useState, useEffect } from 'react';
 import { Card, CardContent } from "@/components/ui/card"
 import { Button } from "@/components/ui/button"
 

 interface Props {
  difficulty: string;
  onCorrectAnswer: () => void;
  onIncorrectAnswer: () => void;
 }
 

 const words = ['manzana', 'casa', 'sol', 'luna', 'perro'];
 

 const LeerComponent = ({ difficulty, onCorrectAnswer, onIncorrectAnswer }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [wordList, setWordList] = useState(words);
 

  useEffect(() => {
  // Ajustar la lista de palabras según la dificultad
  switch (difficulty) {
  case 'facil':
  setWordList(['sol', 'luna', 'casa']);
  break;
  case 'medio':
  setWordList(['manzana', 'perro', 'gato']);
  break;
  case 'dificil':
  setWordList(['extraordinario', 'paralelepipedo', 'esternocleidomastoideo']);
  break;
  default:
  setWordList(words);
  }
  }, [difficulty]);
 

  const currentWord = wordList[currentWordIndex];
 

  const checkSpelling = () => {
  if (userInput.toLowerCase() === currentWord) {
  setFeedback('¡Correcto! ¡Bien hecho!');
  onCorrectAnswer();
  } else {
  setFeedback('Incorrecto. Intenta de nuevo.');
  onIncorrectAnswer();
  }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserInput(e.target.value);
  setFeedback('');
  };
 

  const handleNewOperation = () => {
  if (userInput.toLowerCase() === currentWord) {
  setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
  setUserInput(''); // Clear the input for the next word
  }
  checkSpelling();
  };
 

  return (
  <Card className="rounded-lg border-none bg-card text-card-foreground shadow-sm w-full max-w-md">
  <CardContent className="flex flex-col items-center">
  <p className="text-lg text-muted-foreground mb-4">
  Escribe la palabra: {currentWord}
  </p>
  <input
  type="text"
  className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
  placeholder="Escribe la palabra aquí"
  value={userInput}
  onChange={handleInputChange}
  />
  {feedback && (
  <p className="text-md font-medium mt-2">{feedback}</p>
  )}
  <Button
  onClick={handleNewOperation}
  >
  Enviar Respuesta
  </Button>
  
  </CardContent>
  </Card>
  );
 };
 

 export default LeerComponent;
 

