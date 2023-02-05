import Videos from '../../components/Videos/Videos';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

import styles from './Feed.module.scss';
import { request } from '../../utils/request';

function Feed() {
    const [selected, setSelected] = useState('Thịnh hành');
    const [feedVideos, setFeedVideos] = useState([]);

    useEffect(() => {
        document.title = 'YouTube';
        request(`search?part=id,snippet&q=${selected}`)
            .then((data) => setFeedVideos(data.items))
            .catch((error) => console.log(error));
    }, [selected]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Sidebar selected={selected} setSelected={setSelected} />
                <div className={styles.content}>
                    <div className={styles.title}>{selected}</div>
                    <Videos videos={feedVideos} />
                </div>
            </div>
        </div>
    );
}

export default Feed;
