import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from "../Header/Header";
import styles from './OnlyHeader.module.scss';

const cx = classNames.bind(styles);

function OnlyHeader({children}) {
    return <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>{children}</div>
    </div>;
}

OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
}

export default OnlyHeader;