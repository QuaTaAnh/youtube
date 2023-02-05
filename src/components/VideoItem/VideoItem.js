import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoItem.module.scss';
import { images } from '../../assets/images';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';

const cx = classNames.bind(styles);

function VideoItem({
    data: {
        id: { videoId },
        snippet,
    },
    channel,
    offerVideo,
    search,
}) {
    const classes = cx('wrapper', {
        channel,
        offerVideo,
        search,
    });

    console.log(snippet);

    const image = snippet?.thumbnails?.high?.url;
    const title = snippet?.title.slice(0, 50);
    const channelTitle = snippet?.channelTitle.slice(0, 40);
    const channelId = snippet?.channelId;

    return (
        <div className={classes}>
            <div
                className={cx('image')}
                onClick={() => (document.title = title)}
            >
                <Link
                    to={videoId ? `/video/${videoId}` : '/videos/cV2gBU6hKfY'}
                >
                    <img
                        className={cx('img')}
                        src={image || images.noImage}
                        alt={title}
                    />
                </Link>
            </div>
            <div className={cx('content')}>
                <Link
                    to={videoId ? `/video/${videoId}` : '/videos/cV2gBU6hKfY'}
                    className={cx('title')}
                    onClick={() => (document.title = title)}
                >
                    {title}
                </Link>
                <Link
                    to={
                        channelId
                            ? `/channel/${channelId}`
                            : '/watch?v=SYAwVG6Ujco'
                    }
                    className={cx('channel-title')}
                    onClick={() =>
                        (document.title = channelTitle + ' - YouTube')
                    }
                >
                    {channelTitle}
                    <FontAwesomeIcon
                        className={cx('check-icon')}
                        icon={faCheckCircle}
                    />
                </Link>
            </div>
        </div>
    );
}

const Loading = () =>{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <LoadingSkeleton imageVideos/>
            </div>
            <div>
                <div className={cx('title')}>
                    <LoadingSkeleton titleVideos/>
                </div>
                <div className={cx('channel-title')}>
                    <LoadingSkeleton channelTitleVideos/>
                </div>
            </div>
        </div>
    )
}

VideoItem.Loading = Loading;

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
    channel: PropTypes.bool,
    offerVideo: PropTypes.bool,
};

export default VideoItem;
