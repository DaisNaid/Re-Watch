import { useContext } from 'react';
import DarkMode from '../components/DarkMode/index';
import LightMode from '../components/LightMode/index';
import { UserContext } from './_app';

export default function Home() {

  const isDarkMode = useContext(UserContext);

  return isDarkMode ? <DarkMode /> : <LightMode />
}
