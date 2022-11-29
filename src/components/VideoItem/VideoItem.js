import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoItem.module.scss';
import { defaultImage } from '../../utils/constants';

const cx = classNames.bind(styles);

function VideoItem({ data: {id: {videoId}, snippet}, channel, offerVideo, search}) {
    const classes = cx('wrapper', {
        channel, 
        offerVideo,
        search
    })

    const image = snippet?.thumbnails?.high?.url;
    const title = snippet?.title.slice(0, 50);
    const channelTitle = snippet?.channelTitle.slice(0, 40);
    const channelId = snippet?.channelId;

    return ( 
        <div className={classes}>
            <div className={cx('image')}>
                <Link to={videoId ? `/video/${videoId}`: '/videos/cV2gBU6hKfY'}>
                    <img className={cx('img')} src={image || defaultImage} alt={title} />
                </Link>
            </div>
            <div className={cx('content')}>
                <Link to={videoId ? `/video/${videoId}`: '/videos/cV2gBU6hKfY'} className={cx('title')}>
                    {title}
                </Link>
                <Link to={channelId ? `/channel/${channelId}`: '/watch?v=SYAwVG6Ujco'} className={cx('channel-title')} >
                    {channelTitle}
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </Link>
            </div>
        </div>
     );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
    channel: PropTypes.bool.isRequired,
    offerVideo: PropTypes.bool.isRequired,
}

export default VideoItem;