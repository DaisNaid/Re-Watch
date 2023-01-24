import { useContext, useEffect } from 'react';
import SideBar from '../SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import light from '../../constants/LightMode';
import FeaturedCard from '../FeaturedCard/index';
import featuredCard from '../../constants/FeaturedCard';
import Image from 'next/image';
import series from '../../assets/data';

const image = series[0].image;

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
        motto.className = light.motto + ' sticky';
        main_bg.className = light.main_bg + ' galleryLight';
      } else{
        motto.className = light.motto;
        main_bg.className = light.main_bg;
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
        <div>
          <section className='grid grid-flow-row gap-2 mx-0.5 my-4'>
              <span className='text-xl font-medium text-black px-1'>Trending</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-2 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>    
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>     
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 mx-0.5 my-4'>
              <span className='text-xl font-medium text-black px-1'>Can&apos;t Miss</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-2 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>    
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>     
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 mx-0.5 my-4'>
              <span className='text-xl font-medium text-black px-1'>Old School</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-2 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>    
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>     
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 mx-0.5 my-4'>
              <span className='text-xl font-medium text-black px-1'>FOMO</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-2 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>    
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>     
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 mx-0.5 my-4'>
              <span className='text-xl font-medium text-black px-1'>Upcoming</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-2 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>    
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end'/>     
              </div>
          </section>
        </div>
      </main>
      <footer className='font-bold text-lightanime text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
