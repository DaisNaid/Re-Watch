import { useContext } from 'react';
import Image from 'next/image';
import dark from '../../constants/DarkMode';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';
import wv from '../../assets/images/wv.jpg';
import wv2 from '../../assets/images/wv2.jpg';
import seriesPage from '../../constants/SeriesPage';

// Bg Image - 1920 x 1080 || 3840 x 2160

export default function SeriesPage () {
    const {showMenu, setShowMenu, setIsDarkMode, dominantColor} = useContext(UserContext);

    const toggleTruncate = ({ target }) => {
        if (target.className === 'break-words') {
            target.className = 'truncate'
        } else {
            target.className = 'break-words'
        }
    }

    return (<div>
        <header id='header' className=''>
        <span id='menu' className='absolute top-5 left-5 text-2xl text-zinc'>
          {icons.back}
        </span>
      </header>
      <div className='w-full'>
        <Image alt='BG-Image' src={wv2} className={seriesPage.bgImage}/>
      </div>
      <main className={seriesPage.content}>
        <div className='flex flex-row gap-3 items-center sticky top-0 backdrop-blur-md'>
            <Image alt='Series' src={wv} className={seriesPage.image}/>
            <div className='flex flex-col gap-1'>
                <span className='text-xl'>WandaVision</span>
                <span className='text-sm'>Aired</span>
            </div>
            <span className='ml-6 text-3xl text-marvelLight'>{icons.added}</span>
        </div>
        <section className='truncate' onClick={(e) => toggleTruncate(e)}>
            Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.
            evcgvbjhgfdxcv benmdkfjdhgvdbnksoieudgsbzxnmkdkrhresbdnzxmkhgbewdsnmkwehgbdsnzxkdhgbendsmzkshwbedsnmzckhbndscxkhsgrbnsdmcxkhgrbndsmcxkhrbdnsmckhgwbndsmczkdhbwdsncmzkdshwbdsncmzkdshwbdnsckiugbdnsmckfurhgbsdnczkisfurhbfsnczkifurhfsnckiwreuhfsndkdiwruehfsnjkadiwruhfwsdakdiwruhfs
        </section>
      </main>
      <footer className='font-bold text-white text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>)
}