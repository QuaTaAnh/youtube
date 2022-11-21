import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({to, href, leftIcon, primary, children, onClick,}) {
    const classes = cx('wrapper', {
        primary,
    });

    let Component = 'button';
    if(to){
        Component = 'a';
    }
    if(href){
        Component = NavLink;
    }
    return (
        <Component className={classes} onClick={onClick}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('name')}>{children}</span>
        </Component>
    );
}

export default Button;