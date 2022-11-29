import Videos from '../../components/Videos/Videos';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {useEffect, useState} from 'react';

import styles from './Feed.module.scss';
import { request } from '../../utils/request';
import Loader from '../../components/Loader/Loader';

function Feed() {
    document.title = "YouTube";
    const [selected, setSelected] = useState('New');
    const [feedVideos, setFeedVideos] = useState([]);
    const [loader, setLoader] = useState(false);
    
    useEffect(() =>{
        setLoader(true);
        request(`search?part=snippet&q=${selected}`)
        .then((data) => setFeedVideos(data.items))
        .catch((error) => console.log(error))
        setLoader(false);
    }, [selected]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Sidebar selected={selected} setSelected={setSelected}/>
                <div className={styles.content}>
                    <div className={styles.title}>{selected} <span>videos</span></div>
                    {loader && <Loader />}
                    <Videos videos={feedVideos} setLoader={setLoader}/>
                </div>
            </div>
        </div>
    );
}

export default Feed;