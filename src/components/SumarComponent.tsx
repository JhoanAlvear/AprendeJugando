'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"

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

  const checkSum = (guess: number) => {
    const correctAnswer = num1 + num2;
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
              onChange={(e) => {
                const guess = parseFloat(e.target.value);
                if (!isNaN(guess)) {
                  checkSum(guess);
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

export default SumarComponent;
