import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './VideoItem.module.scss';
import { defaultImageVideo } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoItem({data}) {
    console.log(data);
    const image = data.snippet.thumbnails.high.url;
    const title = data.snippet.title.slice(0, 60);
    const channelTitle = data.snippet.channelTitle;
    // const avatar = data.
    return ( 
        <div className={cx('wrapper')}>
            <Link to={data.id.videoId ? `/video/${data.id.videoId}`: '/videos/cV2gBU6hKfY'}>
                <img className={cx('img')} src={image || defaultImageVideo} alt={title} />
            </Link>
            <div className={cx('content')}>
                <Link to={data.id.videoId ? `/video/${data.id.videoId}`: '/videos/cV2gBU6hKfY'} className={cx('title')}>{title}</Link>
                <Link to={data.snippet.channelId ? `/video/${data.snippet.channelId}`: '/watch?v=SYAwVG6Ujco'} className={cx('channel-title')}>
                    {channelTitle}
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </Link>
            </div>
        </div>
     );
}

export default VideoItem;