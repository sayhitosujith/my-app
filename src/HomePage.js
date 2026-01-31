import "./App.css";
import { RiAppleLine } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import Flag from "react-world-flags";
import adritaImage from "./assets/Adrita.png";
import rajeshImage from "./assets/Rajesh.png";
import RoyImage from "./assets/Roy.png";
import ManishImage from "./assets/Manish.png";
import appbanner from "./assets/2-1.png";
import Banner_wallpaper from "./assets/DentalWallpaper.png";
import { BsPlus } from "react-icons/bs";
import logo from "./assets/DutyDentist.png";
import { TbDental } from "react-icons/tb";
import { IoCallSharp, IoMailOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const doctorSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const LINKS = [
  { title: "Product", items: ["Overview", "Features", "Solutions", "Tutorials"] },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

function Welcome() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/HomePage" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/Contact_us" },
    {
      name: "About Us",
      external: "https://www.myherveybaydental.com.au/about-us/",
    },
    { name: "Support", path: "/CustomerCare" },
    { name: "What we Treat", path: "/WhatWeTreatPage" },
  ];

  const footerLinkMap = {
    Overview: "/overview",
    Features: "/features",
    Solutions: "/solutions",
    Tutorials: "/tutorials",
    "About us": "/about",
    Careers: "/careers",
    Press: "/press",
    News: "/news",
    Blog: "/blog",
    Newsletter: "/newsletter",
    Events: "/events",
    "Help center": "/help",
  };

  const servicePathMap = {
    "Root Canal Treatment": "/services/root-canal",
    "Dental Crowns": "/services/dental-crowns",
    "Laser Dentistry": "/services/laser-dentistry",
    "Invisible Braces": "/services/invisible-braces",
    "Dental Fillings": "/services/dental-fillings",
    "Wisdom Tooth": "/services/wisdom-tooth",
    "Dental Braces": "/services/dental-braces",
    "Dental Implants": "/services/dental-implants",
    "Dentures": "/services/dentures",
    "Kids Dentistry": "/services/kids-dentistry",
    "Mouth Ulcers": "/services/mouth-ulcers",
    "Gum Treatment": "/services/gum-treatment",
  };

  const services = [
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/RCT.gif", label: "Root Canal Treatment" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Crowns.gif", label: "Dental Crowns" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif", label: "Laser Dentistry" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/06/Invisible-Braces-1.gif", label: "Invisible Braces" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif", label: "Dental Fillings" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Wisdom-Tooth-1.gif", label: "Wisdom Tooth" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Braces-2.gif", label: "Dental Braces" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Implants.gif", label: "Dental Implants" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dentures.gif", label: "Dentures" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Kids-Dentistery.gif", label: "Kids Dentistry" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Mouth-ulcers-1-2.gif", label: "Mouth Ulcers" },
    { src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Gum-Treatment.gif", label: "Gum Treatment" },
  ];

  const doctors = [
    { name: "Dr. Manish Kaushik", img: ManishImage, specialty: "Oral Surgery Specialist", experience: "13 Years" },
    { name: "Dr. Supriya Kumar Roy", img: RoyImage, specialty: "Senior Consultant Oral and Maxillofacial Surgeon", experience: "41 Years" },
    { name: "Brigadier Dr. Rajesh Madan", img: rajeshImage, specialty: "Prosthodontist Expert", experience: "47 Years" },
    { name: "Dr. Adrita Nag", img: adritaImage, specialty: "Oral Medicine and Radiologist", experience: "23 Years" },
  ];

  const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-700 transition"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-700 transition"
  >
    ›
  </button>
);

const doctorSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <div className="p-4 md:p-7 bg-white">
      {/* App Logo */}
      <img src={logo} alt="App Logo" className="absolute top-4 left-4 w-25 md:w-28 h-auto z-20" />

      {/* Call + Email */}
      <div className="absolute top-4 right-6 z-30 flex items-center gap-4 text-sm md:text-base font-semibold text-blue-700">
        <div className="flex items-center gap-2">
          <IoCallSharp size={26} />
          <span>Call Us: (+91) 94808-60587</span>
        </div>
        <button
          onClick={() => window.location.href = "mailto:support@dutydentist.com"}
          className="flex items-center gap-1 hover:text-blue-900"
        >
          <IoMailOutline size={26} />
          <span>Email Us</span>
        </button>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden mt-14">
        <img src={Banner_wallpaper} alt="Dental Banner" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        {/* Top Right Menu */}
        <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 md:gap-4 bg-grey/60 px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-xl z-20">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() =>
                item.external
                  ? window.open(item.external, "_blank")
                  : navigate(item.path)
              }
              className="text-white hover:text-blue-300 font-semibold text-sm md:text-base transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Text + Book Now */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20 z-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Your personal online Dentist
          </h1>
          <p className="text-white text-sm md:text-lg font-medium drop-shadow-md leading-relaxed">
            Struggling to get a Dentist appointment? Fed up of long queues? Frustrated waiting? <br />
            Don’t worry – we’re here to help. <br />
            Book a same day or next day online consultation, with a NHS-experienced Dentist, in just a few clicks.
          </p>

          <Button
            size="lg"
            className="flex items-center gap-3 mt-6 shadow-lg cursor-pointer bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigate("/Customer_home")}
          >
            <BsPlus size={22} />
            <span>Book ONLINE NOW</span>
          </Button>
        </div>
      </div>

      {/* Services */}
      <div className="flex justify-center items-center">
        <Typography variant="h2" color="black" className="text-center">
          Our Professional Services → Expert care you can trust.
        </Typography>
      </div>

      <div className="mb-6">
        <p className="text-base text-gray-600 mt-2 flex justify-center items-center italic">
          Complete dental care designed to keep your smile healthy, confident, and bright.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => navigate(servicePathMap[service.label] || "/")}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img
              src={service.src}
              alt={service.label}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-blue-700 shadow-xl shadow-blue-900/20 ring-4 ring-blue-500/30 object-cover"
            />
            <p className="text-center mt-2 font-semibold text-sm md:text-base">
              {service.label}
            </p>
          </button>
        ))}
      </div>

      {/* App Banner */}
      <img
        src={appbanner}
        alt="App banner scanner"
        className="w-full h-[30vh] md:h-[50vh] object-cover rounded-lg shadow-md"
      />

      {/* Doctors */}
      <div className="flex justify-center items-center">
        <Typography variant="h2" color="black" className="text-center">
          Meet Our Doctors
        </Typography>
      </div>

   <div className="mt-10 px-4 relative">
  <Slider {...doctorSliderSettings}>
    {doctors.map((doc, index) => (
      <div key={index} className="px-5">
        <Card className="bg-blue-50">
          <CardHeader
            variant="gradient"
            color="white"
            className="grid h-24 place-items-center mb-6 bg-blue-700"
          >
            <Typography variant="h6" className="font-bold text-white text-center">
              {doc.name}
            </Typography>
          </CardHeader>

          <CardFooter className="pt-0 flex flex-col items-center">
            <img
              src={doc.img}
              alt={`${doc.name} Profile`}
              className="w-full h-[40vh] object-cover rounded-lg shadow-md"
            />
            <Typography variant="small" className="mt-4 text-center font-semibold">
              {doc.specialty}
            </Typography>
            <Typography variant="small" className="mt-2 text-center font-semibold">
              Experience - {doc.experience}
            </Typography>
          </CardFooter>
        </Card>
      </div>
    ))}
  </Slider>
</div>

     {/* Reviews Section */}
<div className="my-14 px-4">
  <div className="text-center mb-10">
    <Typography variant="h2" color="black">
      What Our Patients Say
    </Typography>
    <p className="text-gray-600 mt-2 italic">
      Trusted by thousands — real stories, real smiles.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        name: "Danny Brook",
        review:
          "Booking was super easy and the consultation was smooth. The doctor explained everything clearly. Highly recommend Duty Dentist!",
        rating: 5,
      },
      {
        name: "Paul Morris",
        review:
          "I got a same-day consultation and quick relief from tooth pain. Excellent service and very professional doctors.",
        rating: 5,
      },
      {
        name: "James White Bread",
        review:
          "The platform is very user-friendly and the doctors are extremely knowledgeable. Will definitely use again.",
        rating: 5,
      },
      {
        name: "Amit Patel",
        review:
          "Quick appointment, clear diagnosis, and effective treatment. Saved me a lot of time and stress.",
        rating: 5,
      },
      {
        name: "Sneha Reddy",
        review:
          "Very polite doctors and smooth online consultation experience. Highly satisfied with the service.",
        rating: 5,
      },
      {
        name: "Karthik Iyer",
        review:
          "Best online dental service I’ve used. Great for busy professionals like me.",
        rating: 5,
      },
      {
        name: "Neha Gupta",
        review:
          "Fast response, detailed guidance, and friendly support team. Truly impressive!",
        rating: 5,
      },
      {
        name: "Rohit Mehra",
        review:
          "Got immediate help during an emergency. Doctors were calm, patient, and professional.",
        rating: 5,
      },
    ].map((review, index) => (
      <Card
        key={index}
        className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <CardBody className="flex flex-col items-center text-center">
          <Typography variant="h6" className="mb-2 font-semibold">
            {review.name}
          </Typography>

          <div className="flex mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < review.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <Typography variant="small" className="text-gray-600 italic">
            "{review.review}"
          </Typography>
        </CardBody>
      </Card>
    ))}
  </div>
</div>



      {/* Footer */}
      <footer className="relative w-full bg-blue-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Typography variant="h5" className="mb-6 flex items-center space-x-2 text-white">
              <span className="text-white">Duty</span>
              <span className="text-blue-300">Dentist</span>
              <TbDental className="text-blue-300" />
            </Typography>

        <div className="flex items-center gap-3 text-white text-sm md:text-base ml-auto">
  <b><i className="text-lg">DOWNLOAD FOR FREE - </i></b>

  <div className="relative">
    <Button
      disabled
      className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 opacity-70 cursor-not-allowed"
    >
      <GrAndroid size={28} color="white" />
      <RiAppleLine size={28} color="white" />
    </Button>

    {/* Animated Coming Soon Tag */}
    <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
      Coming Soon
    </span>
  </div>
</div>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    className="mb-3 font-medium text-white opacity-70"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => {
                          const path = footerLinkMap[link];
                          if (path) navigate(path);
                        }}
                        className="py-1.5 font-normal text-white/80 transition-colors hover:text-white cursor-pointer"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-white/20 py-4 md:flex-row md:justify-between">
            <Typography variant="small" className="mb-4 text-center font-normal text-white md:mb-0">
              &copy; {new Date().getFullYear()} Duty Dentist — All Rights Reserved.
              <div className="flex items-center space-x-2 mt-2 justify-center md:justify-start">
                <span className="text-sm font-semibold">MADE IN INDIA</span>
                <Flag code="IN" style={{ width: 30, height: 20 }} />
              </div>
            </Typography>

            <div className="flex gap-4 text-white sm:justify-center">
              <button onClick={() => window.open("https://www.facebook.com/YourPage", "_blank")} className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer">Facebook</button>
              <button onClick={() => window.open("https://www.youtube.com/YourChannel", "_blank")} className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer">YouTube</button>
              <button onClick={() => window.open("https://twitter.com/YourProfile", "_blank")} className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer">Twitter</button>
              <button onClick={() => window.open("https://github.com/YourProfile", "_blank")} className="opacity-80 transition-opacity hover:opacity-100 cursor-pointer">GitHub</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
