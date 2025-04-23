import React from "react";
import { Card, CardContent, Button } from '@mui/material';
import { useState } from "react";


import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import TopCompanies from "./TopCompanies";
import Social from "./Social";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
  },
  {
    title: "Backend Engineer",
    company: "DataFlow",
    location: "Bangalore",
    image: "https://c1.wallpaperflare.com/preview/836/993/134/code-coding-web-development.jpg",
  },
  {
    title: "Full Stack Developer",
    company: "Stackify",
    location: "Hyderabad",
    image: "https://camo.githubusercontent.com/60633e0cc071b30e1e0d6152b13132ba7d9fffc8442fbbbf1230a32b458328e3/68747470733a2f2f692e6d6f72696f682e636f6d2f3230303532302f38313562306638312e6a7067",
  },
];




export default function Home() {

  const [isDark, setIsDark] = useState(false);

const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className={`w-full min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
  <Navbar toggleTheme={toggleTheme} isDark={isDark} />
  <Searchbar isDark={isDark} />
    
    <div className="min-h-screen  bg-white px-6 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Job</h1>
        <p className="text-lg text-gray-600">Browse top tech jobs and apply in seconds</p>
        <Button className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg rounded-2xl overflow-hidden bg-white transition-all duration-300"
          >
            <Card>
              <img src={job.image} alt={job.title} className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500 text-sm">{job.location}</p>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

     <TopCompanies isDark={isDark}/>

      <Social/>

    <footer className="mt-16 bg-white text-teal-800 py-12 px-6 md:px-12 shadow-inner">
        <div className="grid md:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <div>
            <h4 className="text-xl font-semibold mb-4">JobSync AI</h4>
            <p>Your trusted partner in finding the perfect tech job. We connect job seekers with top companies.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Frontend Development</a></li>
              <li><a href="#" className="hover:text-blue-600">Backend Development</a></li>
              <li><a href="#" className="hover:text-blue-600">Full Stack Bootcamp</a></li>
              <li><a href="#" className="hover:text-blue-600">Career Guidance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600">Report a Problem</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-2">
              <li>Email: support@jobsyncai.com</li>
              <li>Phone: +91 99999 99999</li>
              <li>Address: 92/b,BKguda rd, Hyderabad, India</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} JobSync AI. All rights reserved.
        </div>
      </footer>



    </div>
    </div>
  );
}
