import { createContext, useContext, useMemo, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const ChipStateProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [chips, setChips] = useState([1, 1, 1, 1, 0, 0, 2, 2]);

  const memoizedValue = useMemo(() => ({ chips }), [chips]);

  return (
    <LocalStateProvider value={memoizedValue}>{children}</LocalStateProvider>
  );
};

const useChips = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { ChipStateProvider, useChips };
