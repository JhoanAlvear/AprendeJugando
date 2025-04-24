'use client';

import { useState, useEffect } from 'react';

interface Props {
  difficulty: string;
}

const words = ['manzana', 'casa', 'sol', 'luna', 'perro'];

const LeerComponent = ({ difficulty }: Props) => {
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
      // Move to the next word or loop back to the start
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
      setUserInput(''); // Clear the input for the next word
    } else {
      setFeedback('Incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg text-muted-foreground mb-4">
        Escribe la palabra: {currentWord}
      </p>
      <input
        type="text"
        className="border border-input rounded-md px-3 py-2 text-base text-foreground mb-2"
        placeholder="Escribe la palabra aquí"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="bg-primary text-primary-foreground rounded-xl shadow-md p-3 flex items-center justify-center text-xl font-semibold hover:bg-primary/80 transition-colors mt-2"
        onClick={checkSpelling}
      >
        Comprobar
      </button>
      {feedback && (
        <p className="text-md font-medium mt-2">{feedback}</p>
      )}
    </div>
  );
};

export default LeerComponent;
