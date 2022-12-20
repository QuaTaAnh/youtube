import { Link } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button/Button';
import styles from './Login.module.scss';
import { USER, GOOGLE, FACEBOOK, GITHUB } from '../../components/Icon/Icon';

function Login() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loginContainer}>
                <div className={styles.content}>
                    <h2>Đăng nhập vào YouTube</h2>
                    <Button login loginIcon={USER}>
                        Sử dụng email / số điện thoại
                    </Button>
                    <Button login loginIcon={FACEBOOK} >
                        Tiếp tục với facebook
                    </Button>
                    <Button login loginIcon={GOOGLE}>
                        Tiếp tục với Google
                    </Button>
                    <Button login loginIcon={GITHUB}>
                        Tiếp tục với Github
                    </Button>

                    <p>
                        Bạn chưa có tài khoản? <Link>Đăng kí</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
