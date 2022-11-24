import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '../Header/Header';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({children, channel}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container',{channel})}>
                {children}
            </div>
        </div>
     );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout;