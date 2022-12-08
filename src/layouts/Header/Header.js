import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCameraAlt,
    faEllipsisVertical,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import { logo } from '../../utils/constants';
import Search from '../../components/Search/Search';
import { images } from '../../assets/images';

function Header() {
    const user = true;
    return (
        <div className={styles.wrapper}>
            <Link
                to="/"
                className={styles.logo}
                onClick={() => (document.title = 'YouTube')}
            >
                <img src={logo} alt="Logo" />
            </Link>
            <Search />
            {user ? (
                <div className={styles.user}>
                    <FontAwesomeIcon
                        className={styles.camera}
                        icon={faCameraAlt}
                    />
                    <FontAwesomeIcon className={styles.bell} icon={faBell} />
                    <div className={styles.avatar}>
                        <img src={images.noImage} alt="Avatar" />
                    </div>
                </div>
            ) : (
                <div className={styles.login}>
                    <Tippy
                        content="Cài đặt"
                        placement="bottom"
                        theme="light-border"
                    >
                        <button className={styles.more}>
                            <FontAwesomeIcon
                                className={styles.btnMore}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Tippy>

                    <div className={styles.btnLogin}>
                        <Link to="/login">
                            <button>
                                <FontAwesomeIcon
                                    className={styles.loginIcon}
                                    icon={faUserCircle}
                                />
                                Đăng nhập
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
