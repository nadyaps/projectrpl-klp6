import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import axiosClient from '../axios.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'; 
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true); // Set loading to true when the request starts

    // Check if password and confirmation match
    if (password !== password_confirmation) {
      setLoading(false); // Set loading to false
      toast.error('Password dan konfirmasi password tidak cocok');
      return;
    }

    axiosClient.post("/signup", {
      name,
      email,
      username,
      password,
      address,
      phone,
      password_confirmation: password_confirmation,
    })
      .then(({ data }) => {
        setLoading(false); // Set loading to false when the request completes
        toast.success('Registrasi berhasil...', {
          onClose: () => navigate('/login')
        });
        setCurrentUser(data.user)
        setUserToken(data.token)
      })
      .catch(err => {
        setLoading(false); // Set loading to false when the request completes
        const response = err.response;
        if (response && response.status === 500) {
          toast.error('Email sudah terdaftar...');
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
          <h1 className="text-3xl text-center md:text-5xl font-[BebasNeue]">Register</h1>
          <p className="text-base text-center text-slate-500 mt-4 mb-8 font-[BebasNeue]">
            Create your account by filling in the information below
          </p>
        </div>
        
        <form onSubmit={onSubmit} action="{{route('signup')}}" className="space-y-6">
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded font-[BebasNeue]"
            id="name"
            type="text"
            name="name"
            autoComplete='name'
            required
            placeholder="Full Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="username"
            type="text"
            name="username"
            autoComplete='username'
            required
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
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
            id="address"
            type="text"
            name="address"
            autoComplete='address'
            required
            placeholder="Address"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="phone"
            type="number"
            placeholder="Phone"
            name="phone"
            autoComplete='phone'
            required
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
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
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            autoComplete='confirm-password'
            required
            value={password_confirmation}
            onChange={(ev) => setPasswordConfirm(ev.target.value)}
          />
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
                  Register
                </>
              )}
            </button>
          </div>
        </form>
        <div className="mt-6 font-semibold text-base text-slate-500 text-center md:text-left font-[BebasNeue]">
          Already have an account? <a className="text-blue-600 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="/login">Login</a>
        </div>
        <ToastContainer /> {/* Toast container for displaying notifications */}
      </div>
    </section>
  );

}
