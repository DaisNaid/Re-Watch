import Image from 'next/image';
import { useContext, useEffect } from 'react';
import stars from '../../assets/images/stars.png';
import sun from '../../assets/images/sun.jpeg';
import light from '../../constants/LightMode';
import SideBar from '../SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';

export default function LightMode() {
  const {showMenu, setShowMenu, isDarkMode, setIsDarkMode} = useContext(UserContext);

  useEffect(() => {
    const motion = async () => {
      let stars = document.getElementById('stars');
      let star = document.getElementById('star');
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        star.style.top = value * 1.05 + 'px';
      });
    };
    motion();
  }, []);

  return (
    <div id='main-bg' className={light.main_bg}>
      <header className='p-4 overflow-hidden'>
        <h1 className='text-center font-bold text-3xl text-zinc shadow-md'>
          Re-Watch
        </h1>
        <p className='text-center text-zinc pt-6 animate-glow'>
          Never miss a likely favorite!
        </p>
        <section className='relative max-w-full max-h-full p-20'>
          <Image id='stars' alt='stars' src={stars} className={light.stars}/>
          <Image
            id='star'
            alt='star'
            src={sun}
            className={light.star}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        </section>
      </header>
      <main className='min-h-[80vh]'>
        <span id='menu' className='absolute top-5 left-5 text-xl' onClick={() => setShowMenu(true)}>
          {icons.menu}
        </span>
        {showMenu ? <SideBar /> : <></>}
      </main>
      <footer className='font-bold text-white text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
