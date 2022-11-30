import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './ChannelItem.module.scss';
import { defaultImage } from '../../utils/constants';

const cx = classNames.bind(styles);

function ChannelItem({data, channel}) {
    const image = data?.snippet?.thumbnails?.high?.url;
    const channelTitle1 = data?.snippet?.channelTitle;
    const channelTitle2 = data?.snippet?.title;
    const subscriberCount = data?.statistics?.subscriberCount;

    return ( 
         <div className={cx('wrapper', {channel})} onClick={() => document.title = channelTitle2}>
            <Link to={`/channel/${data?.id?.channelId}`}>
                <div className={cx('content')}>
                    <img className={cx('img')} src={image || defaultImage} alt={channelTitle1}/>
                    <div className={cx('user-name')}>
                        <h3>{channelTitle2}</h3>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                    </div>
                    {subscriberCount &&(
                        <div className={cx('subscriber')}>
                            {parseInt(subscriberCount).toLocaleString('en-US')} Subscribers
                        </div>
                    )}
                </div>
            </Link>
         </div>
     );
}

ChannelItem.propsTypes = {
    data: PropTypes.object.isRequired,
    channel: PropTypes.bool,
}

export default ChannelItem;