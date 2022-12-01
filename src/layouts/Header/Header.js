import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { logo } from '../../utils/constants';
import Search from '../../components/Search/Search';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    const user = true;
    return (
    <div className={styles.wrapper}>
        <Link to='/' className={styles.logo} onClick={()=>document.title = 'YouTube'}>
            <img src={logo} alt='Logo'/>
        </Link>
        <Search />
        {user && <div className={styles.login}>
            <button className={styles.more}> 
                <FontAwesomeIcon className={styles.btnMore} icon={faEllipsisVertical}/>
            </button>

            <div className={styles.btnLogin}>
                <button>
                    <FontAwesomeIcon className={styles.loginIcon} icon={faUserCircle}/>
                    Đăng nhập
                </button>
            </div>
        </div>}
    </div>
    )
}

export default Header;