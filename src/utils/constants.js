import {
    faCode,
    faFilm,
    faFire,
    faGamepad,
    faGraduationCap,
    faMusic,
    faShirt,
    faTrophy,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const defaultImage = 'https://i.ibb.co/G2L2Gwp/API-Course.png';

const MENU = [
    { name: 'Thịnh hành', icon: <FontAwesomeIcon icon={faFire} /> },
    { name: 'MixiGaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'Âm nhạc', icon: <FontAwesomeIcon icon={faMusic} /> },
    { name: 'Giáo dục', icon: <FontAwesomeIcon icon={faGraduationCap} /> },
    { name: 'ReactJS', icon: <FontAwesomeIcon icon={faCode} /> },
    { name: 'Phim', icon: <FontAwesomeIcon icon={faFilm} /> },
    { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'Trực tiếp', icon: <FontAwesomeIcon icon={faVideo} /> },
    { name: 'Thể thao', icon: <FontAwesomeIcon icon={faTrophy} /> },
    { name: 'Thời trang', icon: <FontAwesomeIcon icon={faShirt} /> },
];

export default MENU;
