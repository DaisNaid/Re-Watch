import { useContext } from 'react';
import SideBar from '../SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import light from '../../constants/LightMode';

//Add switch to Dark Mode

export default function LightMode() {
  const {showMenu, setShowMenu, setIsDarkMode} = useContext(UserContext);

  return (
    <div className={light.main_bg}>
      <header className='bg-lightanime'>
        <h1 className='text-center font-bold text-3xl text-zinc shadow-md py-4'>
          Re-Watch
        </h1>
        <span className='absolute top-5 right-5 text-xl opacity-75' onClick={() => setIsDarkMode(true)}>{icons.moonlight}</span>
      </header>
      <main className='min-h-[85vh]'>
        <p className={light.motto}>
          Never miss a likely favorite!
        </p>   
        <span id='menu' className='absolute top-5 left-5 text-xl' onClick={() => setShowMenu(true)}>
          {icons.menu}
        </span>
        {showMenu ? <SideBar /> : <></>}
      </main>
      <footer className='font-bold text-lightanime text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
