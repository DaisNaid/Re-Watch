import Image from 'next/image';
import series from '../../assets/data';
import icons from '../../utils/icons';

export default function FeaturedCard ({containerStyle, imageStyle, previewStyle, myListStyle}) {
    
    return(<div className={containerStyle}>
        <div className={imageStyle}>
            <Image alt="Alchemy of Souls" src={series[0].image} className='rounded-xl h-[23.5rem] w-60' />
        </div>
        <div className='flex flex-row gap-4 py-2'>
            <div className={previewStyle}>
                <span className='py-2 pl-2'>{icons.play}</span>
                <span className='py-2 pr-2'>Preview</span>
            </div>
            <div className={myListStyle}>
                <span className='py-2 pl-2'>{icons.add}</span>
                <span className='py-2 pr-2'>My List</span>
            </div>
        </div>
    </div>)
}
