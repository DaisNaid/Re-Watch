import Image from 'next/image';
import { useContext, useEffect } from 'react';
import dark from '../../constants/DarkMode';
import SideBar from '../../components/SideBar/index';
import icons from '../../utils/icons/index';
import { UserContext } from '../../pages/_app';
import FeaturedCard from '../FeaturedCard';
import featuredCard from '../../constants/FeaturedCard';
import series from '../../assets/data';
import IsInViewport from '../../hooks/useIsInViewport';
import civil from '../../assets/images/civil.jpeg';

const image = series[0].image;
const image2 = series[1].image;
const image3 = series[2].image;

const getElement = (ids) => {
  return ids.map((id) => ({[id]: document.getElementById(id)})
)};

export default function DarkMode() {
  const {showMenu, setShowMenu, setIsDarkMode, dominantColor} = useContext(UserContext);

  useEffect(() => {
    const elements = getElement([
      'modeToggle', 'content', 'featured', 'gallery', 'slogan', 'header'
    ]);
    console.log(elements);
    elements[0].modeToggle.addEventListener('click', () => {
      let userMode = JSON.parse(localStorage.getItem('darkmode'));
      userMode = false;
      JSON.stringify(localStorage.setItem('darkmode', userMode));
    })
    const motion = async () => {
      window.addEventListener('scroll', function () {
        let value = window.scrollY;
        const elementHeight = elements[2].featured.scrollHeight;
        let opacity = ((1 - (elementHeight - value) / elementHeight) * 1.8) + 0.2;
        const cardIsInViewport = IsInViewport(featured);
        if (!cardIsInViewport) {
          elements[1].content.className = dark.contentBg + ' galleryDark';
          elements[4].slogan.className = dark.sloganInMotion;
          elements[5].header.className = dark.headerInMotion;
        } else {
          elements[3].gallery.style.opacity = opacity;
          elements[1].content.className = dark.contentBg;
          elements[4].slogan.className = dark.slogan;
          elements[5].header.className = dark.header;
        }
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
      <header id='header' className={dark.header}>
        <span id='menu' className='absolute top-5 left-5 text-lg' onClick={() => setShowMenu(true)}>
          {icons.menu}
        </span>
        <h1 className={dark.title}>
          Re-Watch
        </h1>
        <span id='modeToggle' className={dark.mode} onClick={() => setIsDarkMode(false)}>{
          icons.daylight
        }</span>
      </header>
      <main id='content' className={dark.contentBg}>
        <p id='slogan' className={dark.slogan}>
          Never miss a likely favorite!
        </p>
        <FeaturedCard
          id={'featured'}
          containerStyle={featuredCard.containerDark} 
          imageStyle={featuredCard.imageDark}
          previewStyle={featuredCard.previewDark} 
          myListStyle={featuredCard.myListDark}
        />
        {showMenu ? <SideBar /> : <></>}
        <div id='gallery' className='opacity-20 ml-2.5'>
          <section className='grid grid-flow-row gap-2 my-8'>
              <span className='text-lg font-medium px-1'>Trending</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-4 snap-x'>
                <Image alt='Image' src={image2} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image3} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={civil} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 my-8'>
              <span className='text-lg font-medium px-1'>Can&apos;t Miss</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-4 snap-x'>
                <Image alt='Image' src={civil} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image2} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image3} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 my-8'>
              <span className='text-lg font-medium px-1'>Old School</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-4 snap-x'>
                <Image alt='Image' src={image3} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={civil} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image2} className='min-w-[35vw] min-h-full snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 my-8'>
              <span className='text-lg font-medium px-1'>FOMO</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-4 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>   
              </div>
          </section>
          <section className='grid grid-flow-row gap-2 my-8'>
              <span className='text-lg font-medium px-1'>Upcoming</span>
              <div className='grid grid-flow-col overflow-x-scroll scroll-smooth gap-4 snap-x'>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>
                <Image alt='Image' src={image} className='min-w-[35vw] snap-end rounded-lg'/>   
              </div>
          </section>
        </div>
      </main>
      <footer className='font-bold text-white text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>
  );
}
