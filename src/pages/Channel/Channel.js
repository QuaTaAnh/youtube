import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import ChannelItem from "../../components/ChannelItem/ChannelItem";
import Videos from "../../components/Videos/Videos";
import { images } from '../../assets/images/index';
import styles from './Channel.module.scss';
import { request } from '../../utils/request';

const cx = classNames.bind(styles);

function Channel() {
    const [channel, setChannel] = useState();
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    
    // console.log(channel);
    useEffect(() => {
        const fetchResults = async () => {
            const data = await request(`channels?part=snippet&id=${id}`);

            setChannel(data?.items[0]);
          
            const videos = await request(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videos?.items);
        };
        fetchResults();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={images.bannerChannel} alt='BannerChannel'/>
            </div>
                    <ChannelItem data={channel} channel/>
            <div className={cx('content')}>
                    <Videos videos={videos} channel/>
            </div>
        </div>
    );
}

export default Channel;