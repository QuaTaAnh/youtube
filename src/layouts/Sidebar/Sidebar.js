import classNames from 'classnames/bind';
import {useState} from 'react';

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
                    <span className={cx('icon')} style={{color: item.name === selected ? 'white' : 'var(--primary)'}}>{item.icon}</span>
                    <span className={cx('title')} style={{color: 'white'}}>{item.name}</span>
                </button>
            ))}

            <div className={cx('copyright')}>Copyright © 2022 Anh Trần</div>
        </div>
    );
}

export default Sidebar;