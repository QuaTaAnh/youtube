import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './SearchFeed.module.scss';
import Videos from '../../components/Videos/Videos';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function SearchFeed() {
    const {videos, setVideos} = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        request(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
        // .catch((error) => console.log(error))
    }, [searchTerm, setVideos]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-search')}>
                Results: <span>{searchTerm}</span>
            </div>
            <div>
            {/* <Videos videos={videos}/> */}
            </div>
        </div>
    );
}

export default SearchFeed;