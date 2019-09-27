import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState({
    subject: 'Buy a cat',
    isSubSelected: false,
    pros: [],
    cons: [],
    winner: ''
  });

  return <AppContext.Provider value={[store, setStore]}>{children}</AppContext.Provider>;
};
