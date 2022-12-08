import PropTypes from 'prop-types';

import Header from '../Header/Header';
import styles from './OnlyHeader.module.scss';

function OnlyHeader({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>{children}</div>
        </div>
    );
}

OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default OnlyHeader;
