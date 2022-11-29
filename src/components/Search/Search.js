import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { useNavigate } from 'react-router-dom';

function Search() {
    const inputRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleClear = () => {
        setSearchTerm('');
        inputRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
            <div className={styles.search}>
                <input
                    ref={inputRef}
                    value={searchTerm}
                    placeholder="Tìm kiếm..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleEnter}
                />
                {!!searchTerm && <FontAwesomeIcon className={styles.clearBtn} icon={faXmark} onClick={handleClear} />}
                <button type="submit" className={styles.searchBtn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit} />
                </button>
            </div>
    );
}

export default Search;