import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';

export default function SideBar() {
    
    const {setShowMenu} = useContext(UserContext);

  return (
    <div className='fixed top-0 left-0 h-screen w-60 glass'>
    <span className='absolute top-5 left-5 text-xl' onClick={() =>setShowMenu(false)}>
        {icons.close}
    </span>
      <ul className='pt-32 mx-12'>
        <li>
          <Link href='/' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/all' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>All</p>
          </Link>
        </li>
        <li>
          <Link href='/music' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Music Libray</p>
          </Link>
        </li>
        <li>
          <Link href='/wallpaper' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Wallpapers</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
