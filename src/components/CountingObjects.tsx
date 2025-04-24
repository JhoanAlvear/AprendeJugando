'use client';

import { useState, useEffect } from 'react';

const CountingObjects = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Generar objetos aleatorios al montar el componente
    generateObjects();
  }, []);

  const generateObjects = () => {
    const numberOfObjects = Math.floor(Math.random() * 5) + 3; // Entre 3 y 7 objetos
    const newObjects = Array.from({ length: numberOfObjects }, (_, index) => ({
      id: index,
      type: getRandomObjectType(),
      position: getRandomPosition(),
    }));
    setObjects(newObjects);
  };

  const getRandomObjectType = () => {
    const objectTypes = ['🍎', '🍌', '🍇', '🍉', '⭐', '🍄'];
    return objectTypes[Math.floor(Math.random() * objectTypes.length)];
  };

  const getRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * 80) + 10, // Posición horizontal aleatoria entre 10% y 90%
      y: Math.floor(Math.random() * 70) + 15, // Posición vertical aleatoria entre 15% y 85%
    };
  };

  return (
    <div className="relative w-full h-48 flex justify-center items-center">
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
  );
};

export default CountingObjects;
