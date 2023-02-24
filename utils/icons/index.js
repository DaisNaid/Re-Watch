import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark, faCertificate, faCaretRight, faCaretDown, 
    faPowerOff, faSun, faMoon, faPlus, faPlay, faSquareCheck, faAngleLeft
} from '@fortawesome/free-solid-svg-icons';

const icons = {
    menu: <FontAwesomeIcon icon={faBars} />,
    close: <FontAwesomeIcon icon={faXmark} />,
    verfied: <FontAwesomeIcon icon={faCertificate} />,
    caretR: <FontAwesomeIcon icon={faCaretRight} />,
    caretD: <FontAwesomeIcon icon={faCaretDown} />,
    signIn: <FontAwesomeIcon icon={faPowerOff} />,
    daylight: <FontAwesomeIcon icon={faSun} />,
    moonlight: <FontAwesomeIcon icon={faMoon} />,
    add: <FontAwesomeIcon icon={faPlus} />,
    play: <FontAwesomeIcon icon={faPlay} />,
    added: <FontAwesomeIcon icon={faSquareCheck} />,
    back: <FontAwesomeIcon icon={faAngleLeft} />
};

export default icons;
