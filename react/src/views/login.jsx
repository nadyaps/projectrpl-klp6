import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function login() {
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
        <input className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]" type="text" placeholder="Email Address" />
        <input className="text-base w-full px-5 py-3 border border-solid border-gray-300 rounded mb-5 font-[BebasNeue]" type="password" placeholder="Password" />
        <div className="flex justify-between font-semibold text-base mb-5">
          <label className="flex text-slate-500 font-[BebasNeue] hover:text-slate-600 cursor-pointer">
            <input className="mr-2" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-lg font-medium font-[BebasNeue] text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            type="submit"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 " aria-hidden="true" />
            </span>
            Login
          </button>
        </div>
        <div className="mt-6 font-semibold text-base text-slate-500 text-center md:text-left font-[BebasNeue]">
          Don't have an account? <a className="text-blue-600 hover:underline hover:underline-offset-4 font-[BebasNeue]" href="/register">Register</a>
        </div>
      </div>
    </section>
  );
}
