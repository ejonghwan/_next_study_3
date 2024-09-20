"use client"

import React, { useState, createContext } from 'react'


export const TabContext = createContext({
   tab: 'rec',
   setTab: (value: 'rec' | 'fol'): void => {console.log(value)},
});

type Props = { children: React.ReactNode }


const TabProvider = ({ children }: Props) => {

   const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>
  )
}

export default TabProvider