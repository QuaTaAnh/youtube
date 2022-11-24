import {useState, useEffect} from 'react';
import classNames from 'classnames/bind';

import ChannelItem from "../../components/ChannelItem/ChannelItem";
import Videos from "../../components/Videos/Videos";
import { images } from '../../assets/images/index';
import styles from './Channel.module.scss';

const cx = classNames.bind(styles);

function Channel() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={images.bannerChannel} alt='BannerChannel'/>
            </div>
        </div>
    );
}

export default Channel;