import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
    const { googleSignIn, user, registerUser, setUserName } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const location = useLocation();
    const redirect = location.state?.from || '/';
    const history = useHistory();
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePassChange = (e) => {
        setPass(e.target.value);
    };
    const formSubmit = (e) => {
        setUserName(name);
        registerUser(email, pass, name);
        e.preventDefault();
    }
    if (user.email) {
        history.push(redirect);
    }
    return (
        <div>
            <div class="flex justify-center min-h-screen bg-gray-100">
                <div class="container sm:mt-40 mt-24 mb-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                    <div class="text-center my-6">
                        <h1 class="text-3xl font-semibold text-gray-700">SIGN UP</h1>
                        <p class="text-gray-500">Sign up to create new account</p>
                    </div>
                    <div class="m-6">
                        <form class="mb-4" onSubmit={formSubmit}>
                            <div class="mb-6">
                                <label for="name" class="text-left block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-100 focus:border-green-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onBlur={handleNameChange} />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="text-left block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="Your email address" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-100 focus:border-green-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onBlur={handleEmailChange} />
                            </div>
                            <div class="mb-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-100 focus:border-green-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" onBlur={handlePassChange} />
                            </div>
                            <div class="mb-6">
                                <button type="submit" class="w-full px-3 py-4 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none duration-100 ease-in-out">Sign Up</button>
                            </div>
                            <p class="text-sm text-center text-gray-400">
                                Already have an account?
                                <Link to="/userlogin" class="font-semibold text-green-500 hover:text-green-600 focus:outline-none focus:underline">Sign In</Link>.
                            </p>
                        </form>
                        <div class="flex flex-row justify-center mb-8">
                            <span class="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                            <div class="w-full bg-gray-200 mt-3 h-px"></div>
                        </div>
                        <div class="flex flex-row gap-2">
                            <button onClick={googleSignIn} class="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-red-600 duration-100 ease-in-out">
                                <i class="fab fa-google"></i>
                                Google
                            </button>
                            <button class="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-blue-800 duration-100 ease-in-out">
                                <i class="fab fa-facebook-f"></i>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;