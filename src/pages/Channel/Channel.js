import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import ChannelItem from "../../components/ChannelItem/ChannelItem";
import Videos from "../../components/Videos/Videos";
import { images } from '../../assets/images/index';
import styles from './Channel.module.scss';
import { request } from '../../utils/request';

function Channel() {
    const [channel, setChannel] = useState();
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchResults = async () => {
            const data = await request(`channels?part=snippet,statistics&id=${id}`);
            setChannel(data?.items[0]);
          
            const videos = await request(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videos?.items);
        };
        fetchResults();
    }, [id]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={images.bannerChannel} alt='BannerChannel'/>
            </div>
                    <ChannelItem data={channel} channel/>
            <div className={styles.content}>
                    <Videos videos={videos} channel/>
            </div>
        </div>
    );
}

export default Channel;