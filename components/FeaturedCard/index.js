import Image from 'next/image';
import series from '../../assets/data';
import featuredCard from '../../constants/FeaturedCard';
import icons from '../../utils/icons';

export default function FeaturedCard () {
    return(<div className='my-4 px-4 absolute left-[4rem]'>
        <div className='border-2 border-lightanime rounded-[0.95rem]'>
            <Image alt="Alchemy of Souls" src={series[0].image} className='rounded-xl h-[23.5rem] w-60' />
        </div>
        <div className='flex flex-row gap-4 py-2'>
            <div className={featuredCard.previewLight}>
                <span className='py-2 pl-2'>{icons.play}</span>
                <span className='py-2 pr-2'>Preview</span>
            </div>
            <div className={featuredCard.myListLight}>
                <span className='py-2 pl-2'>{icons.add}</span>
                <span className='py-2 pr-2'>My List</span>
            </div>
        </div>
    </div>)
}