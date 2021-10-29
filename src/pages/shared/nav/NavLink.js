
import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';

const NavLink = ({ myClass = null }) => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    let myModifiedClass = myClass ? myClass : "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium";
    return (
        <div>
            <Link
                to="/"
                className={myModifiedClass}
            >
                Home
            </Link>

            <Link
                to="/about"
                className={myModifiedClass}
            >
                About
            </Link>

            {user.email ? <>
                <Link
                    to="/manage-all-trips"
                    className={myModifiedClass}
                >
                    Manage Orders
                </Link>
                <Link
                    to="/addpakage"
                    className={myModifiedClass}
                >
                    Add Pakage
                </Link>
                <Link
                    to="/your-trips"
                    className={myModifiedClass}
                >
                    Your pakage orders
                </Link>

                <Link
                    to="/trips"
                    className={myModifiedClass}
                >
                    Our pakages
                </Link>
                <Link
                    to="/"
                    className={myModifiedClass}
                >
                    {user.displayName}
                </Link>
                <button onClick={logOut} className={myModifiedClass}>Logout</button>
            </> : <> <Link
                to="/login"
                className={myModifiedClass}
            >
                login
            </Link>
                <Link
                    to="/register"
                    className={myModifiedClass}
                >
                    Sign up
                </Link></>}

            {/* <Link
                to="/departments"
                className={myModifiedClass}
            >
                Our Departments
            </Link>

            <Link
                to="/contact"
                className={myModifiedClass}
            >
                Contact
            </Link> */}
        </div>
    )
}

export default NavLink
