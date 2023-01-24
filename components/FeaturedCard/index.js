import Image from 'next/image';
import series from '../../assets/data';
import icons from '../../utils/icons';
import { useContext, useEffect } from 'react';
import { average } from 'color.js';
import { UserContext } from '../../pages/_app';

export default function FeaturedCard ({id, containerStyle, imageStyle, previewStyle, myListStyle}) {
    const { setDominantColor } = useContext(UserContext);
    const featuredImage = series[0].image;

    useEffect(() => {
        const setBG = async() => {
            if (typeof document === 'object') {
                const color = await average(featuredImage, {format: 'hex'});
                setDominantColor(color);
            }
        }
        setBG();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [featuredImage])

    return(<section id={id} className={containerStyle}>
        <div className={imageStyle}>
            <Image alt="Alchemy of Souls" src={featuredImage} className='rounded-xl' />
        </div>
        <div className='flex flex-row gap-2 py-2'>
            <div className={previewStyle}>
                <span className='py-1 pl-2 text-xl text-center'>{icons.play}</span>
                <span className='py-2 pr-2 font-medium'>Preview</span>
            </div>
            <div className={myListStyle}>
                <span className='py-2 pl-2'>{icons.add}</span>
                <span className='py-2 pr-2 font-medium'>My List</span>
            </div>
        </div>
    </section>)
}
