import classNames from 'classnames/bind';

import styles from './LoadingSkeleton.module.scss';

const cx = classNames.bind(styles);

function LoadingSkeleton({imageVideos, titleVideos, channelTitleVideos, imageChannel, userNameChannel}) {
    return (
        <div className={cx('skeleton', {imageVideos, titleVideos, channelTitleVideos, imageChannel, userNameChannel})}></div>
    );
}

export default LoadingSkeleton;
