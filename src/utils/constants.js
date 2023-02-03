import {
    faCode,
    faCookie,
    faFilm,
    faFire,
    faGamepad,
    faGraduationCap,
    faMusic,
    faNewspaper,
    faShirt,
    faTrophy,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MENU = [
    { name: 'Thịnh hành', icon: <FontAwesomeIcon icon={faFire} /> },
    { name: 'Tin tức', icon: <FontAwesomeIcon icon={faNewspaper} /> },
    { name: 'Thể thao', icon: <FontAwesomeIcon icon={faTrophy} /> },
    { name: 'MixiGaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'F8 Official', icon: <FontAwesomeIcon icon={faCode} /> },
    { name: 'Âm nhạc', icon: <FontAwesomeIcon icon={faMusic} /> },
    { name: 'Giáo dục', icon: <FontAwesomeIcon icon={faGraduationCap} /> },
    { name: 'Phim', icon: <FontAwesomeIcon icon={faFilm} /> },
    { name: 'Trò chơi', icon: <FontAwesomeIcon icon={faGamepad} /> },
    { name: 'Trực tiếp', icon: <FontAwesomeIcon icon={faVideo} /> },
    { name: 'Thời trang', icon: <FontAwesomeIcon icon={faShirt} /> },
    { name: 'Nấu ăn', icon: <FontAwesomeIcon icon={faCookie} /> },
];

export default MENU;
