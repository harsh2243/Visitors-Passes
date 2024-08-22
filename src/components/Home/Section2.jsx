import React from 'react';
import { Link } from "react-router-dom";
import teacher from "./images/teacherlogo.jpg"
import student from "./images/stdlogo.jpg"
import family from "./images/familylogo.jpg"
import Image from "./images/sviet logo.jpg"
import { motion } from 'framer-motion';

// import Home from './Home';
// import Admin from '../Admin/Admin';
// import Adminlogin from './Adminlogin';
// import Userlogin from './Userlogin';
// import Student from '../Student/Student';
// import Adminsignup from '../Adminsignup';
// import Userprofile from '../Student/student_component/Userprofile';
// import Userhistory from '../Student/student_component/Userhistory';
// import Userrequest from '../Student/student_component/Userrequest';
// import Regularpass from '../Student/student_component/Regularpass';
// import Requests from '../Admin/admincomponents/Requests';
// import Accepted_requests from '../Admin/admincomponents/Accepted_requests';
// import Rejected_requests from '../Admin/admincomponents/Rejected_requests';
// import Addusers from '../Admin/admincomponents/Addusers';
// import Signup from '../Home/Signup';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function Section2() {
   
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }} // Initial animation values
    animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
    exit={{ opacity: 0, y: -50 }} // Animation when component is unmounted
    transition={{ duration: 0.5 }} // Animation duration
  >
    <div>
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
                        className="rounded-md bg-orange-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-black-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" href="/">
                        Go to Back
                    </a>
                    </div>
                </nav>
                </header>
        </div>
    <section className='flex w-full'>
      {/* Image Section */}
      <div className='w-1/2 p-5'>
        <img src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148890148.jpg" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      {/* Column Section */}
      <div className='w-1/2 p-5 mt-5'>
        <div className='font-bold text-2xl'>Welcome to SVIET!</div>
        <div className=' text-sm'>Choose an account type to proceed </div>
        <div>
          <div>
            <Link to="/userlogin" className="text-black text-decoration-none">
              <div className='flex border-solid border-1 border-gray-500 rounded-md p-2 m-2  w-3/4'>
                <div> <img className="block h-16 w-auto" height="32" src={teacher} alt="Logo" /></div>
                <div>
                  <h2 className='text-lg '>Visitor's Login</h2>
                  <p className='text-sm '>I'm an educator/school/admin/IT specialist.</p>
                </div>
              </div>
            </Link>
            <Link to="/signup" className="text-black text-decoration-none">
              <div className='flex border-solid border-1 border-gray-500 rounded-md p-2 m-2 w-3/4' >
                <div> <img className="block h-16 p-2 w-auto" height="32" src={student} alt="Logo" /></div>
                <div>
                  <h2 className='text-lg '>Visitor's Signup</h2>
                  <p className='text-sm '>I'm a student.</p>
                </div>
              </div>
            </Link>
            <Link to="/adminlogin" className="text-black text-decoration-none">
              <div className='flex border-solid border-1 border-gray-500 rounded-md p-2 m-2 w-3/4'>
                <div> <img className="block h-16 w-auto" height="32" src={family} alt="Logo" /></div>
                <div>
                  <h2 className='text-lg '>Admin Login</h2>
                  <p className='text-sm '>I'm a family member.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>Here as a visitor ? <a className='text-decoration-none' href="/userlogin"><span className='text-orange-500'>login here</span></a></div><br></br>
        <div>By signing in you agree to our Privacy Policy, Terms of Use and Cookie Policy.
          ©Teacher Tools Private Limited. All Rights Reserved.</div>
      </div>
    </section>
    </div>
    </motion.div>
  );
}

export default Section2;
