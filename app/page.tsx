'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to Your Agency
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 animate-fade-in-up">
          Innovating solutions for a digital future
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Web Development</h2>
          <p className="text-lg">Crafting responsive, high-performance websites tailored to your business needs.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Digital Marketing</h2>
          <p className="text-lg">Driving targeted traffic and maximizing conversions with data-driven strategies.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Branding & Design</h2>
          <p className="text-lg">Building strong brand identities and captivating visual experiences.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">SEO & Content</h2>
          <p className="text-lg">Boosting your visibility and engaging your audience with compelling content.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Cloud Solutions</h2>
          <p className="text-lg">Scalable and secure cloud infrastructure to power your applications.</p>
        </div>

        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Consulting</h2>
          <p className="text-lg">Expert guidance to navigate the complexities of the digital landscape.</p>
        </div>
      </section>

      <footer className="mt-12 text-purple-300 text-lg">
        &copy; 2024 Your Agency. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
