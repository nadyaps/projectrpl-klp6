import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import axiosClient from '../axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState({ __html: '' });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: '' });

    axiosClient.post('/signup', {
      name,
      email,
      username,
      password,
      address,
      phone,
      password_confirmation: passwordConfirm,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
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
        
        <form onSubmit={onSubmit} action="{{route('register')}}" method="POST" className="space-y-6">
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded font-[BebasNeue]"
            id="name"
            type="text"
            name ="name"
            autoComplete='name'
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="username"
            type="text"
            name ="username"
            autoComplete='username'
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="email"
            type="email"
            name ="email"
            autoComplete='email'
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="address"
            type="text"
            name ="address"
            autoComplete='address'
            required
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="phone"
            type="number"
            placeholder="Phone"
            name ="phone"
            autoComplete='phone'
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="current-password"
            type="password"
            placeholder="Password"
            name ="current-password"
            autoComplete='current-password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name ="confirm-password"
            autoComplete='confirm-password'
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <div className="text-center md:text-left">
            <button
              className="mt-6 group relative flex w-full justify-center font-[BebasNeue] rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 font-[BebasNeue] text-lg" aria-hidden="true" />
              </span>
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 font-semibold text-base text-slate-500 text-center md:text-left font-[BebasNeue]">
          Already have an account? <a className="text-blue-600 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="/login">Login</a>
        </div>
      </div>
    </section>
  );
}
