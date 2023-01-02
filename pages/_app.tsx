import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { useState } from 'react';
import { Ctx } from '../utils/types/contextTypes';

export const UserContext = React.createContext<Ctx | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
  <UserContext.Provider value={{showMenu, setShowMenu, isDarkMode, setIsDarkMode}}>
    <Component {...pageProps} />
  </UserContext.Provider>
)}
