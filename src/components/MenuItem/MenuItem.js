// import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import Button from '../Button/Button';

function MenuItem({ data }) {
    return (
        <Button more>
            <div className={styles.menuItem}>
                <span>{data.icon}</span>
                {data.title}
            </div>
        </Button>
    );
}

export default MenuItem;
