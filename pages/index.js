import { useContext } from 'react';
import DarkMode from '../components/DarkMode/index';
import LightMode from '../components/LightMode/index';
import { UserContext } from './_app';

export default function Home() {
  const { isDarkMode, setIsDarkMode } = useContext(UserContext);

  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark) => setIsDarkMode(isSystemDark)
  );

  // type error because Darkmode and Lightmode in tags are being recognized as types

 return isDarkMode ? <DarkMode /> : <LightMode />
}
