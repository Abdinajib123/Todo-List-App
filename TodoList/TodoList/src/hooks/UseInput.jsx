import { useState, useCallback } from 'react';

 function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange];
}

export default useInput;