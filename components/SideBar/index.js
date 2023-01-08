import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import useAuthDisplay from '../../hooks/useAuthDisplay';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';
import AllDropdown from '../AllDropdownButton/index';

//replace tryve with username from db -- line 18

export default function SideBar() {
    
    const {isUser, setShowMenu, setIsUser} = useContext(UserContext);

    const LoginModal = useAuthDisplay(isUser);
 
    useEffect(() => {
      const isUserTest = /*loggedIn =*/ true;
      const signin = document.getElementById('signin');

      if(isUserTest) {
        signin.className = signin.className + ' text-green-500';
      }
      else{
        signin.className = signin.className + ' text-red-500';
      }
    }, []) //add dependencies when complete

    //create globalState for logged in or not --- loggedIn, setLoggedIn
    //api endpoint
    //session token
    const handleSignIn = () => {
      //get user
      const signin = document.getElementById('signin');
      const user = signin.className.includes('green');

      const isUserCheck = (user === true) ? true : false;
      setIsUser(isUserCheck);
    }

  return (
    <div>
      <div className='fixed top-0 left-0 h-screen w-48 glass'>
        <span className='absolute top-5 left-5 text-xl' onClick={() =>setShowMenu(false)}>
            {icons.close}
        </span>
        <div className='absolute bottom-[10vh] left-5 text-purple-500'>{icons.verfied}
          <span className='ml-2 text-white'>Tryve</span>
        </div>
        <span id='signin' className='absolute top-5 right-5 text-xl' onClick={() => handleSignIn()}>
          {icons.signIn}
        </span>
        <ul className='pt-32 mx-4'>
          <li onClick={() =>setShowMenu(false)}>
            <Link href='/' className='flex items-center p-4'>
              <p className='px-4 comet'>Home</p>
            </Link>
          </li>
          <li>
            <AllDropdown />
          </li>
          <li onClick={() =>setShowMenu(false)}>
            <Link href='/music' className='flex items-center p-4'>
              <p className='pl-4 comet'>Music Library</p>
            </Link>
          </li>
          <li onClick={() =>setShowMenu(false)}>
            <Link href='/wallpaper' className='flex items-center p-4'>
              <p className='px-4 comet'>Wallpapers</p>
            </Link>
          </li>
        </ul>
      </div>
      {LoginModal}
    </div>
  );
}
