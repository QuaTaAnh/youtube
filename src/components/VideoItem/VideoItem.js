import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoItem.module.scss';
import { defaultImage } from '../../utils/constants';

const cx = classNames.bind(styles);

function VideoItem({data, channel, offerVideo}) {
    // console.log(data);
    const image = data.snippet.thumbnails.high.url;
    const title = data.snippet.title.slice(0, 50);
    const channelTitle = data.snippet.channelTitle.slice(0, 40);
    return ( 
        <div className={cx('wrapper', {channel, offerVideo})}>
            <Link to={data.id.videoId ? `/video/${data.id.videoId}`: '/videos/cV2gBU6hKfY'}>
                <img className={cx('img')} src={image || defaultImage} alt={title} />
            </Link>
            <div className={cx('content')}>
                <Link to={data.id.videoId ? `/video/${data.id.videoId}`: '/videos/cV2gBU6hKfY'} className={cx('title')}>{title}</Link>
                <Link to={data.snippet.channelId ? `/channel/${data.snippet.channelId}`: '/watch?v=SYAwVG6Ujco'} className={cx('channel-title')}>
                    {channelTitle}
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </Link>
            </div>
        </div>
     );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VideoItem;