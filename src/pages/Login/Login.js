import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { state } = useLocation();
    const { allContext } = useAuth();
    //const { loginWithEmailPassword, error } = allContext;
    //const [userError, setUserError] = useState('');
    const history = useHistory();
    const redirectPath = state?.from.pathname || '/home';

    const { signInWithGoogle } = allContext;
    const handleLogin = () => {
        signInWithGoogle().finally(() => history.push(redirectPath));
    }
    // const handleLoginWithEmail = (e) => {
    //     e.preventDefault();
    //     const email = e.target[0].value;
    //     const password = e.target[1].value;


    //     if (error) {
    //         setUserError(error);
    //         return;
    //     }
    //     loginWithEmailPassword(email, password).finally(() => history.push(redirectPath));
    // }
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div className="bg-white p-20 border hover:shadow-md border-gray-300">
                <h1 className="pb-8"> Please Login </h1 >


                <button onClick={handleLogin} className="bg-green-300 block px-3 my-4 text-white font-semibold rounded-md">Login with Google</button>
                {/* <button>Login with github</button> */}


            </div >
        </div>
    )
}

export default Login;
