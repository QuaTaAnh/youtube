/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';

function SearchFeed() {
    const { searchTerm } = useParams();
    const {videos, setVideos} = useState([]);

    useEffect(() => {
        request(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.log(error))
    }, [searchTerm]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSearch}>
                Results: <span>{searchTerm}</span>
            </div>
            <div>
                <Videos videos={videos}/>
            </div>
        </div>
    );
}

export default SearchFeed;