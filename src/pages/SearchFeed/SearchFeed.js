import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';
import useDebounce from '../../hooks/useDebounce';

function SearchFeed() {
    const { searchTerm } = useParams();
    const [searchVideos, setSearchVideos] = useState([]);

    // su dung useDebounce de tranh bi rerender
    const debounceValue = useDebounce(searchTerm, 500);

    useEffect(() => {
        document.title = debounceValue + ' - YouTube';
        request(`search?part=snippet&q=${debounceValue}`).then((data) =>
            setSearchVideos(data.items),
        );
    }, [debounceValue]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSearch}>
                Đang hiển thị kết quả cho:{' '}
                <span>{searchTerm.slice(0, 30)}</span>
            </div>
            <div className={styles.videos}>
                {<Videos videos={searchVideos} search />}
            </div>
        </div>
    );
}

export default SearchFeed;
