import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCameraAlt,
    faEllipsisVertical,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useContext, useState } from 'react';

import styles from './Header.module.scss';
import Search from '../../components/Search/Search';
import { images } from '../../assets/images';
import Button from '../../components/Button/Button';
import 'tippy.js/themes/translucent.css';
import { AuthContext } from '../../Context/AuthProvider';
import Popper from '../../components/Popper/Popper';
import MenuItem from '../../components/MenuItem/MenuItem';
import { MENUS } from '../../utils/constants';

function Header() {
    const handleClickMore = () => {
        setMore(true);
    };

    const handleHideMore = () => {
        setMore(false);
    };

    const [more, setMore] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);

    // const user = !true;
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
                    <HeadlessTippy
                        interactive
                        visible={more}
                        offset={[-120, 0]}
                        render={(attrs) => (
                            <div
                                className={styles.moreResult}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Popper>
                                    {MENUS.map((menu) => (
                                        <MenuItem key={menu.id} data={menu} />
                                    ))}
                                </Popper>
                            </div>
                        )}
                        onClickOutside={handleHideMore}
                    >
                        <button className={styles.more}>
                            <FontAwesomeIcon
                                className={styles.btnMore}
                                icon={faEllipsisVertical}
                                onClick={handleClickMore}
                            />
                        </button>
                    </HeadlessTippy>

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
