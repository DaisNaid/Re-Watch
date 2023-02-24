import { useContext } from 'react';
import DarkMode from '../components/DarkMode/index';
import LightMode404 from '../components/SeriesPage/index';
import { UserContext } from './_app';
import { useMediaQuery } from 'react-responsive';

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

 return isDarkMode ? <DarkMode /> : <LightMode404 />
}
