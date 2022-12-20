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

const MENU = [
    { name: 'Thịnh hành', icon: <FontAwesomeIcon icon={faFire} /> },
    { name: 'MixiGaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'Âm nhạc', icon: <FontAwesomeIcon icon={faMusic} /> },
    { name: 'Giáo dục', icon: <FontAwesomeIcon icon={faGraduationCap} /> },
    { name: 'F8 Official', icon: <FontAwesomeIcon icon={faCode} /> },
    { name: 'Phim', icon: <FontAwesomeIcon icon={faFilm} /> },
    { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'Trực tiếp', icon: <FontAwesomeIcon icon={faVideo} /> },
    { name: 'Thể thao', icon: <FontAwesomeIcon icon={faTrophy} /> },
    { name: 'Thời trang', icon: <FontAwesomeIcon icon={faShirt} /> },
];

export default MENU;
