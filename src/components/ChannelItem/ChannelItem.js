import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './ChannelItem.module.scss';

const cx = classNames.bind(styles);

function ChannelItem({data}) {
    console.log(data);
    const image = data.snippet.thumbnails.high.url;
    const channelTitle = data.snippet.channelTitle;

    return ( 
         <div className={cx('wrapper')}>
             <div className={cx('container')}>
                    <div className={cx('content')}>
                       <Link to={`/channel/${data.id.channelId}`}>
                             <img className={cx('img')} src={image} alt={channelTitle}/>
                       </Link>
                        <Link to={`/channel/${data.id.channelId}`} className={cx('user-name')}>
                            <h3>{channelTitle}</h3>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                        </Link>
                        <div className={cx('btn-subscribe')}>
                            Đăng ký
                        </div>
                    </div>
            </div>
         </div>
     );
}

ChannelItem.propsTypes = {
    data: PropTypes.object.isRequired,
}

export default ChannelItem;