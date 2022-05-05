import { useEffect, useState } from "react";
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(params: T[]) => {
  const [value, setValue] = useState(params);
  console.log(value);
  return {
    value,
    setValue,
    clear: "",
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    add: (item: T) => setValue([...value, item]),
  };
};
