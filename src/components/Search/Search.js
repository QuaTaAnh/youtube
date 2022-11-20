import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);


function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                className={cx('input')}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Search;