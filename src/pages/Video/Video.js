import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { request } from '../../utils/request';
import Videos from '../../components/Videos/Videos';
import styles from './Video.module.scss';

function Video() {
    const {id} = useParams();
    const [video, setVideo] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        request(`videos?part=contentDetails,snippet,statistics&id=${id}`)
        .then(data => setVideo(data.items[0]))
        .catch(err => console.error(err))
        
        request(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then(data => setVideos(data.items))
    }, [id]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.video}>
                <ReactPlayer width='1000px' height='500px' url={`https://www.youtube.com/watch?v=${id}`} playing controls/>
                <div className={styles.title}>
                    {video?.snippet?.title}
                </div>

                <div className={styles.info}>
                    <Link to={`/channel/${video?.snippet?.channelId}`}>
                        <div className={styles.name}>
                        {video?.snippet?.channelTitle}
                        <FontAwesomeIcon className={styles.checkIcon} icon={faCheckCircle}/>
                        </div>
                    </Link>
                    <div className={styles.view}>
                        <p><strong>{parseInt(video?.statistics?.viewCount).toLocaleString('en-US')}</strong> views</p>
                        <p><strong>{parseInt(video?.statistics?.likeCount).toLocaleString('en-US')}</strong> likes</p>
                    </div>
                </div>
            </div>

            <div className={styles.listVideo}>
                <Videos videos={videos} offerVideo/>
            </div>
        </div>
    );
}

export default Video;