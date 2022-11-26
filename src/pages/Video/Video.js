import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';

import { request } from '../../utils/request';
import Videos from '../../components/Videos/Videos';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);


function Video() {
    const {id} = useParams();
    const [video, setVideo] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        request(`videos?part=snippet,statistics&id=${id}`)
        .then(data => setVideo(data.items[0]))

        request(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then(data => setVideos(data.items))
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={cx('video-player')} controls />
            </div>

            <div className="list-video">
                <Videos videos={videos} offerVideo/>
            </div>
        </div>
    );
}

export default Video;