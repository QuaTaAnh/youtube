import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';
import Loader from '../../components/Loader/Loader';

function SearchFeed() {
    const { searchTerm } = useParams();
    const [searchVideos, setSearchVideos] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);
        request(`search?part=snippet&q=${searchTerm}`)
          .then((data) => setSearchVideos(data.items))
        setShowLoader(false);
      }, [searchTerm]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSearch}>
                Kết quả: <span>{searchTerm}</span>
            </div>
            <div className={styles.videos}>
                {showLoader && <Loader />}
                {<Videos videos={searchVideos} search/>}
            </div>
        </div>
    );
}

export default SearchFeed;