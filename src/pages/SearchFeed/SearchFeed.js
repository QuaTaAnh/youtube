import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';
import Loader from '../../components/Loader/Loader';

function SearchFeed() {
    const { searchTerm } = useParams();
    const [loader, setLoader] = useState(false);
    const [searchVideos, setSearchVideos] = useState([]);

    useEffect(() => {
        setLoader(true);
        request(`search?part=snippet&q=${searchTerm}`)
          .then((data) => setSearchVideos(data.items))
        setLoader(false);
      }, [searchTerm]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSearch}>
                Results: <span>{searchTerm}</span>
            </div>
            <div>
                {loader && <Loader />}
                {<Videos videos={searchVideos} search/>}
            </div>
        </div>
    );
}

export default SearchFeed;