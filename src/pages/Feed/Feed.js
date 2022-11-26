import classNames from 'classnames/bind';
import Videos from '../../components/Videos/Videos';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {useEffect, useState} from 'react';

import styles from './Feed.module.scss';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function Feed() {
    const [selected, setSelected] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        request(`search?part=snippet&q=${selected}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.log(error))
    }, [selected]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar selected={selected} setSelected={setSelected}/>
                <div className={cx('content')}>
                    <div className={cx('title')}>{selected} <span>videos</span></div>
                    <Videos videos={videos}/>
                </div>
            </div>
        </div>
    );
}

export default Feed;