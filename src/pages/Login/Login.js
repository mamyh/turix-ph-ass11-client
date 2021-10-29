import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { state } = useLocation();
    const { allContext } = useAuth();
    const { loginWithEmailPassword, error } = allContext;
    const [userError, setUserError] = useState('');
    const history = useHistory();
    const redirectPath = state?.from.pathname || '/home';

    const { signInWithGoogle } = allContext;
    const handleLogin = () => {
        signInWithGoogle().finally(() => history.push(redirectPath));
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;


        if (error) {
            setUserError(error);
            return;
        }
        loginWithEmailPassword(email, password).finally(() => history.push(redirectPath));
    }
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div className=" bg-yellow-100 p-20 border hover:shadow-md border-gray-300">
                <h1 className="pb-8"> Please Login </h1 >
                <form className=" border-b-2 border-gray-500" onSubmit={handleLoginWithEmail}>
                    <label htmlFor="email" className="block pb-4">
                        Email :</label>
                    <input className="bg-white border p-2 border-gray-300" type="email" id="email" placeholder="your email" />

                    <label htmlFor="password" className="block pb-4">
                        Password :</label>
                    <input className="bg-white border p-2 border-gray-300" type="password" id="password" placeholder="your password" />
                    <div className="text-right py-4 ">

                        <input type="submit" className="px-4 text-white bg-yellow-500 rounded-md " value="Login" />
                    </div>
                    <div className="text-red-300">{userError}</div>
                </form>

                <button onClick={handleLogin} className="bg-green-300 block px-3 my-4 text-white font-semibold rounded-md">Login with Google</button>
                {/* <button>Login with github</button> */}


                <div>New User ? <Link className="px-4 text-white bg-yellow-500 rounded-md " to="/register">Register</Link></div>
            </div >
        </div>
    )
}

export default Login;
