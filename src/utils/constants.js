import { faCode, faFilm, faFire, faGamepad, faGraduationCap, faMusic, faShirt, faTrophy, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const defaultImageVideo = 'https://i.ibb.co/G2L2Gwp/API-Course.png';

const MENU = [
    {name: 'New', icon: <FontAwesomeIcon icon={faFire}/>},
    {name: 'Music', icon: <FontAwesomeIcon icon={faMusic}/>},
    {name: 'ReactJS', icon: <FontAwesomeIcon icon={faCode}/>},
    {name: 'Education', icon: <FontAwesomeIcon icon={faGraduationCap}/>},
    {name: 'Film', icon: <FontAwesomeIcon icon={faFilm}/>},
    {name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad}/>},
    {name: 'Live', icon: <FontAwesomeIcon icon={faVideo}/>},
    {name: 'Sport', icon: <FontAwesomeIcon icon={faTrophy}/>},
    {name: 'Fashion', icon: <FontAwesomeIcon icon={faShirt}/>},
]

export default MENU;