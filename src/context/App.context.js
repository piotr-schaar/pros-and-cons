import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState({
    subject: '',
    isSubSelected: false,
    pros: [],
    cons: [],
  });
 
  useEffect(() => {
    setStore({
      ...store, isSubSelected: store.subject.length > 1 
    })

  }, [store.subject]);

  return <AppContext.Provider value={[store, setStore]}>{children}</AppContext.Provider>;
};
