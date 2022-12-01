import Videos from '../../components/Videos/Videos';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {useEffect, useState} from 'react';

import styles from './Feed.module.scss';
import { request } from '../../utils/request';
import Loader from '../../components/Loader/Loader';

function Feed() {
    const [selected, setSelected] = useState('Thịnh hành');
    const [feedVideos, setFeedVideos] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    document.title = selected;
    
    useEffect(() =>{
        setShowLoader(true);
        request(`search?part=id,snippet&q=${selected}`)
        .then((data) => setFeedVideos(data.items))
        .catch((error) => console.log(error))
        setShowLoader(false);
    }, [selected]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Sidebar selected={selected} setSelected={setSelected}/>
                <div className={styles.content}>
                    <div className={styles.title}>{selected}</div>
                    {showLoader && <Loader />}
                    <Videos videos={feedVideos}/>
                </div>
            </div>
        </div>
    );
}

export default Feed;