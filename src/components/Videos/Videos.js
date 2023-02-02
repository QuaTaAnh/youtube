import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Videos.module.scss';
import Box from '../Box/Box';
import VideoItem from '../VideoItem/VideoItem';
import ChannelItem from '../ChannelItem/ChannelItem';

const cx = classNames.bind(styles);

function Videos({ videos, channel, offerVideo, search }) {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <div className={cx('wrapper')}>
            {loading && videos.map((video, index) => (
                <Box key={index}>
                    {video.id.videoId && (
                        <VideoItem.Loading/>
                    )}
                    {video.id.channelId && (
                        <ChannelItem.Loading/>
                    )}
                </Box>
            ))}

           {!loading && videos.map((video, index) => (
                <Box key={index}>
                    {video.id.videoId && (
                        <VideoItem
                            data={video}
                            channel={channel}
                            offerVideo={offerVideo}
                            search={search}
                        />
                    )}
                    {video.id.channelId && (
                        <ChannelItem
                            data={video}
                            channel={channel}
                            search={search}
                        />
                    )}
                </Box>
            ))}
        </div>
    );
}

Videos.propTypes = {
    videos: PropTypes.array.isRequired,
    channel: PropTypes.bool,
    offerVideo: PropTypes.bool,
};

export default Videos;
