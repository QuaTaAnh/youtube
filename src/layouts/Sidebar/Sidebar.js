import PropTypes from 'prop-types';

import styles from './Sidebar.module.scss';
import MENU from '../../utils/constants';

function Sidebar({ selected, setSelected }) {
    return (
        <div className={styles.wrapper}>
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

            <div className={styles.copyright}>Copyright © 2022 Anh Trần</div>
        </div>
    );
}

Sidebar.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.string.isRequired,
};

export default Sidebar;
