import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import { Ctx } from '../utils/types/contextTypes';
import useGlobalState from '../utils/globalStates/index';

export const UserContext = React.createContext<Ctx | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const globalStates = useGlobalState();

  return (
  <UserContext.Provider value={ globalStates }>
    <Component {...pageProps} />
  </UserContext.Provider>
)}
