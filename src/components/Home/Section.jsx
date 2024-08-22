import React from 'react';
import { motion } from 'framer-motion';
import Nav from "./Nav";

const Section = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      exit={{ opacity: 0, y: -50 }} // Animation when component is unmounted
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Nav />
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
        {/* Add your content here */}
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="relative py-16 flex justify-center px-4 sm:px-0">
          <div className="max-w-3xl text-center">
            <div className="pb-4">
              <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-orange-400">Unlock the potential of AI in education.</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">Visitor Management System</h1>
            <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16">Smoothen your guest’s arrival through digitized check in.
              Make the process of check-in shift from messy paper work to an organized digital process.</p>
            <div className="mt-8 flex w-full space-x-8 justify-center">
              <a href="/login">
                {/* Add your login button here */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
