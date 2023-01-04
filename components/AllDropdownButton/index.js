import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserContext } from '../../pages/_app';
import icons from '../../utils/icons';

export default function AllDropdown() {
    const {setShowMenu, selectedTab, setSelectedTab} = useContext(UserContext);
    const [value] = useState(selectedTab);
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
        const selected = e.target.innerText;
        setSelectedTab(selected);
        setShowMenu(false);
    };

  return (
    <div className='flex items-center p-8 max-h-8 no-underline comet'>
        <span className='mr-4 hover:text-purple-500' onClick={handleDropdown}>{icon}</span>
        <span>{value}</span>
        <div className='watch-drop absolute top-60 right-0 bg-gradient-to-r from-darkanime via-darkanime to-transparent'>
            <ul className='py-2'>
                <li className='pb-2' onClick={(e) => select(e)}><Link href="#all">All</Link></li>
                <li className='py-2' onClick={(e) => select(e)}><Link href="#watching">Watching</Link></li>
                <li className='py-2' onClick={(e) => select(e)}><Link href="#completed">Completed</Link></li>
                <li className='pt-2' onClick={(e) => select(e)}><Link href="#plantowatch">Plan to Watch</Link></li>
            </ul>
        </div>
    </div>
  );
}
