import { useContext, useEffect } from 'react';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import light from '../../constants/LightMode';

export default function LightMode404() {
  const { setIsDarkMode } = useContext(UserContext);

  return (
    <div id='main_bg' className='bg-white'>
      <header className='bg-lightanime'>
        <h1 className='text-center font-bold text-3xl text-zinc shadow-md py-4'>
          Re-Watch
        </h1>
        <span id='modeToggle' className='absolute top-5 right-5 text-xl text-black dark:text-white' onClick={() => setIsDarkMode(true)}>{icons.moonlight}</span>
      </header>
      <main className='min-h-screen items-center text-center'>
        <p id='motto' className='mt-z text-xl text-black font-semibold p-4 border-y-2 border-y-lightanime'>
          Light Mode under reconstruction...
        </p>
        <p className='text-lg text-black pt-12 font-semibold'>Please switch to Dark Mode</p>
      </main>
      <footer className='font-bold text-lightanime text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
