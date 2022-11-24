import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import Box from '../Box/Box';
import VideoItem from '../VideoItem/VideoItem';
import ChannelItem from '../ChannelItem/ChannelItem';

const cx = classNames.bind(styles);

function Videos({videos, channel}) {
    // console.log(videos);
    return ( 
        <div className={cx('wrapper')}>
            {videos.map((video, index)=>(
                <Box key={index}>
                    {video.id.videoId && <VideoItem data={video} channel={channel}/>}
                    {video.id.channelId && <ChannelItem data={video} channel={channel}/>}
                </Box>
            ))}
        </div>
     );
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
}

export default Videos;