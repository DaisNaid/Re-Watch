import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark, faCertificate, faCaretRight, faCaretDown, 
    faPowerOff, faSun, faMoon, faPlus, faPlay, faSquareCheck, faAngleLeft,
    faCircleCheck, faAngleRight, faCircle, faStar
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
    back: <FontAwesomeIcon icon={faAngleLeft} />,
    forward: <FontAwesomeIcon icon={faAngleRight} />,
    completed: <FontAwesomeIcon icon={faCircleCheck} />,
    started: <FontAwesomeIcon icon={faCircle}/>,
    rating: <FontAwesomeIcon icon={faStar} pull/>
};

export default icons;
