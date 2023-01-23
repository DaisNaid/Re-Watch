import { useContext, useEffect } from 'react';
import SideBar from '../SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import light from '../../constants/LightMode';
import FeaturedCard from '../FeaturedCard/index';
import featuredCard from '../../constants/FeaturedCard';

export default function LightMode() {
  const { showMenu, setShowMenu, setIsDarkMode, dominantColor } = useContext(UserContext);

  useEffect(() => {
    let mode = document.getElementById('modeToggle');
    let main_bg = document.getElementById('main_bg');
    let motto = document.getElementById('motto');

    main_bg.style.setProperty('--dominantColor', dominantColor);
    mode.addEventListener('click', () => {
      JSON.stringify(localStorage.setItem('darkmode', true));
    })

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      if (value > 590) {
        motto.className = light.fixed_motto;
      } else{
        motto.className = light.motto;
      }
    });
  }, [dominantColor])

  return (
    <div id='main_bg' className={light.main_bg}>
      <header className='bg-lightanime'>
        <h1 className='text-center font-bold text-3xl text-zinc shadow-md py-4'>
          Re-Watch
        </h1>
        <span id='modeToggle' className='absolute top-5 right-5 text-xl opacity-75 text-black dark:text-white' onClick={() => setIsDarkMode(true)}>{icons.moonlight}</span>
      </header>
      <main className='min-h-screen'>
        <FeaturedCard 
          containerStyle={featuredCard.containerLight}
          imageStyle={featuredCard.imageLight}
          previewStyle={featuredCard.previewLight} 
          myListStyle={featuredCard.myListLight}
        />
        <p id='motto' className={light.motto}>
          Never miss a likely favorite!
        </p>
        <span id='menu' className='absolute top-5 left-5 text-xl' onClick={() => setShowMenu(true)}>
          {icons.menu}
        </span>
        {showMenu ? <SideBar /> : <></>}
        <div className='text-black text-xl text-center mt-12'>Gallery Coming Soon...</div>
      </main>
      <footer className='font-bold text-lightanime text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
