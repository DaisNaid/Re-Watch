import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';

//replace tryve with username from db -- line 18

export default function SideBar() {
    
    const {setShowMenu} = useContext(UserContext);

  return (
    <div className='fixed top-0 left-0 h-screen w-48 glass'>
      <span className='absolute top-5 left-5 text-xl' onClick={() =>setShowMenu(false)}>
          {icons.close}
      </span>
      <div className='absolute bottom-5 left-5 text-purple-500'>{icons.verfied}
        <span className='ml-2 text-white'>Tryve</span>
      </div>
      <ul className='pt-32 mx-4'>
        <li onClick={() =>setShowMenu(false)}>
          <Link href='/' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Home</p>
          </Link>
        </li>
        <li onClick={() =>setShowMenu(false)}>
          <Link href='/all' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>All</p>
          </Link>
        </li>
        <li onClick={() =>setShowMenu(false)}>
          <Link href='/music' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Music Libray</p>
          </Link>
        </li>
        <li onClick={() =>setShowMenu(false)}>
          <Link href='/wallpaper' className='text-white flex items-center p-4'>
            <p className='px-4 comet'>Wallpapers</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
