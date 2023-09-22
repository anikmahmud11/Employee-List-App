import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-green-300 via-red-200 to-purple-300 ">
        <div className="relative isolate px-6 pt-0 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-38 lg:py-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                data-aos="fade-up"
                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Announcing our next round of funding.{" "}
                <Link href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1
                data-aos="fade-up"
                className="text-3xl md:text-4xl xl:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Discover a Diverse Community of Employees
              </h1>
              <p
                data-aos="fade-down"
                className="mt-6 text-lg leading-8 text-gray-500"
              >
                Welcome to our Employee List website, your gateway to a rich and
                diverse community of users from all walks of life. We invite you
                to embark on a journey of exploration as you delve into the
                profiles of our incredible users and uncover the stories and
                details that make each individual unique.
              </p>
              <div
                data-aos="fade-down"
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  to="/user-list"
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
