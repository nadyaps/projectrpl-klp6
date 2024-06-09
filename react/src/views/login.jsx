import React, { useState, useEffect } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import axiosClient from '../axios.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'; 
import { useStateContext } from "../context/ContextProvider.jsx";
import { useNavigate } from 'react-router-dom';

export default function login() {
  const {setCurrentUser, setUserToken, setUserCredentials} = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
      //check token
      if(localStorage.getItem('TOKEN')) {

          //redirect page dashboard
          navigate('/dashboard');
      }
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true); // Set loading to true when the request starts

    axiosClient.post("/login", {
      email,
      password,
    })
      .then(({ data }) => {
        setLoading(false); // Set loading to false when the request completes
        
        
        setCurrentUser(data.user);
        setUserToken(data.token);
        setUserCredentials({
          name: data.user.name,
          email: data.user.email,
          photo: data.user.photo,
        })
        toast.success('Login Berhasil...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000); 
        
      })
      .catch(err => {
        setLoading(false); // Set loading to false when the request completes
        const response = err.response;
        if (response && response.status === 500) {
          toast.error('Email atau password salah...');
          console.log(response.data.errors);
        }
      });
  };
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center p-20 md:p-40 space-y-10 md:space-y-0 md:space-x-20">
      <div className="md:w-3/5 max-w-lg">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
          className="w-full"
        />
      </div>
      <div className="md:w-3/5 max-w-lg bg-white p-10 rounded-lg shadow-lg">
        <div>
          <h1 className="text-5xl text-center font-[BebasNeue]">Login</h1>
          <p className=" text-lg text-center text-slate-500 mt-4 mb-8 font-[BebasNeue]">Login to your account using email and password</p>
        </div>
        <form onSubmit={onSubmit} action="#" method = "post">
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="email"
            type="email"
            name="email"
            autoComplete='email'
            required
            placeholder="Email Address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="current-password"
            type="password"
            placeholder="Password"
            name="current-password"
            autoComplete='current-password'
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        <div className="flex justify-between font-semibold text-base mb-5">
          <label className="flex text-slate-500 font-[BebasNeue] hover:text-slate-600 cursor-pointer">
            <input className="mr-2" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
            <button
              className="mt-6 group relative flex w-full justify-center font-[BebasNeue] rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
                </svg>
              ) : (
                <>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 font-[BebasNeue] text-lg" aria-hidden="true" />
                  </span>
                  Login
                </>
              )}
            </button>
        </div>
        </form>
        <div className="mt-6 font-semibold text-base text-slate-500 text-center md:text-left font-[BebasNeue]">
          Don't have an account? <a className="text-blue-600 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="/register">Register</a>
        </div>
         <ToastContainer />
      </div>
    </section>
  );
}
