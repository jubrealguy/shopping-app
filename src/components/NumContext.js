import React, { createContext, useState } from 'react';

const NumContext = createContext();

export const NumProvider = ({ children }) => {
  const [num, setNum] = useState(0);

  return (
    <NumContext.Provider value={{ num, setNum }}>
      {children}
    </NumContext.Provider>
  );
};

export default NumContext;