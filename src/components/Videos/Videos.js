import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import Box from '../Box/Box';
import VideoItem from '../VideoItem/VideoItem';
import ChannelItem from '../ChannelItem/ChannelItem';
import Loader from '../Loader/Loader';

const cx = classNames.bind(styles);

function Videos({videos, channel, offerVideo, setLoader, search}) {
    if(!videos.length || setLoader(true)) {
        return <Loader />;
    }
    return ( 
        <div className={cx('wrapper')}>
            {videos.map((video, index)=>(
                <Box key={index}>
                    {video.id.videoId && <VideoItem data={video} channel={channel} offerVideo={offerVideo} search={search}/>}
                    {video.id.channelId && <ChannelItem data={video} channel={channel}/>}
                </Box>
            ))}
        </div>
     );
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
    channel: PropTypes.bool.isRequired,
    offerVideo: PropTypes.bool.isRequired,
}

export default Videos;