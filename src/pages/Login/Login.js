import firebase, { auth } from '../../firebase/config';

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
    const handleLogin = async () => {
        const data = await auth.signInWithPopup(fbProvider);
        console.log({ data });
    };

    return <button onClick={handleLogin}>Đăng nhập bằng fb</button>;
}

export default Login;
