import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react';
import { createClient } from "next-sanity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKaggle } from '@fortawesome/free-brands-svg-icons'
import Portfolio from './portfolio';


import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';

export default function Home({ blogs}) {
  const client = createClient({
    projectId: "jbnajy32",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  const profile = {
    title: "DevAtul",
    name: "Atul",
    fullname: "Atul Choudhary",
    image: "/assets/img/atul.jpg",
    kaggleLink: "https://www.kaggle.com/atulchoudhary29",
    twitterLink: "https://twitter.com/AtulChoudhary08",
    linkdinLink: "https://www.linkedin.com/in/atulchoudhary2908/",
  }
  const fullText = `Hello I'm ${profile.name}!`;
  const [text, setText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    const animate = () => {
      setText((prevText) => {
        if (index.current < fullText.length) {
          const nextText = prevText + fullText.charAt(index.current);
          index.current = index.current + 1;
          return nextText;
        }
        return prevText;
      });
    };
    const timerId = setInterval(animate, 100); // controls the speed of the typing effect
    return () => clearInterval(timerId);
  }, [fullText]);
  
  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>DevAtul - Developer | Coder | Cybersecurity Geek</title>
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta property="og:locale" content="en_US" />

        <meta name="theme-color" content="#5540af" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head> 
      <NavBar/>
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" /> 
      {/* <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
        </button>

        <ul className="mt-8 flex flex-col">

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

          </li>

        </ul>
      </div> */}
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={profile.image} className="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                {text}
                <p className="font-body text-base normal-case font-light italic text-xl mt-2 text-white">Machine Learning Engineer and Web Developer</p>
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">Let's connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href={profile.kaggleLink}>
                    <FontAwesomeIcon icon={faKaggle} className="text-xl text-white hover:text-yellow" />
                  </a>
                  <a href={profile.twitterLink} className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href={profile.linkdinLink} className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                </div>
              </div>
                <Link href={'/blogs'}><div className="buttons text-center md:text-left">
                  {/* <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>All Blogs</button> */}
                  <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-1 text-center my-4 mr-2 mb-2'>All Blogs</button>
                </div></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm {profile.fullname}, a Machine Learning Engineer and Web Developer
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
            Hi, I'm a <b>full-stack web developer</b> and <b>freelancer on Fiverr</b> with a focus on machine learning, deep learning, and data visualization. I maintain a <b>5-star rating</b> through my quality work. My skills span Python, Data Science, full stack web development using various technologies, and proficiency in Google Firebase, Next.js, Sanity.io, API integration. I hold a <b>Bachelor's degree in Civil Engineering from Thapar Institute of Engineering and Technology</b>. Known for my disciplined nature, adaptability, and strong communication skills, my portfolio includes predictive models and web applications. Currently, I'm <b>expanding into cybersecurity</b>, continually improving my problem-solving and debugging abilities.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href={profile.kaggleLink}>
                    <FontAwesomeIcon icon={faKaggle} className="text-xl text-primary hover:text-yellow" />
                  </a>
                  <a href={profile.twitterLink} className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href={profile.linkdinLink} className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Backend Development (MEN Stack)
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "90%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "85%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Data Science
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "80%"}}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Frontend Development
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">75%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "75%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Others (Sanity.io, Tailwind, etc.)
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <a href="https://www.fiverr.com/atulchoudhar08">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  WEB DEVELOPMENT
                </h3>
              </a>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Designing and implementing user-friendly and fully functional web interfaces, from front-end visuals to back-end server management.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
            <a href="https://www.fiverr.com/atulchoudhar08">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Machine and Deep Learning
              </h3>
            </a>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Creating and improving intelligent systems capable of learning from data, enhancing accuracy and efficiency across diverse applications.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
            <a href="https://www.fiverr.com/atulchoudhar08">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Data Science
              </h3>
            </a>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Utilizing algorithms and statistical models to extract meaningful insights from complex data sets for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Portfolio/>

{/* Section of Latest Clients */}

      {/* <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <img src="/assets/img/logo-coca-cola.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
              <span className="m-8 block">
                <img src="/assets/img/logo-apple.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-netflix.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-amazon.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-stripe.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I did
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                <a href="https://www.fiverr.com/atulchoudhar08" target="_blank">
                  <img src="https://seekvectorlogo.com/wp-content/uploads/2021/12/fiverr-vector-logo-2021.png" className="h-auto w-32" alt="company logo"/>
                </a>
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">June 2022 - Present</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Freelancer - Web Development and Data Science
                      <p className="block pt-0.5 font-header text-xs italic normal-case text-zinc-600">Fiverr</p>
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        <ul className="list-disc mx-5">
                            <li>Full-stack web development services.</li>
                            <li>Data-driven decision making with data science.</li>
                            <li>Efficient solutions using the latest technologies.</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/113px-Adani_logo_2012.svg.png?20211023113746" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">June 2022 - December 2022</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Internship - Civil Engineering
                      <p className="block pt-0.5 font-header text-xs italic normal-case text-zinc-600">At - Lucknow International Airport</p>
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        <ul className="list-disc mx-5">
                            <li>Participated in infrastructure design at Lucknow International Airport.</li>
                            <li>Worked on the driver's canteen and substation projects.</li>
                            <li>Gained valuable experience under Adani Groups.</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-fedex.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">October 2019 - Feb 2021</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">DevOps
                      Engineer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{"backgroundImage": "url(/assets/img/experience-figure.png)"}} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 justify-items-center items-center">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    40
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>

              {/* <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    1
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Certificate
                  </h4>
                </div>
              </div> */}

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                    alt="icon happy clients" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    30
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>

              {/* <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    99
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Got inquiries or need assistance? Feel free to ask. No matter if it's about our services, a specific project, or general information, your questions are welcome here. We believe in fostering a culture of open communication and transparency. Let's connect and navigate towards solutions together.
          </p>
        </div>
        <form action="https://formspree.io/f/mvoykaba" method="POST" className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Your Name" type="text" id="firstName" name="name" required=""/>
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Your Email" type="email" id="email-address" name="Email" required=""/>
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message" id="message" cols="30" rows="10" name="message" required=""></textarea>
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
              Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
        <div className="bg-grey-50 mt-8">
          <div className="flex flex-col pt-16 lg:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                (+91) 7378099972
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                atulchoudhary.2908@gmail.com
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Tonk, Rajasthan 304001
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
        style={{"backgroundImage": "url(/assets/img/bg-cta.jpg)"}}>
        <div className="container relative z-30">
          <h3
            className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Please check out my <a href = "/blogs" className="font-bold">Blogs</a> <br />
          </h3>
        </div>
      </div>
    </div>
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, DevAtul.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href={profile.kaggleLink}>
              <FontAwesomeIcon icon={faKaggle} className="text-xl text-white hover:text-yellow" />
            </a>
            <a href={profile.twitterLink} className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href={profile.linkdinLink} className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
        </div>
      </div>
    </div></></>
    
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "jbnajy32",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);
  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
    }
  }
}