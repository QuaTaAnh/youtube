import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';

function SearchFeed() {
    const { searchTerm } = useParams();
    const [searchVideos, setSearchVideos] = useState([]);

    useEffect(() => {
        request(`search?part=snippet&q=${searchTerm}`)
          .then((data) => setSearchVideos(data.items))
      }, [searchTerm]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSearch}>
                Đang hiển thị kết quả cho: <span>{searchTerm.slice(0, 30)}</span>
            </div>
            <div className={styles.videos}>
                {<Videos videos={searchVideos} search/>}
            </div>
        </div>
    );
}

export default SearchFeed;