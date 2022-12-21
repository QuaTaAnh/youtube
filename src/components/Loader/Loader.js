import classNames from 'classnames/bind';

import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
    return (
        <div
            className={cx('skeleton')}
            style={{
                width: '280px',
                height: '200px',
                margin: '10px 16px 10px 0',
            }}
        ></div>
    );
}

export default Loader;
