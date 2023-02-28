import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCameraAlt,
    faEllipsisVertical,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useContext } from 'react';

import styles from './Header.module.scss';
import Search from '../../components/Search/Search';
import { images } from '../../assets/images';
import Button from '../../components/Button/Button';
import 'tippy.js/themes/translucent.css';
import { AuthContext } from '../../Context/AuthProvider';

function Header() {
    const data = useContext(AuthContext);
    console.log({ data });

    const user = !true;
    return (
        <div className={styles.wrapper}>
            <Link
                to="/"
                className={styles.logo}
                onClick={() => (document.title = 'YouTube')}
            >
                <img src={images.logo} alt="Logo" />
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
                        theme="translucent"
                    >
                        <button className={styles.more}>
                            <FontAwesomeIcon
                                className={styles.btnMore}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Tippy>

                    <Button
                        to="/login"
                        onClick={() => (document.title = 'Đăng nhập')}
                        primary
                        leftIcon={faUserCircle}
                    >
                        Đăng nhập
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Header;
