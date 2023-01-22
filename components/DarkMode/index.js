import Image from 'next/image';
import { useContext, useEffect } from 'react';
import stars from '../../assets/images/stars.png';
import moon from '../../assets/images/moon.png';
import dark from '../../constants/DarkMode';
import SideBar from '../../components/SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import FeaturedCard from '../FeaturedCard';
import featuredCard from '../../constants/FeaturedCard';

export default function DarkMode() {
  const {showMenu, setShowMenu, isDarkMode, setIsDarkMode, dominantColor} = useContext(UserContext);

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
    const setColor = () => {
      let main_bg = document.getElementById('content');
      main_bg.style.setProperty('--dominantColor', dominantColor);
    }
    motion();
    setColor();
  }, [dominantColor]);

  return (
    <div id='main_bg' className={dark.main_bg}>
      <header className='overflow-hidden'>
        <h1 className='text-center font-bold text-3xl text-zinc shadow-md py-4'>
          Re-Watch
        </h1>
        <span className='absolute top-5 right-5 text-xl opacity-75' onClick={() => setIsDarkMode(false)}>{icons.daylight}</span>
        <p className='text-center text-zinc pt-6 animate-glow_text'>
          Never miss a likely favorite!
        </p>
        <section className='relative max-w-full max-h-full p-20'>
          <Image id='stars' alt='stars' src={stars} className={dark.stars}/>
          <Image
            id='star'
            alt='star'
            src={moon}
            className={dark.star}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        </section>
      </header>
      <main id='content' className={dark.contentBg}>
        <FeaturedCard 
          containerStyle={featuredCard.containerDark} 
          imageStyle={featuredCard.imageDark}
          previewStyle={featuredCard.previewDark} 
          myListStyle={featuredCard.myListDark}
        />
        <span id='menu' className='fixed top-5 left-5 text-xl' onClick={() => setShowMenu(true)}>
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
