import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary,
    login,
    onClick,
    passProps,
    leftIcon,
    loginIcon,
    className,
    more,
}) {
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', { primary, login, more }, className);
    let Component = 'Button';
    if (to) {
        props.to = to;
        Component = Link;
    }
    if (href) {
        props.href = href;
        Component = 'a';
    }
    return (
        <Component className={classes} {...props} onClick={onClick}>
            <span className={cx('title')}>
                {leftIcon && (
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={leftIcon} />
                    </span>
                )}
                {loginIcon && <span className={cx('icon')}>{loginIcon}</span>}
                {children}
            </span>
        </Component>
    );
}

export default Button;
