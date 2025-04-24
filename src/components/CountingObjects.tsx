'use client';

import { useState, useEffect } from 'react';

interface Props {
  difficulty: string;
  operation: string;
}

const CountingObjects = ({ difficulty, operation }: Props) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [objects1, setObjects1] = useState([]);
  const [objects2, setObjects2] = useState([]);

  useEffect(() => {
    generateNumbers();
  }, [difficulty]);

  useEffect(() => {
    generateObjects();
  }, [num1, num2]);


  const generateNumbers = () => {
      if (operation === 'leer') {
        return;
      }
    let number1 = 0;
    let number2 = 0;

    if (difficulty === 'facil') {
      number1 = Math.floor(Math.random() * 5) + 1;
      number2 = Math.floor(Math.random() * 5) + 1;
    } else if (difficulty === 'medio') {
      number1 = Math.floor(Math.random() * 10) + 3;
      number2 = Math.floor(Math.random() * 10) + 3;
    } else {
      number1 = Math.floor(Math.random() * 15) + 5;
      number2 = Math.floor(Math.random() * 15) + 5;
    }

    setNum1(number1);
    setNum2(number2);
  };

  const generateObjects = () => {
      if (operation === 'leer') {
        return;
      }
    const newObjects1 = Array.from({ length: num1 }, (_, index) => ({
      id: index,
      type: getRandomObjectType(),
      position: getRandomPosition(index, num1),
    }));
    setObjects1(newObjects1);

    const newObjects2 = Array.from({ length: num2 }, (_, index) => ({
      id: index,
      type: getRandomObjectType(),
      position: getRandomPosition(index, num2, 50), // Offset the second group
    }));
    setObjects2(newObjects2);
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
            {objects1.map((object) => (
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
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex">
            {objects2.map((object) => (
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
            { operation === 'sumar' &&  <p className="text-lg text-muted-foreground"> {num1} + {num2}</p> }
            { operation === 'restar' &&  <p className="text-lg text-muted-foreground"> {num1} - {num2}</p> }
            { operation === 'multiplicar' &&  <p className="text-lg text-muted-foreground"> {num1} * {num2}</p> }
            { operation === 'dividir' &&  <p className="text-lg text-muted-foreground"> {num1} / {num2}</p> }
        </>
      ) : null}
    </div>
  );
};

export default CountingObjects;
