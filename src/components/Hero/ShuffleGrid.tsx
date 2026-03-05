import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image from "../../assets/heroChef23.png";




const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: image,
  },
  {
    id: 2,
    src: image,
  },
  {
    id: 3,
    src: image,
  },
  {
    id: 4,
    src: image,
  },
  {
    id: 5,
    src: image,
  },
  {
    id: 6,
    src: image,
  },
  {
    id: 7,
    src: image,
  },
  {
    id: 8,
    src: image,
  },
  {
    id: 9,
    src: image,
  },
  {
    id: 10,
    src: image,
  },
  {
    id: 11,
    src: image,
  },
  {
    id: 12,
    src: image,
  },
  {
    id: 13,
    src: image,
  },
  {
    id: 14,
    src: image,
  },
  {
    id: 15,
    src: image,
  },
  {
    id: 16,
    src: image,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

export const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

