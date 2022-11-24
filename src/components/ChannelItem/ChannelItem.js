import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './ChannelItem.module.scss';
import { defaultImage } from '../../utils/constants';

const cx = classNames.bind(styles);

function ChannelItem({data, channel}) {
    // console.log(data);
    // const image = data.snippet.thumbnails.high.url;
    // const channelTitle1 = data.snippet.channelTitle;
    // const channelTitle2 = data.snippet.title;
    // const subscriberCount = data.statistics.subscriberCount;

    return ( 
         <div className={cx('wrapper')}>
             <div className={cx('container')}>
                    <div className={cx('content')}>
                       <Link to={`/channel/${data.id.channelId}`}>
                             <img className={cx('img')} src={data.snippet.thumbnails.high.url || defaultImage} alt={data.snippet.channelTitle}/>
                       </Link>
                        <Link to={`/channel/${data.id.channelId}`} className={cx('user-name')}>
                            <h3>{data.snippet.title}</h3>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                            {data?.statistics?.subscriberCount &&(
                                <div>
                                    {parseInt(data.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
                                </div>
                            )}
                        </Link>
                        {/* <div className={cx('btn-subscribe')}>
                            Đăng ký
                        </div> */}
                    </div>
            </div>
         </div>
     );
}

ChannelItem.propsTypes = {
    data: PropTypes.object.isRequired,
    channel: PropTypes.bool,
}

export default ChannelItem;