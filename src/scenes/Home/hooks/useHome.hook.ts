import { useState } from 'react';

const useHome = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(prevState => prevState + 1);
  };

  const decreaseCount = () => {
    setCount(prevState => prevState - 1);
  };

  return {
    count,
    increaseCount,
    decreaseCount,
  };
};

export default useHome;
