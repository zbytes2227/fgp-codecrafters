"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classNames from "classnames";
import { useRef, useState } from "react";

function DreamAgency() {
  const bussinessSlider = useRef();
  const workSlider = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const navigationList = ["Home", "Dashboard", "Notes"];
  const moveRight = (slider) => {
    slider.current.slickNext();
  };

  const moveLeft = (slider) => {
    slider.current.slickPrev();
  };

  const [active, setActive] = useState("Home");
  const workSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },

      {
        breakpoint: 444,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const bussinessSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },

      {
        breakpoint: 444,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const testimonialsCard = [
    {
      title: "Mr. Ishrat Hussain (Lecturer, CSE)",
      discription:
        "Code Crafters is a great community for students, It's supportive and friendly, offering a wealth of tutorials and projects for all skill levels. I highly recommend Code Crafters to anyone looking to improve their coding abilities in a welcoming environment.",
    },
    {
      title: "Tejas Awasthi (Student)",
      discription:
        "Code Crafters is an amazing community for students, offering a supportive and friendly environment that has significantly enhanced my skills and performance in exams. Their commitment to quality services has been invaluable to my growth.",
    },
  ];
  const cardDetail = [
    {
      title: "Notes Distribution",
      desc: "Access to organized and curated study materials.",
      logoBg: "bg-[#FFDED4]",
      logo: "/assets/dreamagency/websiteLogo.svg",
    },
    {
      title: "Coding Contests",
      desc: "Participate in competitive programming challenges.",
      logoBg: "bg-[#D4F0FF]",
      logo: "/assets/dreamagency/computerLogo.svg",
    },
    {
      title: "Career Guidance",
      desc: "Receive professional advice and direction for career choices.",
      logoBg: "bg-[#FFD4D4]",
      logo: "/assets/dreamagency/rocketLogo.svg",
    },
    {
      title: "Mentorship 1:1",
      desc: "Personalized guidance from experienced mentors.",
      logoBg: "bg-[#FFDED4]",
      logo: "/assets/dreamagency/websiteLogo.svg",
    },
    {
      title: "Network Opportunities",
      desc: "Connect with professionals and peers for networking and collaboration.",
      logoBg: "bg-[#D4F0FF]",
      logo: "/assets/dreamagency/computerLogo.svg",
    },
  ];

  const aboutUsData = [
    "We are students of FGP who envisioned and built the Code Crafters Community. Passionate about fostering collaboration and innovation, we invite you to join us in shaping a vibrant hub where knowledge meets creativity.",
    "Register yourself and Join our Community...fast!",
  ];

  const templateCard = [
    {
      title: "FGP Website",
      img: "/assets/dreamagency/fgp-site.png",
      link:"https://fgp.org.in/"
    },
    {
      title: "PolyA2z",
      img: "/assets/dreamagency/polya2z.png",
      link:"https://polya2z.github.io"
    },
    {
      title: "BharatGen",
      img: "/assets/dreamagency/zbytes-invoice.png",
      link:"/"
    },
    {
      title: "Code Crafters",
      img: "/assets/dreamagency/scan-mate.png",
      link:"/"
    },
  ];




  const Button = ({ className, onClick, label }) => {
    return (
      <button
        className={`bg-[#331B3B] rounded-[10px] text-[17px] text-white uppercase font-hindVadodara ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="bg-white">
      <div className="bg-black block md:hidden text-white text-center font-medium font-hindVadodara py-1.5">Join Our WhatsApp Community</div>
      <div className="overflow-hidden">
        <nav className="px-5 sm:px-[50px] py-[26.36px] flex justify-between items-center relative max-w-screen-2xl mx-auto">
          <ul className="hidden md:flex gap-5 lg:gap-8 xl:gap-12 items-center text-base font-normal font-hindVadodara leading-6 tracking-[0.01]">
            {navigationList.map((data, index) => (
              <li
                className="relative z-10 cursor-pointer"
                onClick={() => { setActive(data); window.open("https://dashboard.fgpcodecrafters.site/login") }}
                key={index}
              >
                {data}
                <span
                  className={classNames(
                    "bg-[#FDC221] h-0.5 bottom-[3px] -z-[1] -left-0.5 absolute",
                    active === data ? "w-5" : "w-0"
                  )}
                />
              </li>
            ))}
          </ul>
          <div className="xl:mr-56 cursor-pointer">
            <p className="text-3xl  font-bold font-playFairDisplay leading-7 tracking-[0.01]">
              Code Crafters
            </p>
          </div>
          <ul className="hidden md:flex gap-4 items-center">

            <div className="relative cursor-pointer z-20">

              <button type="button" class="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Join WhatsApp Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp ms-2" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg></button>


            </div>

          </ul>
          <ul className="h-10 w-12 block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              onClick={() => setShowMenu(true)}
              className=" h-10 w-12"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </ul>
          <div className="absolute xl:-right-10 xl:top-0 -right-56 -top-20 hidden md:block">
            <svg
              width="570"
              height="712"
              viewBox="0 0 570 712"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z"
                fill="#FEC828"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div
            className={classNames(
              `transition-all ease-in-out z-50`,
              showMenu
                ? "md:hidden flex flex-col min-h-screen h-max w-full left-0 top-0 fixed bg-[#2D4263]"
                : "md:hidden flex flex-col h-screen w-full top-0 left-full fixed bg-[#2D4263]"
            )}
          >
            <div
              className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={"/assets/dreamagency/rocketLogo.svg"}
                alt="close"
                className="h-7 cursor-pointer"
              />
            </div>
            <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] md:hidden sm:text-lg text-[20px] leading-[29px] font-normal md:flex-row md:gap-[60px]">
              {navigationList.map((navitem, index) => {
                return (
                  <div
                    key={index}
                    className="text-white text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer"
                  >
                    {navitem}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="mx-auto max-w-screen-2xl">
          <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
            <div className="flex flex-col items-center md:items-start gap-7">
              <div className="w-full text-center md:text-left max-w-xl overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-[#331B3B] font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]">
                <h1 className="whitespace-nowrap">We Help you</h1>
                <p />
                <span className="font-light">
                  to grow your
                  <br />
                  <span className="relative w-full z-10">
                    Career
                    <span className="bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full" />
                  </span>
                </span>
              </div>
              <div className="max-w-[515px] flex flex-col gap-8">
                <span className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left">
                  Welcome to Code Crafters Community, your hub for student collaboration and innovation. Join us to explore coding, share ideas, and create together!
                </span>

                <Button onClick={() => window.open("https://dashboard.fgpcodecrafters.site/login")}
                  className="self-center md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide"
                  label="👉🏻 CLICK TO START"
                />
              </div>
            </div>
            <div>
              <img
                src={"/assets/dreamagency/home.png"}
                alt="Home"
                className="lg:h-full"
              />
            </div>
          </div>
          <div className="w-full relative sm:h-[650px] h-[500px] py-28 overflow-hidden md:mt-28 mt-14">
            <div className="absolute right-16 top-56 h-96 p-2 w-96 border-dashed border-[#000000] border-[1px] rounded-full"></div>
            <div className="max-w-[1293px] mr-3 w-full sm:h-[578px] h-[500px] bg-[#ECF7FF] rounded-tr-[137px] sm:rounded-tr-[400px] absolute top-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24">
              <div className=" flex flex-col sm:gap-16 md:gap-24 gap-12">
                <div className="mx-auto md:text-5xl text-4xl text-[#331B3B] font-hindVadodara -tracking-[0.01] leading-[106.3%]">
                  <h1 className=" font-bold self-center text-center">
                    Discover
                  </h1>
                  <span className="font-light self-center">

                    <span className="relative ml-1">
                      What We Offer
                      <span className="bg-[#FDC221] md:h-2.5 h-2 bottom-1.5 md:bottom-2 -z-[1] right-0 absolute md:w-48 w-[145px]" />
                    </span>
                  </span>
                </div>
                <div className="lg:pl-32 sm:pl-8 px-5 flex gap-12">
                  <div className="md:flex gap-4 items-end hidden">
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 cursor-pointer"
                      onClick={() => moveLeft(bussinessSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => moveRight(bussinessSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="dream-agency-bussiness flex justify-center">
                    <Slider {...bussinessSliderSetting} ref={bussinessSlider}>
                      {cardDetail?.map((card, index) => (
                        <div
                          key={index}
                          className="max-w-[308px] w-full p-[18px] flex flex-col justify-start bg-white shadow-3xl rounded-[10px] overflow-hidden"
                        >
                          <div
                            className={`w-[52px] h-12 flex justify-center items-center rounded-[10px] ${card?.logoBg}`}
                          >
                            <img src={card.logo}></img>
                          </div>
                          <div>
                            <span className="text-base mt-3 overflow-hidden uppercase font-bold font-hindVadodara leading-[137.3%] -tracking-tighter">
                              {card.title}
                            </span>
                          </div>
                          <div>
                            <span className="text-[15px] mt-1.5 max-w-[230px] h-full max-h-16 Light font-light font-hindVadodara leading-[145.3%] tracking-[0.02]">
                              {card.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full px-5 sm:px-[50px] flex-col-reverse md:flex-row mt-11 sm:mt-0 gap-16 md:gap-4">
            <div className="relative">
              <img
                src="/assets/dreamagency/aboutus.png"
                className="md:h-full sm:h-[462px] h-[278px] !z-40 relative"
                alt="about us"
              />
            </div>
            <div className="flex flex-col gap-5 justify-start items-center md:items-start">
              <div className="flex flex-col relative md:mt-32 lg:text-5xl text-4xl text-[#331B3B] leading-[106.3%] -tracking-[0.01] ont-hindVadodara">
                <h1 className=" font-bold text-center md:text-left">
                  About Us
                </h1>
                {/* <span className="lg:text-5xl text-4xl font-light">
                  Fake or
                  <span className="ml-3 relative z-10">
                    Real
                    <span className="bg-[#FDC221] h-2 bottom-[10px] lg:bottom-[14px] -z-[1] left-0 absolute w-full" />
                  </span>
                </span> */}
              </div>
              <div className="flex flex-col gap-2">
                {aboutUsData.map((data, index) => {
                  return (
                    <span
                      className="text-[15px] mt-[6px] max-w-[515px] text-center md:text-left Light font-light font-hindVadodara leading-[145.3%] tracking-[0.02]"
                      key={index}
                    >
                      {data}
                    </span>
                  );
                })}
              </div>
              <div className="mt-2 md:mt-10">
                <Button onClick={() => window.open("https://dashboard.fgpcodecrafters.site/login")}
                  className="whitespace-nowrap max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide px-10"
                  label="Explore More"
                />
              </div>
            </div>
          </div>
          <div className="w-full relative h-[725px] md:h-[636px] py-24 overflow-hidden md:mt-20 mt-12">
            <div className="max-w-[1300px] ml-3 w-full h-full bg-[#FFDED4] rounded-tl-[137px] sm:rounded-tl-[400px] absolute top-0 right-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24 md:py-40">
              <div className=" flex flex-col gap-8 sm:gap-10 md:gap-24 mx-auto">
                <div className="flex flex-col gap-5 mx-5">
                  <div className="relative md:absolute lg:left-32 md:left-5 md:top-10">
                    <h1 className="lg:text-5xl text-3xl text-[#331B3B] font-bold font-hindVadodara leading-[106.3%] -tracking-[0.01] self-center">
                      Explore Our Other
                      <p />
                      <span className="font-light">
                        Products &
                        <span className="relative z-10">
                          {' '}Services
                          <span className="bg-[#FDC221] h-2 bottom-1.5 lg:bottom-[9px] -z-[1] right-0 absolute lg:w-40 w-[104px]" />
                        </span>
                      </span>
                    </h1>
                  </div>
                  <span className="relative md:absolute text-lg font-normal max-w-md xl:max-w-lg w-full md:right-12 md:top-10">
                    We have developed various services including note provision and community engagement, among others. Each Service is designed to cater to specific needs, enhancing user experience and promoting seamless interaction within their respective domains.
                  </span>
                </div>
                <div className="lg:pl-64 sm:pl-8 px-5 flex gap-12">
                  <div className="md:flex gap-4 items-end hidden">
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180 cursor-pointer"
                      onClick={() => moveLeft(workSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => moveRight(workSlider)}
                    >
                      <path
                        d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M15 10L23 17.3443L15 24"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex dream-agency-work">
                    <Slider {...workSliderSetting} ref={workSlider}>
                      {templateCard?.map((card, index) => (
                        <div
                          className="max-w-lg w-full p-[18px] justify-start bg-white shadow-3xl rounded-[10px] self-center"
                          key={index}
                        >
                          <div className="h-full">
                            <img
                              src={card.img}
                              alt="card image"
                              className="h-48 w-full object-cover"
                            />
                          </div>
                          <div className="mt-5 flex justify-between">
                            <span className="text-2xl font-bold text-[#331B3B]">
                              {card.title}
                            </span>
                            <a href={card.link} className="rounded-[100px] border-[2px] text-sm border-[#343434] py-0.5 px-3 w-28 whitespace-nowrap h-max cursor-pointer text-center">
                              View work
                            </a>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-14 md:mt-[75px] mt-9 px-5">
            <div className=" text-center w-full text-3xl md:text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01em]">
              <h1 className="whitespace-nowrap font-bold leading-[99.8%] text-center">
                Our Testimonials
              </h1>
              <span className="md:whitespace-nowrap !text-center font-light mt-1 max-w-sm md:max-w-xl mx-auto">
                What Our Users Are
                <span className="relative z-10 ml-2">
                  Saying
                  <span className="bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0" />
                </span>
              </span>
            </div>
            <div className="flex sm:gap-[69px] gap-7 flex-col md:flex-row">
              {testimonialsCard.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-7 justify-start drop-shadow-[0_7px_9px_rgba(0,0,0,0.15)] bg-white pl-[29px] pr-[35px] py-9"
                >
                  <div>
                    <svg
                      width="46"
                      height="40"
                      viewBox="0 0 46 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.4128 39.5905L45.4 18.5185V0.409668H24.9856V19.6161H32.7776L24.9856 39.5905H35.4128ZM28.0336 16.5681V3.45927H42.3504V17.8321L33.4816 36.5409H29.4464L37.2352 16.5697H28.0336V16.5681Z"
                        fill="#FDC221"
                      />
                      <path
                        d="M11.0272 39.5905L21.0144 18.5185V0.409668H0.600006V19.6161H8.39361L0.600006 39.5905H11.0272ZM3.64801 16.5681V3.45927H17.9648V17.8321L9.09761 36.5409H5.06241L12.8512 16.5697H3.64801V16.5681Z"
                        fill="#FDC221"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-start gap-3">
                    <span className=" max-w-[384px] w-full text-base font-normal font-hindVadodara leading-[159.8%] tracking-wide">
                      {data.discription}
                    </span>
                    <span className="flex gap-2 items-center text-base font-semibold font-hindVadodara leading-[159.8%] tracking-wide">
                      <span className=" border-[2px] border-[#FDC221] w-3 relative bottom-0.5" />
                      {data.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black rounded-tr-[158px] relative pt-[66px] mt-[92px] w-full">
          <div className="w-full flex md:gap-4 gap-8 sm:justify-between flex-col md:flex-row max-w-screen-2xl mx-auto pb-[76px] sm:pl-12 sm:pr-12 px-5 lg:pr-[152px]">
            <div className="flex flex-col gap-4 justify-start">
              <h1 className="text-4xl text-white font-playFairDisplay tracking-[0.01] w-fit cursor-pointer">
                Code Crafters
              </h1>
              <p className="text-base max-w-[439px] w-full text-white font-hindVadodara leading-[159.3%] font-normal tracking-wide">
                If you have a passion for development and want to connect with like-minded individuals, then look no further. Join our community today and become part of a group of developers who are dedicated to sharing knowledge, resources, and experiences.
              </p>
              {/* <p className="text-base text-white font-hindVadodara leading-[159.3%] font-semibold tracking-wide uppercase">
                GET IN TOUCH
              </p> */}
              {/* <div className="flex">
                <input
                  type="phone"
                  name="phone"
                  className="bg-transparent p-3 border focus:outline-none border-white text-white"
                  placeholder="Your WhatsApp Number"
                  id="phone"
                  autoComplete="off"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Button onClick={sendMSG}
                  className="max-w-[143px] py-3.5 w-full flex justify-center items-center !bg-white text-base !text-black font-semibold font-hindVadodara leading-[159.3%] tracking-wide rounded-none"
                  label="Get Message"
                />
              </div> */}
              <p className="text-base text-white font-hindVadodara leading-[159.3%] font-semibold tracking-wide uppercase mt-2">
                Developed By ZB👾
              </p>
            </div>
            <div className="relative">
            <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          width="604"
          height="308"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=ratapur+raebareli&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamAgency;