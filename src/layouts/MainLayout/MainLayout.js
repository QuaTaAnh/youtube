import classNames from 'classnames/bind';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
        </div>
     );
}

export default MainLayout;