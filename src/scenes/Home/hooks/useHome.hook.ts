import { useState } from 'react';

const useHome = () => {
  const [count, setCount] = useState<number>(0);

  return {
    count,
    setCount,
  };
};

export default useHome;
