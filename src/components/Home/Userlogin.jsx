import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image from "./images/sviet logo.jpg"
import { motion } from 'framer-motion';

const Userlogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
    
      const changeHandle = (e) => {
        
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        // console.log(loginData);
    };
      const submitHandle = async (e) => {
        // console.log(loginData);
        e.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:9000/userlogin",
            loginData
          )
          .then((res)=> {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
          })

          navigate("/student")
          toast.success(response.data.message);
        } catch (err) {
          toast.error(err.response.data.message);
        }
      };
    
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }} // Initial animation values
    animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
    exit={{ opacity: 0, y: -50 }} // Animation when component is unmounted
    transition={{ duration: 0.5 }} // Animation duration
  >
<div>
<header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="relative flex items-center">
                    <a href="/">
                        <img className="block h-12 w-auto" height="32" src={Image} alt="Logo" />
                    </a>
                </div>
                <div className="flex-grow"></div>
                <div className="hidden items-center justify-center gap-6 md:flex">
                  
                    <a
                        className="rounded-md bg-orange-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-black-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" href="/section2">
                        Go to Back
                    </a>
                    </div>
                </nav>
                </header>
                <div className="flex">
            <div className='w-1/2 p-5 mt-5'>
                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
    <div class="bg-grey-lighter min-h-screen flex flex-col w-1/2 p-1">
     
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="text-center font-bold text-3xl ">Visitor's Login</div>
        <br></br>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          {/* <h1 class="mb-8 text-3xl text-center">Sign up</h1> */}
          <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            onChange={changeHandle}
            required
            value={loginData.email}
            placeholder="Email"
          />

          

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            onChange={changeHandle}
            required
            value={loginData.password}
            placeholder="Password"
          />
          

          <button
            type="submit"
            onClick={submitHandle}
            class="w-full text-center py-3 rounded bg-orange-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Log in
          </button>

          

        <div class="text-grey-dark mt-6">
          Create new account?
          <Link to="/signup">
            <span class="no-underline border-b border-blue text-blue">
              Sign up
            </span>
          </Link>
          .
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </motion.div>
  )
}

export default Userlogin