import Head from 'next/head'
import { Inter } from 'next/font/google'
import { createClient } from 'next-sanity'
import PortableText from 'react-portable-text'
import imageUrlBuilder from '@sanity/image-url'
import React, { useRef, useState } from 'react';
import getYouTubeId from 'get-youtube-id'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { EffectCoverflow } from "swiper";

import { motion, AnimatePresence, useAnimation } from "framer-motion"
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Sidebar from './components/sidebar'
import 'animate.css';
import Marquee from "react-fast-marquee";



function getID(url) {
  const id = getYouTubeId(url)
  return (id)
}



export default function Home({ OurClients, About, Thumbnails, Videos, Reels, Testimonials, Social }) {

  const client = createClient({
    projectId: "q68y7acx",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }


  const Varient = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
    hidden: {
      opacity: 0,
      y: 55,
    }


  };


  const Client_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");

      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <AnimatePresence>

        <motion.div
          initial="hidden"
          ref={ref}
          animate={control}
          variants={Varient}
          className="flex flex-wrap justify-center -mx-4 top-clients">


          {OurClients.map((item) => {

            return (

              <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
                <div className="mb-10">
                  <div className="
                      relative
                      w-[170px]
                      h-170px]
                      rounded-full
                      z-10
                      mx-auto
                      mb-6
                     
                    ">
                    {/* <img src="assets/Images/Unacademy.jpg" alt="image" className="w-full rounded-full" /> */}
                    <img src={urlFor(item.clientimage).url()} className='w-full rounded-full'></img>

                    <span className="absolute top-0 left-0 z-[-1]">
                      <svg width="71" height="82" viewBox="0 0 71 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1.29337" cy="80.7066" r="1.29337" transform="rotate(-90 1.29337 80.7066)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="80.7066" r="1.29337" transform="rotate(-90 12.6747 80.7066)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="80.7066" r="1.29337" transform="rotate(-90 24.0575 80.7066)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="80.7066" r="1.29337" transform="rotate(-90 35.4379 80.7066)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="80.7066" r="1.29337" transform="rotate(-90 46.8197 80.7066)"
                          fill="#3056D3" />
                        <circle cx="68.807" cy="80.7066" r="1.29337" transform="rotate(-90 68.807 80.7066)" fill="#3056D3" />
                        <circle cx="57.9443" cy="80.7066" r="1.29337" transform="rotate(-90 57.9443 80.7066)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="69.3249" r="1.29337" transform="rotate(-90 1.29337 69.3249)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="69.3249" r="1.29337" transform="rotate(-90 12.6747 69.3249)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="69.3249" r="1.29337" transform="rotate(-90 24.0575 69.3249)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="69.3249" r="1.29337" transform="rotate(-90 35.4379 69.3249)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="69.325" r="1.29337" transform="rotate(-90 46.8197 69.325)" fill="#3056D3" />
                        <circle cx="68.807" cy="69.325" r="1.29337" transform="rotate(-90 68.807 69.325)" fill="#3056D3" />
                        <circle cx="57.9433" cy="69.325" r="1.29337" transform="rotate(-90 57.9433 69.325)" fill="#3056D3" />
                        <circle cx="1.29337" cy="57.9433" r="1.29337" transform="rotate(-90 1.29337 57.9433)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="24.0568" r="1.29337" transform="rotate(-90 1.29337 24.0568)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="57.9433" r="1.29337" transform="rotate(-90 12.6747 57.9433)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="24.0568" r="1.29337" transform="rotate(-90 12.6747 24.0568)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="57.9433" r="1.29337" transform="rotate(-90 24.0575 57.9433)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="24.0568" r="1.29337" transform="rotate(-90 24.0575 24.0568)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="57.9433" r="1.29337" transform="rotate(-90 35.4379 57.9433)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="24.0568" r="1.29337" transform="rotate(-90 35.4379 24.0568)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="57.9431" r="1.29337" transform="rotate(-90 46.8197 57.9431)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="24.0567" r="1.29337" transform="rotate(-90 46.8197 24.0567)"
                          fill="#3056D3" />
                        <circle cx="68.807" cy="57.9431" r="1.29337" transform="rotate(-90 68.807 57.9431)" fill="#3056D3" />
                        <circle cx="68.807" cy="24.0567" r="1.29337" transform="rotate(-90 68.807 24.0567)" fill="#3056D3" />
                        <circle cx="57.9433" cy="57.9431" r="1.29337" transform="rotate(-90 57.9433 57.9431)"
                          fill="#3056D3" />
                        <circle cx="57.9443" cy="24.0567" r="1.29337" transform="rotate(-90 57.9443 24.0567)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="46.5615" r="1.29337" transform="rotate(-90 1.29337 46.5615)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="12.6751" r="1.29337" transform="rotate(-90 1.29337 12.6751)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="46.5615" r="1.29337" transform="rotate(-90 12.6747 46.5615)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="12.6751" r="1.29337" transform="rotate(-90 12.6747 12.6751)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="46.5615" r="1.29337" transform="rotate(-90 24.0575 46.5615)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="12.6751" r="1.29337" transform="rotate(-90 24.0575 12.6751)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="46.5615" r="1.29337" transform="rotate(-90 35.4379 46.5615)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="12.6751" r="1.29337" transform="rotate(-90 35.4379 12.6751)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="46.5615" r="1.29337" transform="rotate(-90 46.8197 46.5615)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="12.6751" r="1.29337" transform="rotate(-90 46.8197 12.6751)"
                          fill="#3056D3" />
                        <circle cx="68.807" cy="46.5615" r="1.29337" transform="rotate(-90 68.807 46.5615)" fill="#3056D3" />
                        <circle cx="68.807" cy="12.6751" r="1.29337" transform="rotate(-90 68.807 12.6751)" fill="#3056D3" />
                        <circle cx="57.9433" cy="46.5615" r="1.29337" transform="rotate(-90 57.9433 46.5615)"
                          fill="#3056D3" />
                        <circle cx="57.9443" cy="12.6751" r="1.29337" transform="rotate(-90 57.9443 12.6751)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="35.1798" r="1.29337" transform="rotate(-90 1.29337 35.1798)"
                          fill="#3056D3" />
                        <circle cx="1.29337" cy="1.2933" r="1.29337" transform="rotate(-90 1.29337 1.2933)" fill="#3056D3" />
                        <circle cx="12.6747" cy="35.1798" r="1.29337" transform="rotate(-90 12.6747 35.1798)"
                          fill="#3056D3" />
                        <circle cx="12.6747" cy="1.2933" r="1.29337" transform="rotate(-90 12.6747 1.2933)" fill="#3056D3" />
                        <circle cx="24.0575" cy="35.1798" r="1.29337" transform="rotate(-90 24.0575 35.1798)"
                          fill="#3056D3" />
                        <circle cx="24.0575" cy="1.29336" r="1.29337" transform="rotate(-90 24.0575 1.29336)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="35.1798" r="1.29337" transform="rotate(-90 35.4379 35.1798)"
                          fill="#3056D3" />
                        <circle cx="35.4379" cy="1.29336" r="1.29337" transform="rotate(-90 35.4379 1.29336)"
                          fill="#3056D3" />
                        <circle cx="46.8197" cy="35.18" r="1.29337" transform="rotate(-90 46.8197 35.18)" fill="#3056D3" />
                        <circle cx="46.8197" cy="1.29354" r="1.29337" transform="rotate(-90 46.8197 1.29354)"
                          fill="#3056D3" />
                        <circle cx="68.807" cy="35.18" r="1.29337" transform="rotate(-90 68.807 35.18)" fill="#3056D3" />
                        <circle cx="68.807" cy="1.29354" r="1.29337" transform="rotate(-90 68.807 1.29354)" fill="#3056D3" />
                        <circle cx="57.9443" cy="35.18" r="1.29337" transform="rotate(-90 57.9443 35.18)" fill="#3056D3" />
                        <circle cx="57.9443" cy="1.29354" r="1.29337" transform="rotate(-90 57.9443 1.29354)"
                          fill="#3056D3" />
                      </svg>
                    </span>
                    <span className="absolute right-0 bottom-0">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                          stroke="#13C296" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-medium text-lg text-dark mb-2">
                      {item.caption}
                    </h4>

                  </div>
                </div>
              </div>
            )
          })}

        </motion.div>
      </AnimatePresence>

    );
  };
  const Service_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        className="flex flex-wrap justify-center -mx-4 top-clients">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className='flex  p-8 w-full bg-[#F3F4Fe] rounded-lg overflow-hidden mx-auto'>
              <div
                className=" hover:shadow-2xl relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl -rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
                  style={{ zIndex: -1 }}></div>
                <h3 className="z-10 p-2 text-2xl font-semibold text-purple-900">VIDEO EDITING</h3>
                <div className="z-10 p-2 text-purple-900">
                  <svg className="fill-current pl-4" height="96" viewBox="0 0 712 512" width="96">
                    <path fill-rule="nonzero"
                      d="M63.64 0h256.87c17.41 0 33.28 7.24 44.81 18.77 11.6 11.6 18.82 27.62 18.82 45v2.94L493.42 18.3c6.69-2.94 14.5.1 17.44 6.78.76 1.73 1.13 3.55 1.13 5.33l.01 268.98c0 7.31-5.94 13.25-13.25 13.25-2.28 0-4.42-.58-6.3-1.6l-108.31-50.06v5.05c0 17.33-7.28 33.29-18.88 44.9l-.08.08c-11.55 11.52-27.46 18.78-44.67 18.78H63.64c-17.28 0-33.21-7.19-44.8-18.76C7.23 299.4 0 283.49 0 266.03V63.77c0-17.54 7.18-33.49 18.73-45.05C30.28 7.18 46.18 0 63.64 0zm108.31 227.68-46.14 12.29 6.68-49.51 39.46 37.22zm45.02-136.42c1.19-1.37 3.64-2 5.33-.8l34.96 31.8c1.48 1.48 1.42 3.75-.12 5.34l-75.16 88.83-39.42-37.22 74.41-87.95zm168.1 3.97v137.06l100.44 46.42V50.75L385.07 95.23zm-64.56-68.74H63.64a37.36 37.36 0 0 0-26.47 10.96c-6.75 6.75-10.95 16.07-10.95 26.32v202.26c0 10.18 4.22 19.45 10.95 26.16 6.86 6.87 16.28 11.11 26.47 11.11h256.87c10.14 0 19.52-4.29 26.32-11.11 6.83-6.82 11.09-16.11 11.09-26.16V63.77c0-10.11-4.24-19.47-11.04-26.27-6.76-6.75-16.11-11.01-26.37-11.01z" />
                  </svg>
                </div>
                <div className="z-10 p-2 text-sm text-center text-gray-500 "></div>
              </div>
            </div>
          </div>
          {/* Graphic Designing */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className='flex  p-8 w-full bg-[#F3F4Fe]  rounded-lg overflow-hidden mx-auto'>
              <div
                className="hover:shadow-2xl relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl -rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
                  style={{ zIndex: -1 }}></div>
                <h3 className="z-10 p-2 text-2xl font-semibold text-purple-900">GRAPHIC DESIGNING</h3>
                <div className="z-10 p-2 text-purple-900">
                  <svg className="fill-current pl-2" height="96" viewBox="0 0 150 100" width="96">
                    <path className="cls-1"
                      d="M16.3,0H106a2.15,2.15,0,0,1,2.14,2.14V39.52l-3.36-2.27V8.91h-87V61.35h87V55.77l3.36,1.51v5.19a2.19,2.19,0,0,1-.39,1.23h11.76a3.35,3.35,0,0,1,0,6.69H3.35a3.35,3.35,0,1,1,0-6.69h11.2a2.12,2.12,0,0,1-.39-1.23V2.14A2.14,2.14,0,0,1,16.3,0ZM28.74,3.45a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm-4.51,0a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm-4.51,0a1.29,1.29,0,1,1-1.29,1.29,1.29,1.29,0,0,1,1.29-1.29Zm38.2,62h7a1.2,1.2,0,0,1,1.2,1.2h0a1.2,1.2,0,0,1-1.2,1.2h-7a1.2,1.2,0,0,1-1.2-1.2h0a1.2,1.2,0,0,1,1.2-1.2Z" />
                    <path className="cls-2"
                      d="M37.25,45.05c-.92,0-.92-3.42,0-3.42H74.17a10.55,10.55,0,0,0,5.17,1.82,11,11,0,0,0,4.14-.37l1.89,2Zm-11.89,0c-.91,0-.91-3.42,0-3.42H34c.91,0,.91,3.42,0,3.42Zm-.29-7.15c-.92,0-.92-3.42,0-3.42H33.7c.91,0,.91,3.42,0,3.42Zm12.18,0c-.92,0-.92-3.42,0-3.42H69.3l.1.22c.51,1.1,1,2.18,1.59,3.2Z" />
                    <path className="cls-3"
                      d="M78.16,13h17A2.77,2.77,0,0,1,98,15.73V26.58a2.77,2.77,0,0,1-2.76,2.76H89.51a11.07,11.07,0,0,0-1.75-2.49A15.21,15.21,0,0,0,80,22.55a21.7,21.7,0,0,0-4.62-.5V15.73A2.77,2.77,0,0,1,78.16,13Z" />
                    <path className="cls-4"
                      d="M52.68,13h17a2.77,2.77,0,0,1,2.75,2.76v6.45c-1.39.14-2.67.34-3.74.54A4.53,4.53,0,0,0,65.1,28a4.4,4.4,0,0,0,.48,1.36H52.68a2.76,2.76,0,0,1-2.75-2.76V15.73A2.76,2.76,0,0,1,52.68,13Z" />
                    <path className="cls-5"
                      d="M27.2,13h17A2.77,2.77,0,0,1,47,15.73V26.58a2.78,2.78,0,0,1-2.76,2.76h-17a2.76,2.76,0,0,1-2.75-2.76V15.73A2.76,2.76,0,0,1,27.2,13Z" />
                    <path className="cls-1"
                      d="M69.55,27.17c4.64,3.09,4,11.12,10.26,11.78a6.49,6.49,0,0,0,4.93-1.61,4.15,4.15,0,0,0,1.34-2.7c.4-4.15-3.4-6.86-7-7.68a24.48,24.48,0,0,0-9.48.21Zm19,8.21a6.25,6.25,0,0,1-2.33,4l4.78,5a18.69,18.69,0,0,0,4.64-8.07,31.63,31.63,0,0,1-7.09-.95Zm8.29,1.93a21,21,0,0,1-4.48,7.93l22.17,9.95a6.26,6.26,0,0,0,1.46.54,2.36,2.36,0,0,0,2.74-2.92,2.77,2.77,0,0,0-1.21-1.45l-20.68-14Z" />
                  </svg>
                </div>
                <div className="z-10 p-2 text-sm text-center text-gray-500 "></div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className='flex  p-8 w-full bg-[#F3F4Fe]  rounded-lg overflow-hidden mx-auto'>
              <div
                className="hover:shadow-2xl relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl -rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl rotate-2 "
                  style={{ zIndex: -1 }}></div>
                <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
                  style={{ zIndex: -1 }}></div>
                <h3 className="z-10 p-2 text-2xl font-semibold text-purple-900">SOCIAL MEDIA </h3>
                <div className="z-10 p-2 text-purple-900">
                  <svg className="fill-current pt-4" height="96" viewBox="0 0 100 200" width="96">
                    <path className="st0"
                      d="M12.6,26.42h96.77v43.73H85.36c-0.68-0.87-1.52-1.52-2.44-2.04c-2.88-1.61-10.38-2.13-13.46-4.31l0,0 c-0.02-0.03-0.04-0.05-0.06-0.07c-0.69-0.69-1.22-1.47-1.75-2.25c-0.12-0.17-0.23-0.35-0.35-0.51c1.3-1.29,2.3-2.91,3.28-4.53 l2.68-4.41c0.01-0.03,0.02-0.05,0.04-0.08l0,0c0.63-1.42,0.83-2.47,0.64-3.21c-0.17-0.67-0.58-1.08-1.24-1.28l0,0l0.15-6.09 c-0.17-2.48-1-4.35-2.3-5.76c-2.6-2.81-8.11-5.51-11.83-5.13c-0.77,0.08,0.08,1.76-0.66,1.97c-1.17,0.33-2.3,0.83-3.32,1.48 c-1.86,1.19-3.36,2.91-3.97,5.06c-0.14,0.51-0.24,1.01-0.29,1.52c-0.1,2.14-0.04,4.69,0.11,6.71c-0.21,0.08-0.4,0.18-0.57,0.29 c-0.36,0.25-0.63,0.57-0.81,0.94c-0.17,0.36-0.24,0.77-0.23,1.22c0.03,0.96,0.47,2.13,1.33,3.41l2.35,3.73 c0.71,1.13,1.46,2.29,2.32,3.31c-0.21,0.61-0.53,1.49-0.89,2.31c-0.24,0.54-0.48,1.04-0.71,1.38c-3.1,2.17-10.56,2.69-13.43,4.29 c-0.92,0.52-1.76,1.17-2.44,2.04H12.6V26.42L12.6,26.42L12.6,26.42z M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v78.87 c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,95.51,0,91.77,0,87.19V8.32C0,3.74,3.74,0,8.32,0L8.32,0L8.32,0z M117.97,20.1H5.29V88 c0,1.28,1.02,2.3,2.3,2.3h108.04c1.28,0,2.3-1.03,2.3-2.3V20.1H117.97L117.97,20.1L117.97,20.1z M106.64,7.22 c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11s-4.11-1.84-4.11-4.11C102.53,9.06,104.38,7.22,106.64,7.22L106.64,7.22 L106.64,7.22z M78.8,7.22c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C74.69,9.06,76.53,7.22,78.8,7.22L78.8,7.22L78.8,7.22z M92.72,7.22c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C88.61,9.06,90.45,7.22,92.72,7.22L92.72,7.22L92.72,7.22z M66.87,84.74c-1.78,0-3.22-1.57-3.22-3.5 c0-1.94,1.44-3.5,3.22-3.5h39.65c1.78,0,3.22,1.57,3.22,3.5s-1.44,3.5-3.22,3.5H66.87L66.87,84.74L66.87,84.74z M14.96,84.74 c-1.76,0-3.19-1.57-3.19-3.5c0-1.94,1.43-3.5,3.19-3.5h36.76c1.76,0,3.19,1.57,3.19,3.5s-1.43,3.5-3.19,3.5H14.96L14.96,84.74 L14.96,84.74z" />
                  </svg>
                </div>
                <div className="z-10 p-2 text-sm text-center text-gray-500 "></div>
              </div>
            </div>
          </div>


        </div>

      </motion.div>
    );
  };
  const Video_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 text-center">
        <h2 className="
          font-bold
          text-3xl
          sm:text-4xl
          md:text-[40px]
          text-dark
          mb-12
          animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
          
          ">
          Video Edit
        </h2>

        <div className="container">

          <div className="flex flex-wrap -mx-4 video swiper ">
            <Swiper
              spaceBetween={30}

              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                390: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                360: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
              }}
            >


              {Videos.map((items) => {

                return (

                  <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                    <SwiperSlide>
                      <div className="bg-white rounded-lg overflow-hidden mb-10 hover:shadow-2xl">
                        {/* <img src="assets/Images/TH1.png" alt="image" className="w-full" /> */}

                        <iframe id="player" type="text/html" className='w-full h-56'
                          src={`https://www.youtube.com/embed/${getID(items.youtube.url)}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                        ></iframe>


                      </div>
                    </SwiperSlide>
                  </div>
                )
              })}
            </Swiper>

          </div>
        </div>

      </motion.div>
    );
  };
  const Reel_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        class="w-full h-full py-24 sm:py-8 px-4 text-center">
        <h2 class="
            font-bold
            text-3xl
            sm:text-4xl
            md:text-[40px]
            text-dark
            mb-12
            animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
            
            ">
          Reel Edit
        </h2>

        <div class="w-full relative flex items-center justify-center">
          <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">

            <div class="container px-5 py-22 mx-auto">
              <div class="flex flex-wrap -m-4">
                <Swiper
                  spaceBetween={30}

                  slidesPerView={3}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{

                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    390: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                  }}

                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >


                  {Reels.map((items) => {

                    return (
                      <SwiperSlide>

                        <div class="xl:w-1/4 md:w-1/2 p-4">
                          <div class="bg-gray-100 rounded-lg hover:shadow-2xl">
                            <iframe width="320" height="560" scrolling='no' src={`${items.reels.url}embed`} ></iframe>
                          </div>
                        </div>
                      </SwiperSlide>

                    )
                  })}
                </Swiper>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    );
  };
  const Thumbnail_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 text-center ">
        <h2 className="
            font-bold
            text-3xl
            sm:text-4xl
            md:text-[40px]
            text-dark
            mb-12
            animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
            
            ">
          Graphic Work
        </h2>

        {/* Tailwind slider */}
        {/* <div class="flex flex-wrap py-2 sm:-m-4 -mx-4 -mb-10 -mt-4">
          <Marquee gradient={false} speed={50} pauseOnHover>
            {Thumbnails.map((items) => {


              return (
                <div class="p-4 sm:mb-0 mb-6">
                  <div class="rounded-xl h-[200px] md:h-[300px] lg:h-[400px] xl:h-[600px] overflow-hidden">
                    <img src={urlFor(items.thumbnailimg).url()} className="object-contain object-center h-full w-full" />
                  </div>

                </div>
              )
            })}

          </Marquee>
        </div> */}

        <div className="px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Marquee gradient={false} speed={45}>
              {Thumbnails.map((items) => {

                return (

                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative md:max-h-[500px] md:max-w-[400px] max-w-[200px] max-h-[300px] rounded-xl overflow-hidden">
                      <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={urlFor(items.thumbnailimg).url()} />
                    </a>

                  </div>
                )
              })}


            </Marquee>
          </div>
        </div>


      </motion.div >
    );
  };
  const Testimonials_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            breakpoints={{

              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              390: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              360: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,

            }}



            // pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >

            {Testimonials.map((items) => {

              return (

                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">

                  <SwiperSlide>
                    <div class="h-full text-center bg-white rounded-2xl">
                      <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-white" src={urlFor(items.image).url()} />

                      <p class="leading-relaxed">
                        <PortableText
                          // Pass in block content straight from Sanity.io
                          content={items.content}
                          // Optionally override marks, decorators, blocks, etc. in a flat
                          // structure without doing any gymnastics
                          serializers={{
                            h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                            li: ({ children }) => <li className="special-list-item">{children}</li>
                          }}
                        />
                      </p>
                      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{items.name}</h2>

                    </div>

                  </SwiperSlide>
                </div>
              )
            })}




          </Swiper>
        </div>
      </motion.div>
    );
  };
  const About_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        className="container">
        <div className="bg-white shadow-xl rounded-xl">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
            <span className="font-semibold text-lg text-primary mb-2 block pt-20">
              About
            </span>
            <h2 className="
          font-bold
          text-3xl
          sm:text-4xl
          md:text-[40px]
          text-dark
          mb-4
          animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
          ">
              My Professional Background
            </h2>

          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 -mt-8">
            {About.map((item) => {
              return <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">

                  <div className="mb-6 text-gray-900 text-lg">

                    <PortableText
                      // Pass in block content straight from Sanity.io
                      content={item.content}
                      // Optionally override marks, decorators, blocks, etc. in a flat
                      // structure without doing any gymnastics
                      serializers={{
                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>
                      }}
                    />

                  </div>

                  <hr className="mb-5 border-gray-300" />
                  <div className="flex items-center -mx-3">
                    {/* src={`${items.reels.url}embed`} */}

                    <a href={`${item.facebook}`} className="px-3  text-[#cdced6]
          hover:text-primary" target='_blank'>
                      <svg width="10" height="18" viewBox="0 0 10 18" className="fill-current">
                        <path
                          d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z" />
                      </svg>
                    </a>
                    <a href={`${item.twitter}`} className="px-3  text-[#cdced6]
          hover:text-primary" target='_blank'>
                      <svg width="19" height="15" viewBox="0 0 19 15" className="fill-current">
                        <path
                          d="M16.2622 3.17878L17.33 1.93293C17.6391 1.59551 17.7234 1.33595 17.7515 1.20618C16.9085 1.67337 16.1217 1.82911 15.6159 1.82911H15.4192L15.3068 1.72528C14.6324 1.18022 13.7894 0.894714 12.8902 0.894714C10.9233 0.894714 9.37779 2.40012 9.37779 4.13913C9.37779 4.24295 9.37779 4.39868 9.40589 4.5025L9.49019 5.02161L8.90009 4.99565C5.30334 4.89183 2.35288 2.03675 1.87518 1.5436C1.08839 2.84136 1.53799 4.08722 2.01568 4.86587L2.97107 6.31937L1.45369 5.54071C1.48179 6.63084 1.93138 7.48736 2.80247 8.11029L3.56116 8.62939L2.80247 8.9149C3.28017 10.2386 4.34795 10.7837 5.13474 10.9913L6.17443 11.2509L5.19094 11.8738C3.61736 12.912 1.65039 12.8342 0.779297 12.7563C2.54957 13.8983 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2631 16.4589 5.77431 16.4589 4.47655V4.29486L16.6275 4.19104C17.5829 3.36047 17.9763 2.91923 18.2011 2.65967C18.1168 2.68563 18.0044 2.73754 17.892 2.7635L16.2622 3.17878Z" />
                      </svg>
                    </a>
                    <a href={`${item.instagram}`} className="px-3  text-[#cdced6]
          hover:text-primary" target='_blank'>
                      <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                        <path
                          d="M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z" />
                        <path
                          d="M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z" />
                        <path
                          d="M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z" />
                      </svg>

                    </a>
                    <a href={`${item.linkedin}` || `javascript:void(0)`} className="px-3  text-[#cdced6]
          hover:text-primary" target='_blank'>
                      <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                        <path
                          d="M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>

                  <img src={urlFor(item.myimage).url()} className="object-cover w-full h-56 rounded shadow-lg sm:h-96" />
                </div>
              </div>
            })}
          </div>
        </div>

      </motion.div>
    );
  };
  const Contact_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.section
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        id="contact" className="py-20 md:py-[120px] relative">
        <div className="
      absolute
      z-[-1]
      w-full
      h-1/2
      lg:h-[45%]
      xl:h-1/2
      bg-[#f3f4fe]
      top-0
      left-0
    "></div>
        <div className="container px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="px-4 w-full lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="text-dark font-semibold text-base mb-5">
                    CONTACT US
                  </span>
                  <h2
                    className="text-[35px] font-semibold animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent">
                    Let's Talk
                  </h2>
                </div>
                <div className="flex flex-wrap justify-between mb-12 lg:mb-0">
                  <div className="flex max-w-full w-[330px] mb-8">
                    <div className="text-[32px] text-primary mr-6">
                      <svg width="29" height="35" viewBox="0 0 29 35" className="fill-current">
                        <path
                          d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                        <path
                          d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-6">Our Location</h5>
                      <p className="text-base text-body-color">
                Noida
              </p>
                    </div>
                  </div>
                  <div className="flex max-w-full w-[330px] mb-8">
                    <div className="text-[32px] text-primary mr-6">
                      <svg width="34" height="25" viewBox="0 0 34 25" className="fill-current">
                        <path
                          d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-6">How Can We Help?</h5>
                      <p className="text-base text-body-color"> connect@pixismedia.in</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full lg:w-5/12 xl:w-4/12">
              <div className="
            shadow-testimonial
            rounded-lg
            bg-white
            py-10
            px-8
            md:p-[60px]
            lg:p-10
            2xl:p-[60px]
            sm:py-12 sm:px-10
            lg:py-12 lg:px-10
          
          ">
                <h3 className="font-semibold mb-8 text-2xl md:text-[26px]">
                  Send us a Message
                </h3>
                <form action="https://formspree.io/f/mayzlwgo" method="POST">
                  <div className="mb-6">
                    <label for="fullName" className="block text-xs text-dark">Full Name*</label>
                    <input type="text" name="fullName" placeholder="Adam Gelius" className="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                " />
                  </div>
                  <div className="mb-6">
                    <label for="email" className="block text-xs text-dark">Email*</label>
                    <input type="email" name="email" placeholder="example@yourmail.com" className="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                " />
                  </div>

                  <div className="mb-6">
                    <label for="message" className="block text-xs text-dark">Message*</label>
                    <textarea name="message" rows="1" placeholder="type your message here" className="
                  w-full
                  border-0 border-b border-[#f1f1f1]
                  focus:border-primary focus:outline-none
                  py-4
                  resize-none
                "></textarea>
                  </div>
                  <div className="mb-0">
                    <button type="submit" className="
                  inline-flex
                  items-center
                  justify-center
                  py-4
                  px-6
                  rounded
                  text-white
                  bg-primary
                  text-base
                  font-medium
                  hover:bg-dark
                  transition
                  duration-300
                  ease-in-out
                ">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  const Footers_animation = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.footer
        initial="hidden"
        ref={ref}
        animate={control}
        variants={Varient}
        className="gradient pt-20 lg:pt-[120px] relative z-10 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12 px-4">
              <div className="w-full mb-10">

                <p className="text-base text-[#f3f4fe] mb-7">
                  We create digital experiences for brands and companies by using
                  technology.
                </p>
                {About.map((item) => {
                  return <div className="flex items-center -mx-3">


                    <a href={`${item.facebook}`} className="px-3 text-[#dddddd] hover:text-dark-700" target='_blank'>
                      <svg width="10" height="18" viewBox="0 0 10 18" className="fill-current">
                        <path
                          d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z" />
                      </svg>
                    </a>
                    <a href={`${item.twitter}`} className="px-3 text-[#dddddd] hover:text-dark-700" target='_blank'>
                      <svg width="19" height="15" viewBox="0 0 19 15" className="fill-current">
                        <path
                          d="M16.2622 3.17878L17.33 1.93293C17.6391 1.59551 17.7234 1.33595 17.7515 1.20618C16.9085 1.67337 16.1217 1.82911 15.6159 1.82911H15.4192L15.3068 1.72528C14.6324 1.18022 13.7894 0.894714 12.8902 0.894714C10.9233 0.894714 9.37779 2.40012 9.37779 4.13913C9.37779 4.24295 9.37779 4.39868 9.40589 4.5025L9.49019 5.02161L8.90009 4.99565C5.30334 4.89183 2.35288 2.03675 1.87518 1.5436C1.08839 2.84136 1.53799 4.08722 2.01568 4.86587L2.97107 6.31937L1.45369 5.54071C1.48179 6.63084 1.93138 7.48736 2.80247 8.11029L3.56116 8.62939L2.80247 8.9149C3.28017 10.2386 4.34795 10.7837 5.13474 10.9913L6.17443 11.2509L5.19094 11.8738C3.61736 12.912 1.65039 12.8342 0.779297 12.7563C2.54957 13.8983 4.65705 14.1579 6.11823 14.1579C7.21412 14.1579 8.02901 14.0541 8.2257 13.9762C16.0936 12.2631 16.4589 5.77431 16.4589 4.47655V4.29486L16.6275 4.19104C17.5829 3.36047 17.9763 2.91923 18.2011 2.65967C18.1168 2.68563 18.0044 2.73754 17.892 2.7635L16.2622 3.17878Z" />
                      </svg>
                    </a>
                    <a href={`${item.instagram}`} className="px-3 text-[#dddddd] hover:text-dark-700" target='_blank'>
                      <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                        <path
                          d="M8.91688 12.4995C10.6918 12.4995 12.1306 11.0911 12.1306 9.35385C12.1306 7.61655 10.6918 6.20819 8.91688 6.20819C7.14197 6.20819 5.70312 7.61655 5.70312 9.35385C5.70312 11.0911 7.14197 12.4995 8.91688 12.4995Z" />
                        <path
                          d="M12.4078 0.947388H5.37075C2.57257 0.947388 0.300781 3.17104 0.300781 5.90993V12.7436C0.300781 15.5367 2.57257 17.7604 5.37075 17.7604H12.3524C15.2059 17.7604 17.4777 15.5367 17.4777 12.7978V5.90993C17.4777 3.17104 15.2059 0.947388 12.4078 0.947388ZM8.91696 13.4758C6.56206 13.4758 4.70584 11.6047 4.70584 9.35389C4.70584 7.10312 6.58976 5.23199 8.91696 5.23199C11.2165 5.23199 13.1004 7.10312 13.1004 9.35389C13.1004 11.6047 11.2442 13.4758 8.91696 13.4758ZM14.735 5.61164C14.4579 5.90993 14.0423 6.07264 13.5714 6.07264C13.1558 6.07264 12.7402 5.90993 12.4078 5.61164C12.103 5.31334 11.9368 4.9337 11.9368 4.47269C11.9368 4.01169 12.103 3.65916 12.4078 3.33375C12.7125 3.00834 13.1004 2.84563 13.5714 2.84563C13.9869 2.84563 14.4302 3.00834 14.735 3.30663C15.012 3.65916 15.2059 4.06593 15.2059 4.49981C15.1782 4.9337 15.012 5.31334 14.735 5.61164Z" />
                        <path
                          d="M13.5985 3.82184C13.2383 3.82184 12.9336 4.12013 12.9336 4.47266C12.9336 4.82519 13.2383 5.12349 13.5985 5.12349C13.9587 5.12349 14.2634 4.82519 14.2634 4.47266C14.2634 4.12013 13.9864 3.82184 13.5985 3.82184Z" />
                      </svg>
                    </a>
                    <a href={`${item.linkedin}`} className="px-3 text-[#dddddd] hover:text-dark-700" target='_blank'>
                      <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
                        <path
                          d="M16.7821 0.947388H1.84847C1.14272 0.947388 0.578125 1.49747 0.578125 2.18508V16.7623C0.578125 17.4224 1.14272 18 1.84847 18H16.7257C17.4314 18 17.996 17.4499 17.996 16.7623V2.15757C18.0525 1.49747 17.4879 0.947388 16.7821 0.947388ZM5.7442 15.4421H3.17528V7.32837H5.7442V15.4421ZM4.44563 6.2007C3.59873 6.2007 2.94944 5.5406 2.94944 4.74297C2.94944 3.94535 3.62696 3.28525 4.44563 3.28525C5.26429 3.28525 5.94181 3.94535 5.94181 4.74297C5.94181 5.5406 5.32075 6.2007 4.44563 6.2007ZM15.4835 15.4421H12.9146V11.509C12.9146 10.5739 12.8864 9.33618 11.5596 9.33618C10.2045 9.33618 10.0069 10.3813 10.0069 11.4265V15.4421H7.438V7.32837H9.95046V8.45605H9.9787C10.3457 7.79594 11.1644 7.13584 12.4347 7.13584C15.0601 7.13584 15.54 8.7861 15.54 11.0414V15.4421H15.4835Z" />
                      </svg>
                    </a>
                  </div>
                })}
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-9">About Us</h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12 px-4">
      <div className="w-full mb-10">
        <h4 className="text-white text-lg font-semibold mb-9">Features</h4>
        <ul>
          <li>
            <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
              How it works
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
              Refund policy
            </a>
          </li>
        </ul>
      </div>
    </div> --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12 px-4">
              <div className="w-full mb-10">
                <h4 className="text-white text-lg font-semibold mb-9">
                  Our Services
                </h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Video Editing
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Graphic Designing
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Web Designing
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="
                  inline-block
                  text-base text-[#f3f4fe]
                  hover:text-dark-700
                  leading-loose
                  mb-2
                ">
                      Social Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-opacity-40 py-8 mt-12 lg:mt-[60px]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-2/3 lg:w-1/2 px-4">
                {/* <!-- <div className="my-1">
          <div className="
                flex
                items-center
                justify-center
                md:justify-start
                -mx-3
              ">
            <a href="javascript:void(0)" className="text-base text-[#f3f4fe]  hover:text-dark-700 px-3">
              Privacy policy
            </a>
            <a href="javascript:void(0)" className="text-base text-[#f3f4fe]  hover:text-dark-700 px-3">
              Legal notice
            </a>
            <a href="javascript:void(0)" className="text-base text-[#f3f4fe]  hover:text-dark-700 px-3">
              Terms of service
            </a>
          </div>
        </div> --> */}
              </div>
              <div className="w-full md:w-1/3 lg:w-1/2 px-4">
                <div className="flex justify-center md:justify-end my-1">
                  <p className="text-base text-[#f3f4fe]">
                    Designed and Developed by
                    <a href="https://harjotsingh.me" rel="nofollow noopner" target="_blank"
                      className="text-white hover:underline">
                      Harjot Singh
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <img src="assets/images/footer/shape-1.svg" alt="" />
          </span>

          <span className="absolute bottom-0 right-0 z-[-1]">
            <img src="assets/images/footer/shape-3.svg" alt="" />
          </span>

          <span className="absolute top-0 right-0 z-[-1]">
            <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.8667 33.1956C2.89765 33.1956 3.7334 34.0318 3.7334 35.0633C3.7334 36.0947 2.89765 36.9309 1.8667 36.9309C0.835744 36.9309 4.50645e-08 36.0947 0 35.0633C-4.50645e-08 34.0318 0.835744 33.1956 1.8667 33.1956Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 33.1956C19.3249 33.1956 20.1606 34.0318 20.1606 35.0633C20.1606 36.0947 19.3249 36.9309 18.2939 36.9309C17.263 36.9309 16.4272 36.0947 16.4272 35.0633C16.4272 34.0318 17.263 33.1956 18.2939 33.1956Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 33.195C35.7519 33.195 36.5876 34.0311 36.5876 35.0626C36.5876 36.0941 35.7519 36.9303 34.7209 36.9303C33.69 36.9303 32.8542 36.0941 32.8542 35.0626C32.8542 34.0311 33.69 33.195 34.7209 33.195Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 33.195C51.965 33.195 52.8008 34.0311 52.8008 35.0626C52.8008 36.0941 51.965 36.9303 50.9341 36.9303C49.9031 36.9303 49.0674 36.0941 49.0674 35.0626C49.0674 34.0311 49.9031 33.195 50.9341 33.195Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 16.7605C2.89765 16.7605 3.7334 17.5966 3.7334 18.6281C3.7334 19.6596 2.89765 20.4957 1.8667 20.4957C0.835744 20.4957 4.50645e-08 19.6596 0 18.6281C-4.50645e-08 17.5966 0.835744 16.7605 1.8667 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 16.7605C19.3249 16.7605 20.1606 17.5966 20.1606 18.6281C20.1606 19.6596 19.3249 20.4957 18.2939 20.4957C17.263 20.4957 16.4272 19.6596 16.4272 18.6281C16.4272 17.5966 17.263 16.7605 18.2939 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 16.7605C35.7519 16.7605 36.5876 17.5966 36.5876 18.6281C36.5876 19.6596 35.7519 20.4957 34.7209 20.4957C33.69 20.4957 32.8542 19.6596 32.8542 18.6281C32.8542 17.5966 33.69 16.7605 34.7209 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 16.7605C51.965 16.7605 52.8008 17.5966 52.8008 18.6281C52.8008 19.6596 51.965 20.4957 50.9341 20.4957C49.9031 20.4957 49.0674 19.6596 49.0674 18.6281C49.0674 17.5966 49.9031 16.7605 50.9341 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 0.324951C2.89765 0.324951 3.7334 1.16115 3.7334 2.19261C3.7334 3.22408 2.89765 4.06024 1.8667 4.06024C0.835744 4.06024 4.50645e-08 3.22408 0 2.19261C-4.50645e-08 1.16115 0.835744 0.324951 1.8667 0.324951Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 0.324951C19.3249 0.324951 20.1606 1.16115 20.1606 2.19261C20.1606 3.22408 19.3249 4.06024 18.2939 4.06024C17.263 4.06024 16.4272 3.22408 16.4272 2.19261C16.4272 1.16115 17.263 0.324951 18.2939 0.324951Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 0.325302C35.7519 0.325302 36.5876 1.16147 36.5876 2.19293C36.5876 3.2244 35.7519 4.06056 34.7209 4.06056C33.69 4.06056 32.8542 3.2244 32.8542 2.19293C32.8542 1.16147 33.69 0.325302 34.7209 0.325302Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 0.325302C51.965 0.325302 52.8008 1.16147 52.8008 2.19293C52.8008 3.2244 51.965 4.06056 50.9341 4.06056C49.9031 4.06056 49.0674 3.2244 49.0674 2.19293C49.0674 1.16147 49.9031 0.325302 50.9341 0.325302Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 33.1956C67.9346 33.1956 68.7704 34.0318 68.7704 35.0633C68.7704 36.0947 67.9346 36.9309 66.9037 36.9309C65.8727 36.9309 65.037 36.0947 65.037 35.0633C65.037 34.0318 65.8727 33.1956 66.9037 33.1956Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 33.1956C84.3616 33.1956 85.1974 34.0318 85.1974 35.0633C85.1974 36.0947 84.3616 36.9309 83.3307 36.9309C82.2997 36.9309 81.464 36.0947 81.464 35.0633C81.464 34.0318 82.2997 33.1956 83.3307 33.1956Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 33.1956C100.789 33.1956 101.624 34.0318 101.624 35.0633C101.624 36.0947 100.789 36.9309 99.7576 36.9309C98.7266 36.9309 97.8909 36.0947 97.8909 35.0633C97.8909 34.0318 98.7266 33.1956 99.7576 33.1956Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 16.7605C67.9346 16.7605 68.7704 17.5966 68.7704 18.6281C68.7704 19.6596 67.9346 20.4957 66.9037 20.4957C65.8727 20.4957 65.037 19.6596 65.037 18.6281C65.037 17.5966 65.8727 16.7605 66.9037 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 16.7605C84.3616 16.7605 85.1974 17.5966 85.1974 18.6281C85.1974 19.6596 84.3616 20.4957 83.3307 20.4957C82.2997 20.4957 81.464 19.6596 81.464 18.6281C81.464 17.5966 82.2997 16.7605 83.3307 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 16.7605C100.789 16.7605 101.624 17.5966 101.624 18.6281C101.624 19.6596 100.789 20.4957 99.7576 20.4957C98.7266 20.4957 97.8909 19.6596 97.8909 18.6281C97.8909 17.5966 98.7266 16.7605 99.7576 16.7605Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 0.324966C67.9346 0.324966 68.7704 1.16115 68.7704 2.19261C68.7704 3.22408 67.9346 4.06024 66.9037 4.06024C65.8727 4.06024 65.037 3.22408 65.037 2.19261C65.037 1.16115 65.8727 0.324966 66.9037 0.324966Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 0.324951C84.3616 0.324951 85.1974 1.16115 85.1974 2.19261C85.1974 3.22408 84.3616 4.06024 83.3307 4.06024C82.2997 4.06024 81.464 3.22408 81.464 2.19261C81.464 1.16115 82.2997 0.324951 83.3307 0.324951Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 0.324951C100.789 0.324951 101.624 1.16115 101.624 2.19261C101.624 3.22408 100.789 4.06024 99.7576 4.06024C98.7266 4.06024 97.8909 3.22408 97.8909 2.19261C97.8909 1.16115 98.7266 0.324951 99.7576 0.324951Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 82.2029C2.89765 82.2029 3.7334 83.039 3.7334 84.0705C3.7334 85.102 2.89765 85.9382 1.8667 85.9382C0.835744 85.9382 4.50645e-08 85.102 0 84.0705C-4.50645e-08 83.039 0.835744 82.2029 1.8667 82.2029Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 82.2029C19.3249 82.2029 20.1606 83.039 20.1606 84.0705C20.1606 85.102 19.3249 85.9382 18.2939 85.9382C17.263 85.9382 16.4272 85.102 16.4272 84.0705C16.4272 83.039 17.263 82.2029 18.2939 82.2029Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 82.2026C35.7519 82.2026 36.5876 83.0387 36.5876 84.0702C36.5876 85.1017 35.7519 85.9378 34.7209 85.9378C33.69 85.9378 32.8542 85.1017 32.8542 84.0702C32.8542 83.0387 33.69 82.2026 34.7209 82.2026Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 82.2026C51.965 82.2026 52.8008 83.0387 52.8008 84.0702C52.8008 85.1017 51.965 85.9378 50.9341 85.9378C49.9031 85.9378 49.0674 85.1017 49.0674 84.0702C49.0674 83.0387 49.9031 82.2026 50.9341 82.2026Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 65.7677C2.89765 65.7677 3.7334 66.6039 3.7334 67.6353C3.7334 68.6668 2.89765 69.503 1.8667 69.503C0.835744 69.503 4.50645e-08 68.6668 0 67.6353C-4.50645e-08 66.6039 0.835744 65.7677 1.8667 65.7677Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 65.7677C19.3249 65.7677 20.1606 66.6039 20.1606 67.6353C20.1606 68.6668 19.3249 69.503 18.2939 69.503C17.263 69.503 16.4272 68.6668 16.4272 67.6353C16.4272 66.6039 17.263 65.7677 18.2939 65.7677Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 65.7674C35.7519 65.7674 36.5876 66.6036 36.5876 67.635C36.5876 68.6665 35.7519 69.5027 34.7209 69.5027C33.69 69.5027 32.8542 68.6665 32.8542 67.635C32.8542 66.6036 33.69 65.7674 34.7209 65.7674Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 65.7674C51.965 65.7674 52.8008 66.6036 52.8008 67.635C52.8008 68.6665 51.965 69.5027 50.9341 69.5027C49.9031 69.5027 49.0674 68.6665 49.0674 67.635C49.0674 66.6036 49.9031 65.7674 50.9341 65.7674Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 98.2644C2.89765 98.2644 3.7334 99.1005 3.7334 100.132C3.7334 101.163 2.89765 102 1.8667 102C0.835744 102 4.50645e-08 101.163 0 100.132C-4.50645e-08 99.1005 0.835744 98.2644 1.8667 98.2644Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M1.8667 49.3322C2.89765 49.3322 3.7334 50.1684 3.7334 51.1998C3.7334 52.2313 2.89765 53.0675 1.8667 53.0675C0.835744 53.0675 4.50645e-08 52.2313 0 51.1998C-4.50645e-08 50.1684 0.835744 49.3322 1.8667 49.3322Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 98.2644C19.3249 98.2644 20.1606 99.1005 20.1606 100.132C20.1606 101.163 19.3249 102 18.2939 102C17.263 102 16.4272 101.163 16.4272 100.132C16.4272 99.1005 17.263 98.2644 18.2939 98.2644Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M18.2939 49.3322C19.3249 49.3322 20.1606 50.1684 20.1606 51.1998C20.1606 52.2313 19.3249 53.0675 18.2939 53.0675C17.263 53.0675 16.4272 52.2313 16.4272 51.1998C16.4272 50.1684 17.263 49.3322 18.2939 49.3322Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 98.2647C35.7519 98.2647 36.5876 99.1008 36.5876 100.132C36.5876 101.164 35.7519 102 34.7209 102C33.69 102 32.8542 101.164 32.8542 100.132C32.8542 99.1008 33.69 98.2647 34.7209 98.2647Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 98.2647C51.965 98.2647 52.8008 99.1008 52.8008 100.132C52.8008 101.164 51.965 102 50.9341 102C49.9031 102 49.0674 101.164 49.0674 100.132C49.0674 99.1008 49.9031 98.2647 50.9341 98.2647Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M34.7209 49.3326C35.7519 49.3326 36.5876 50.1687 36.5876 51.2002C36.5876 52.2317 35.7519 53.0678 34.7209 53.0678C33.69 53.0678 32.8542 52.2317 32.8542 51.2002C32.8542 50.1687 33.69 49.3326 34.7209 49.3326Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M50.9341 49.3326C51.965 49.3326 52.8008 50.1687 52.8008 51.2002C52.8008 52.2317 51.965 53.0678 50.9341 53.0678C49.9031 53.0678 49.0674 52.2317 49.0674 51.2002C49.0674 50.1687 49.9031 49.3326 50.9341 49.3326Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 82.2029C67.9346 82.2029 68.7704 83.0391 68.7704 84.0705C68.7704 85.102 67.9346 85.9382 66.9037 85.9382C65.8727 85.9382 65.037 85.102 65.037 84.0705C65.037 83.0391 65.8727 82.2029 66.9037 82.2029Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 82.2029C84.3616 82.2029 85.1974 83.0391 85.1974 84.0705C85.1974 85.102 84.3616 85.9382 83.3307 85.9382C82.2997 85.9382 81.464 85.102 81.464 84.0705C81.464 83.0391 82.2997 82.2029 83.3307 82.2029Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 82.2029C100.789 82.2029 101.624 83.039 101.624 84.0705C101.624 85.102 100.789 85.9382 99.7576 85.9382C98.7266 85.9382 97.8909 85.102 97.8909 84.0705C97.8909 83.039 98.7266 82.2029 99.7576 82.2029Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 65.7674C67.9346 65.7674 68.7704 66.6036 68.7704 67.635C68.7704 68.6665 67.9346 69.5027 66.9037 69.5027C65.8727 69.5027 65.037 68.6665 65.037 67.635C65.037 66.6036 65.8727 65.7674 66.9037 65.7674Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 65.7677C84.3616 65.7677 85.1974 66.6039 85.1974 67.6353C85.1974 68.6668 84.3616 69.503 83.3307 69.503C82.2997 69.503 81.464 68.6668 81.464 67.6353C81.464 66.6039 82.2997 65.7677 83.3307 65.7677Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 65.7677C100.789 65.7677 101.624 66.6039 101.624 67.6353C101.624 68.6668 100.789 69.503 99.7576 69.503C98.7266 69.503 97.8909 68.6668 97.8909 67.6353C97.8909 66.6039 98.7266 65.7677 99.7576 65.7677Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 98.2644C67.9346 98.2644 68.7704 99.1005 68.7704 100.132C68.7704 101.163 67.9346 102 66.9037 102C65.8727 102 65.037 101.163 65.037 100.132C65.037 99.1005 65.8727 98.2644 66.9037 98.2644Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M66.9037 49.3322C67.9346 49.3322 68.7704 50.1684 68.7704 51.1998C68.7704 52.2313 67.9346 53.0675 66.9037 53.0675C65.8727 53.0675 65.037 52.2313 65.037 51.1998C65.037 50.1684 65.8727 49.3322 66.9037 49.3322Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 98.2644C84.3616 98.2644 85.1974 99.1005 85.1974 100.132C85.1974 101.163 84.3616 102 83.3307 102C82.2997 102 81.464 101.163 81.464 100.132C81.464 99.1005 82.2997 98.2644 83.3307 98.2644Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M83.3307 49.3322C84.3616 49.3322 85.1974 50.1684 85.1974 51.1998C85.1974 52.2313 84.3616 53.0675 83.3307 53.0675C82.2997 53.0675 81.464 52.2313 81.464 51.1998C81.464 50.1684 82.2997 49.3322 83.3307 49.3322Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 98.2644C100.789 98.2644 101.624 99.1005 101.624 100.132C101.624 101.163 100.789 102 99.7576 102C98.7266 102 97.8909 101.163 97.8909 100.132C97.8909 99.1005 98.7266 98.2644 99.7576 98.2644Z"
                fill="white" fill-opacity="0.08"></path>
              <path
                d="M99.7576 49.3322C100.789 49.3322 101.624 50.1684 101.624 51.1998C101.624 52.2313 100.789 53.0675 99.7576 53.0675C98.7266 53.0675 97.8909 52.2313 97.8909 51.1998C97.8909 50.1684 98.7266 49.3322 99.7576 49.3322Z"
                fill="white" fill-opacity="0.08"></path>
            </svg>
          </span>
        </div>
      </motion.footer>
    );
  };

  return (
    <>

      {/* Adding all the scripts */}




      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Pixis - Graphic Designing, Video Editing
        </title>
        <link rel="shortcut icon" href="assets/Images/favicon.png" type="image/x-icon" />

      </Head>


      {/* <!-- ====== Navbar Section Start --> */}
      <div className="
  ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent 
      ">

        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="px-4 w-60 max-w-full">
              <a href="" className="navbar-logo w-full block py-5">
                {/* <img src="../public/assets/Images/logo/logo-white.svg" alt="logo" className="w-full header-logo" /> */}
                {/* <svg height="40" width="200" className="w-full header-logo">
              <text x="0" y="39" fill="white" font-size="3em" font-family="grifter">PIXIS</text>
            </svg> */}
              </a>
            </div>
            <div className="flex px-4 mr-48 justify-center items-center w-full">
              <div>

                <Sidebar />
                <nav id="navbarCollapse" className="
            absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6 hidden
                ">
                  <ul

                    className="block lg:flex">
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#home" className="
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0
                      ">
                        Home
                      </a>
                    </motion.li>

                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#clients" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        Clients
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#services" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        Services
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#work" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        Work
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#testimonials" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        Reviews
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#about" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        About
                      </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="relative group">
                      <a href="#contact" className="
                        ud-menu-scroll
                        text-base text-dark
                        lg:text-white
                        lg:group-hover:opacity-70
                        lg:group-hover:text-white
                        group-hover:text-primary
                        py-2
                        lg:py-6 lg:inline-flex lg:px-0
                        flex
                        mx-8
                        lg:mr-0 lg:ml-7
                        xl:ml-12
                      ">
                        Contact
                      </a>
                    </motion.li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}

      {/* Hero Section Start */}
      <div id="home" className="gradient relative pt-[120px] md:pt-[125px] lg:pt-[130px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div

                className="
                hero-content
                text-center
                max-w-[780px]
                mx-auto
                animate__animated animate__fadeInLeft animate__delay-1s 
                
                
                ">
                <h1 className="
                  text-white
                  font-bold
                  text-7xl
                  sm:text-8xl
                  md:text-9xl
                  lg:text-[130px]
                  leading-snug
                  sm:leading-snug
                  md:leading-snug
                  mb-8
                  
                  ">
                  PIXIS
                </h1>
                <p className="
                  text-3xl
                  sm:text-4xl sm:leading-relaxed
                  md:text-5xl md:leading-relaxed
                  lg:text-6xl lg:leading-relaxed
                  mx-auto
                  mb-10
                  text-[#e4e4e4]
                  max-w-[600px]
                  inline
    
                  ">
                  Personal yet professional
                </p>
              </div>

            </div>

            <div className="w-full px-4">
              <div className="mx-auto max-w-[845px] relative z-10 flex md:space-x-20
              animate__animated animate__bounceIn animate__delay-2s"

              >

                <div className="flex-1 mt-20">

                  <img src="../assets/Images/icons/figma-min.png" alt="" className='max-w-full  w-[90px]  md:w-[126px] rounded-t-xl rounded-tr-xl icon figma' />
                </div>
                <div className="flex-1 mt-52 ">


                  <img src="../assets/Images/icons/photoshop-logo-min.png" alt="" className='max-w-full w-[90px] md:w-[126px] rounded-t-xl rounded-tr-xl icon photoshop' />
                </div>
                <div className="flex-1 mt-20  ">


                  <img src="../assets/Images/icons/premierepro-logo-min.png" alt="" className='max-w-full w-[90px] md:w-[126px] rounded-t-xl rounded-tr-xl icon premiere-pro' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Section End  */}


      {/* <!-- ====== Clients Section Start --> */}
      <section id="clients" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] max-w-[620px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Clients
                </span>
                <h2 className="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      md:text-[42px]
                      mb-4
                      animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
                    ">
                  Here's Our Top Clients
                </h2>

              </div>
            </div>
          </div>
          <Client_animation />

        </div>
      </section>


      {/* <!-- ====== Clients Section End --> */}


      {/* <!-- ====== Services Section Start --> */}

      <section id="services" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[70px] bg-[#f3f4fe]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2
                  className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent ">
                  What We Offer
                </h2>
                {/* <!-- <p className="text-body-color text-base">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form. -->
            </p> */}
              </div>
            </div>
          </div>
          <Service_animation />
        </div>
      </section>

      {/* <!-- ====== Services Section End --> */}



      {/* <!-- ====== Work Section Start --> */}
      <section id="work" className="
        bg-white
        pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[90px]
        relative
        z-20
        overflow-hidden
        
        ">

        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Work
                </span>
                <h2 className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
                  ">
                  Our Latest Content
                </h2>

              </div>
            </div>
          </div>


          {/* <!-- Video's Section --> */}

          <Video_animation />

        </div>

        {/* <!-- Reels Section --> */}

        <Reel_animation />

        {/* <!-- Thumbnails Section --> */}
        <Thumbnail_animation />

      </section>

      {/* <!-- ====== Work Section End --> */}


      {/* <!-- ====== Testimonials Start ====== --> */}
      <section id="testimonials" className="pt-20 md:pt-[120px] bg-[#f3f4fe]">
        <div className="container px-4">
          <div className="flex flex-wrap">
            <div className="w-full mx-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Client Reviews
                </span>
                <h2 className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                  animate-text bg-gradient-to-r from-[#6b97f7] via-[#6b00bb] to-[#f7137e] bg-clip-text text-transparent
                ">
                  What our Client Say
                </h2>

              </div>
            </div>
          </div>


          <Testimonials_animation />


        </div>
      </section>
      {/* <!-- ====== Testimonials End ====== --> */}

      {/* <!-- ====== About Section Start --> */}
      <section id="about" className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe]">
        <About_animation />
      </section>
      {/* <!-- ====== About Section End --> */}

      {/* <!-- ====== Contact Start ====== --> */}
      <Contact_animation />
      {/* <!-- ====== Contact End ====== --> */}


      {/* <!-- ====== Footer Section Start --> */}
      <Footers_animation />
      {/* <!-- ====== Footer Section End --> */}



    </>
  )
}



export async function getServerSideProps(context) {
  const client = createClient({
    projectId: 'q68y7acx',
    dataset: 'production',
    useCdn: false,
  })

  const query = '*[_type == "clients"]'
  const OurClients = await client.fetch(query)

  const aboutQuery = '*[_type == "about"]';
  const About = await client.fetch(aboutQuery);

  const thumbnailQuery = '*[_type == "thumbnail"]'
  const Thumbnails = await client.fetch(thumbnailQuery);

  const videoQuery = '*[_type == "video"]'
  const Videos = await client.fetch(videoQuery);

  const reelQuery = '*[_type == "reels"]'
  const Reels = await client.fetch(reelQuery);

  const testimonailQuery = '*[_type == "testimonials"]'
  const Testimonials = await client.fetch(testimonailQuery);

  const socialQuery = '*[_type == "social"]'
  const Social = await client.fetch(socialQuery);


  return {
    props: {
      OurClients,
      About,
      Thumbnails,
      Videos,
      Reels,
      Testimonials,
      Social
    },
  }
}
