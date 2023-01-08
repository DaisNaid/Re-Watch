import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark, faCertificate, faCaretRight, faCaretDown, faPowerOff} from '@fortawesome/free-solid-svg-icons';

const icons = {
    menu: <FontAwesomeIcon icon={faBars} />,
    close: <FontAwesomeIcon icon={faXmark} />,
    verfied: <FontAwesomeIcon icon={faCertificate} />,
    caretR: <FontAwesomeIcon icon={faCaretRight} />,
    caretD: <FontAwesomeIcon icon={faCaretDown} />,
    signIn: <FontAwesomeIcon icon={faPowerOff} />
};

export default icons;