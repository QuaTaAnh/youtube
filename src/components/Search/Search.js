import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);


function Search() {
    const inputRef = useRef();
    const [input, setInput] = useState('');
    const navigate = useNavigate();


    const handleClear = () => {
        setInput('');
        inputRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input){
            navigate(`/search/${input}`);
            // setInput('');
        }
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            navigate(`/search/${input}`);
            // setInput('');
        }
    }

    return (
            <div className={cx('search')}>
                <input
                ref={inputRef}
                value={input}
                placeholder="Tìm kiếm..."
                onChange={(e)=> setInput(e.target.value)}
                onKeyPress={handleEnter}
                />
                {!!input && <FontAwesomeIcon className={cx('clear-btn')} icon={faXmark} onClick={handleClear} />}
                <button type="submit" className={cx('search-btn')}><FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit} /></button>
            </div>
    );
}

export default Search;