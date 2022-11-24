import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import MENU from '../../utils/constants';

const cx = classNames.bind(styles);

function Sidebar({selected, setSelected}) {
    return (
        <div className={cx('wrapper')}>
            {MENU.map((item, index)=>(
                <button
                    key={index}
                    className={cx('menu')}
                    onClick={() => setSelected(item.name)}
                    style={{background: item.name === selected ? 'var(--primary)' : 'black', color: 'white'}}
                >
                    <div className={cx('menu-item')}>
                        <span className={cx('icon')} style={{color: item.name === selected && 'white'}}>{item.icon}</span>
                        <span className={cx('title')} style={{color: 'white'}}>{item.name}</span>
                    </div>
                </button>
            ))}

            <div className={cx('copyright')}>Copyright © 2022 Anh Trần</div>
        </div>
    );
}

Sidebar.propTypes = {
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.string.isRequired,
}

export default Sidebar;