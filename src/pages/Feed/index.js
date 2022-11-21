import classNames from 'classnames/bind';
import {useEffect, useState} from 'react';

import styles from './Feed.module.scss';
import {request} from '../../utils/request';

const cx = classNames.bind(styles);

function Feed() {
    const [videos, setVideos] = useState();
    useEffect(()=>{

    })

    return (
        <div className={cx('wrapper')}>

        </div>
    );
}

export default Feed;