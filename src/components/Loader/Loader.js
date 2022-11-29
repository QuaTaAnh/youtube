import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Loader.module.scss';

function Loader() {
    return <div className={styles.wrapper}>
        <FontAwesomeIcon className={styles.load} icon={faSpinner}/>
    </div>;
}

export default Loader;