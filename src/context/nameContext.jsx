import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const NameStateProvider = ({ children }) => {
  const [name, setName] = useState('Circle Name');

  const updateName = useCallback(
    (str) => {
      setName(str);
    },
    [setName]
  );

  const memoizedValue = useMemo(
    () => ({ name, updateName }),
    [name, updateName]
  );

  return (
    <LocalStateProvider value={memoizedValue}>{children}</LocalStateProvider>
  );
};

const useName = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { NameStateProvider, useName };
