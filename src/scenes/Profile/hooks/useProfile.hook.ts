import { useState } from 'react';

const useProfile = () => {
  const [count, setCount] = useState<number>(0);

  return {
    count,
    setCount,
  };
};

export default useProfile;
