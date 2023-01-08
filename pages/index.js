import { useContext } from 'react';
import DarkMode from '../components/DarkMode/index';
import LightMode from '../components/LightMode/index';
import { UserContext } from './_app';

export default function Home() {
  // type error because Darkmode and Lightmode in tags are being recognized as types
  const { isDarkMode } = useContext(UserContext);

 return isDarkMode ? <DarkMode /> : <LightMode />
}
