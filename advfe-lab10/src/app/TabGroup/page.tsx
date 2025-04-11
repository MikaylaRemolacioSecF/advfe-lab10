'use client';
import React, { useState, createContext, useContext } from 'react';

const TabContext = createContext<{ selectedIndex: number, setSelectedIndex: React.Dispatch<React.SetStateAction<number>> }>({ selectedIndex: 0, setSelectedIndex: () => {} });

export function TabGroup({ children }: { children: React.ReactNode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
}

export function Tab({ index, children }: { index: number, children: React.ReactNode }) {
  const { selectedIndex, setSelectedIndex } = useContext(TabContext);

  return (
    <button
      onClick={() => setSelectedIndex(index)}
      style={{
        fontWeight: selectedIndex === index ? 'bold' : 'normal',
        color: selectedIndex === index ? 'white' : 'black',
        marginRight: '10px',
        padding: '6px 12px',
        border: '1px solid black',
        background: selectedIndex === index ? 'purple' : 'pink',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export function TabPanel({ index, children }: { index: number, children: React.ReactNode }) {
  const { selectedIndex } = useContext(TabContext);
  return selectedIndex === index ? (
    <div>{children}</div>
  ) : null;
}
