import {Link} from 'react-router-dom';

import styles from './Header.module.scss';
import { logo } from '../../utils/constants';
import Search from '../../components/Search/Search';

function Header() {
    return (
    <div className={styles.wrapper}>
        <Link to='/' className={styles.logo}>
            <img src={logo} alt='Logo'/>
        </Link>
        <Search />
    </div>
    )
}

export default Header;