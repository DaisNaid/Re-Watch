import ProgressBar from '../ProgressBar/index';
import Image from 'next/image';
import icons from '../../utils/icons';
import wv from '../../assets/images/wv.jpg';
import wv2 from '../../assets/images/wv2.jpg';
import seriesPage from '../../constants/SeriesPage';
import disney from '../../assets/images/disney.jpeg';
import netflix from '../../assets/images/netflix.png';
import hulu from '../../assets/images/hulu.jpeg';
import useProgress from '../../hooks/useProgress';

// Bg Image - 1920 x 1080 || 3840 x 2160

export default function SeriesPage () {
    const toggleTruncate = ({ target }) => {
        if (target.className === 'break-words') {
            target.className = 'truncate'
        } else {
            target.className = 'break-words'
        }
    }

    return (<div>
        <header id='header'>
            <span className='absolute top-5 left-5 text-2xl text-zinc'>
            {icons.back}
            </span>
            <span className='absolute top-5 right-5 text-xl text-gold'>
            {icons.rating}
            </span>
            <div className='w-full'>
                <Image alt='BG-Image' src={wv2} className={seriesPage.bgImage}/>
            </div>
      </header>
      <main className={seriesPage.content}>
        <div className='flex flex-row gap-3 items-center sticky top-0 backdrop-blur-md z-[1]'>
            <Image alt='Series' src={wv} className={seriesPage.image}/>
            <div className='flex flex-col gap-1'>
                <span className='text-xl font-semibold'>WandaVision</span>
                <span className='text-sm'>Aired</span>
            </div>
            <span className='ml-6 text-3xl text-marvelLight overflow-hidden'>{icons.added}</span>
        </div>
        <div className='mb-8 grid grid-flow-col gap-4 justify-center overflow-hidden'>
            <span className='bg-marvelLight px-2 rounded-lg'>Drama</span>
            <span className='bg-marvelLight px-2 rounded-lg'>Mystery</span>
            <span className='bg-marvelLight px-2 rounded-lg'>Romance</span>
            <span className='bg-marvelLight px-2 rounded-lg mr-2'>Sitcom</span>
        </div>
        <section className='truncate' onClick={(e) => toggleTruncate(e)}>
            Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.
            evcgvbjhgfdxcv benmdkfjdhgvdbnksoieudgsbzxnmkdkrhresbdnzxmkhgbewdsnmkwehgbdsnzxkdhgbendsmzkshwbedsnmzckhbndscxkhsgrbnsdmcxkhgrbndsmcxkhrbdnsmckhgwbndsmczkdhbwdsncmzkdshwbdsncmzkdshwbdnsckiugbdnsmckfurhgbsdnczkisfurhbfsnczkifurhfsnckiwreuhfsndkdiwruehfsnjkadiwruhfwsdakdiwruhfs
        </section>
        <section className='mt-8 overflow-hidden'>
            <span className='text-xl font-semibold'>Seasons</span>
            <div className='grid grid-flow-row gap-6 mt-4'>
                <div className='grid grid-flow-col gap-4'>
                    <span className='text-2xl text-marvelLight'>{icons.completed}</span>
                    <span>Season 1</span>
                    {/* Current ep / total ep * 100 -> round to nearest whole number */}
                    <ProgressBar completed={useProgress(8, 8)}/>
                    <div className='flex flex-row gap-2'>
                        <span>{icons.back}</span>
                        <span>8/8</span>
                        <span>{icons.forward}</span>
                    </div>
                </div>
                <div className='grid grid-flow-col gap-4'>
                    <span className={seriesPage.circle}></span>
                    <span>Season 2</span>
                    {/* Current ep / total ep * 100 -> round to nearest whole number */}
                    <ProgressBar completed={useProgress(3, 8)}/>
                    <div className='flex flex-row gap-2'>
                        <span>{icons.back}</span>
                        <span>3/8</span>
                        <span>{icons.forward}</span>
                    </div>
                </div>
                <div className='grid grid-flow-col gap-4'>
                    <span className={seriesPage.notCircle}></span>
                    <span>Season 3</span>
                    {/* Current ep / total ep * 100 -> round to nearest whole number */}
                    <ProgressBar completed={useProgress(0, 8)}/>
                    <div className='flex flex-row gap-2'>
                        <span>{icons.back}</span>
                        <span>0/8</span>
                        <span>{icons.forward}</span>
                    </div>
                </div>
            </div>
        </section>
        <section className='mt-8'>
            <span className='text-xl font-semibold'>Watch Options</span>
            <div className='grid grid-flow-rows gap-6 mt-4'>
                <div className='grid grid-cols-2 items-center'>
                    <Image alt='disney' src={disney} className='w-20'/>
                    <span className='absolute right-10 text-md'>Paid</span>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <Image alt='disney' src={netflix} className='w-20'/>
                    <span className='absolute right-10 text-md'>Paid</span>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <Image alt='disney' src={hulu} className='w-20'/>
                    <span className='absolute right-10 text-md'>Paid</span>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <Image alt='disney' src={netflix} className='w-20'/>
                    <span className='absolute right-10 text-md'>Paid</span>
                </div>
            </div>
        </section>
      </main>
      <footer className='mt-12 font-bold text-white text-center p-4'>
        &copy; 2022 Re-Watch
      </footer>
    </div>)
}