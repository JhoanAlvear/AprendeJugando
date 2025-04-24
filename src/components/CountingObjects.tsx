'use client';

import { useState, useEffect } from 'react';

interface Props {
  difficulty: string;
  operation: string;
  num1: number;
  num2: number;
}

const CountingObjects = ({ difficulty, operation, num1, num2 }: Props) => {
  const [objects, setObjects] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    calculateResult();
  }, [num1, num2, operation]);

  useEffect(() => {
    generateObjects();
  }, [result]);

  const calculateResult = () => {
    let calculatedResult = 0;
    switch (operation) {
      case 'sumar':
        calculatedResult = num1 + num2;
        break;
      case 'restar':
        calculatedResult = num1 - num2;
        break;
      case 'multiplicar':
        calculatedResult = num1 * num2;
        break;
      case 'dividir':
        calculatedResult = num2 === 0 ? 0 : num1 / num2;
        break;
      default:
        calculatedResult = 0;
    }
    setResult(calculatedResult);
  };

  const generateObjects = () => {
    if (operation === 'leer') {
      return;
    }

    const newObjects = Array.from({ length: result }, (_, index) => ({
      id: index,
      type: getRandomObjectType(),
      position: getRandomPosition(index, result),
    }));
    setObjects(newObjects);
  };

  const getRandomObjectType = () => {
    const objectTypes = ['🍎', '🍌', '🍇', '🍉', '⭐', '🍄', '🌳', '🌻', '🍀'];
    return objectTypes[Math.floor(Math.random() * objectTypes.length)];
  };

  const getRandomPosition = (index: number, total: number, offsetX: number = 10) => {
    const spacing = 70 / total; // Adjust spacing based on the number of objects
    const startPosition = offsetX + (10 - (spacing * total) / 2); // Center the objects
    const x = startPosition + index * spacing;
    const y = Math.floor(Math.random() * 20) + 15; // Posición vertical aleatoria entre 15% y 35%
    return { x, y };
  };

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {operation !== 'leer' && difficulty === 'facil' ? (
        <>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex">
            {objects.map((object) => (
              <div
                key={object.id}
                className="absolute"
                style={{
                  top: `${object.position.y}%`,
                  left: `${object.position.x}%`,
                  fontSize: '2rem',
                }}
              >
                {object.type}
              </div>
            ))}
          </div>
          { operation === 'sumar' &&  <p className="text-lg text-muted-foreground"> {num1} + {num2} = {result}</p> }
          { operation === 'restar' &&  <p className="text-lg text-muted-foreground"> {num1} - {num2} = {result}</p> }
          { operation === 'multiplicar' &&  <p className="text-lg text-muted-foreground"> {num1} * {num2} = {result}</p> }
          { operation === 'dividir' &&  <p className="text-lg text-muted-foreground"> {num1} / {num2} = {result}</p> }
        </>
      ) : null}
    </div>
  );
};

export default CountingObjects;
