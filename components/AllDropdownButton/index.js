import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';

export default function AllDropdown() {
    const [value, setValue] = useState('All');
    const {setShowMenu} = useContext(UserContext);
    const [icon, setIcon] = useState(icons.caretR);

    const handleDropdown = () => {
        if (icon === icons.caretR) {
            setIcon(icons.caretD);
            const menu = document.querySelector('.watch-drop');
            menu.classList.toggle('is-open');
        }
        else{
            setIcon(icons.caretR);
            const menu = document.querySelector('.watch-drop');
            menu.classList.toggle('is-open');
        }
    };

    const select = (e) => {
        setValue(e);
        console.log('test',value)
        // setShowMenu(false);
    };

  return (
    <div className='flex items-center p-8 max-h-8 no-underline comet'>
        <span className='mr-4 hover:text-purple-500' onClick={handleDropdown}>{icon}</span>
        <span>All</span>
        <div className='watch-drop absolute top-60 right-0 bg-gradient-to-r from-darkanime via-darkanime to-transparent'>
            <ul className='py-2'>
                <li className='pb-2' value='Test' onClick={(e) => select(e.target.value)}><Link href="#">All</Link></li>
                <li className='py-2' value='Watching' onClick={(e) => select(e.currentTarget.value)}><Link href="#">Watching</Link></li>
                <li className='py-2'><Link href="#">Completed</Link></li>
                <li className='pt-2'><Link href="#">Plan to Watch</Link></li>
            </ul>
        </div>
    </div>
  );
}
