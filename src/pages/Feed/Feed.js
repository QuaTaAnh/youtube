import Videos from '../../components/Videos/Videos';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {useEffect, useState} from 'react';

import styles from './Feed.module.scss';
import { request } from '../../utils/request';

function Feed() {
    const [selected, setSelected] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        request(`search?part=snippet&q=${selected}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.log(error))
    }, [selected]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Sidebar selected={selected} setSelected={setSelected}/>
                <div className={styles.content}>
                    <div className={styles.title}>{selected} <span>videos</span></div>
                    <Videos videos={videos}/>
                </div>
            </div>
        </div>
    );
}

export default Feed;