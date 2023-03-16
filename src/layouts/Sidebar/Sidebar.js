import PropTypes from 'prop-types';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import MENU from '../../utils/constants';
import Button from '../../components/Button/Button';

function Sidebar({ selected, setSelected }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <p>Hãy đăng nhập để thích video, bình luận và đăng ký kênh.</p>
                <Button
                    to="/login"
                    onClick={() => (document.title = 'Đăng nhập')}
                    primary
                    leftIcon={faUserCircle}
                >
                    Đăng nhập
                </Button>
            </div>
            {MENU.map((item, index) => (
                <button
                    key={index}
                    className={styles.menu}
                    onClick={() => setSelected(item.name)}
                    style={{
                        background:
                            item.name === selected ? 'var(--primary)' : 'white',
                        color: 'black',
                    }}
                >
                    <div className={styles.menuItem}>
                        <span
                            className={styles.icon}
                            style={{ color: item.name === selected && 'white' }}
                        >
                            {item.icon}
                        </span>
                        <span
                            className={styles.title}
                            style={{
                                color:
                                    item.name === selected ? 'white' : 'black',
                            }}
                        >
                            {item.name}
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
}

Sidebar.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.any.isRequired,
};

export default Sidebar;
