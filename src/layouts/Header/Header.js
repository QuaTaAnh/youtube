import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';
import { logo } from '../../utils/constants';
import Search from '../../components/Search/Search';

const cx = classNames.bind(styles);

function Header() {
    return (
    <div className={cx('wrapper')}>
        <Link to='/' className={cx('logo')}>
            <img src={logo} alt='Logo'/>
        </Link>
        <Search />
    </div>
    )
}

export default Header;