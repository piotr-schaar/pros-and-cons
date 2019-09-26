import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState({
    subject: 'Buy a cat',
    isSubSelected: false,
    pros: [
      {
        title: 'Lorem ipsum dolor sit.',
        value: 3,
      },
      {
        title: 'test test test test.',
        value: 2,
      },
      {
        title: 'nic nic nic nic nic.',
        value: 1,
      },
    ],
    cons: [
      {
        title: '111111111111111111111',
        value: 6,
      },
      {
        title: '2222222222222222222',
        value: 1,
      },
      {
        title: '33333333333333333333',
        value: 2,
      },
    ],
  });

  return <AppContext.Provider value={[store, setStore]}>{children}</AppContext.Provider>;
};
