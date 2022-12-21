import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import Box from '../Box/Box';
import VideoItem from '../VideoItem/VideoItem';
import ChannelItem from '../ChannelItem/ChannelItem';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const cx = classNames.bind(styles);

function Videos({ videos, channel, offerVideo, search }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (videos.length === 0) {
        return <Loader />;
    }
    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Box key={index}>
                    {loading && <VideoItem.Loading />}

                    {!loading && video.id.videoId && (
                        <VideoItem
                            data={video}
                            channel={channel}
                            offerVideo={offerVideo}
                            search={search}
                        />
                    )}
                    {loading && <ChannelItem.Loading />}
                    {!loading && video.id.channelId && (
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
