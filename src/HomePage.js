import "./App.css";
import adritaImage from "./assets/Adrita.png";
import rajeshImage from "./assets/Rajesh.png";
import RoyImage from "./assets/Roy.png";
import ManishImage from "./assets/Manish.png";
import appbanner from "./assets/2-1.png";
import Banner_wallpaper from "./assets/DentalWallpaper.png";
import { BsPlus } from "react-icons/bs";
import logo from "./assets/Toothx_Logo-removebg-preview.png";
import { IoCallSharp, IoMailOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdSupportAgent } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

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

  const servicePathMap = {
    "Root Canal Treatment": "/RootCanalTreatment",
    "Dental Crowns": "/services/dental-crowns",
    "Laser Dentistry": "/services/laser-dentistry",
    "Invisible Braces": "/services/invisible-braces",
    "Dental Fillings": "/services/dental-fillings",
    "Wisdom Tooth": "/services/wisdom-tooth",
    "Dental Braces": "/services/dental-braces",
    "Dental Implants": "/services/dental-implants",
    Dentures: "/services/dentures",
    "Kids Dentistry": "/services/kids-dentistry",
    "Mouth Ulcers": "/services/mouth-ulcers",
    "Gum Treatment": "/services/gum-treatment",
  };

  const [showCallPopup, setShowCallPopup] = useState(false);

  const services = [
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/RCT.gif",
      label: "Root Canal Treatment",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Crowns.gif",
      label: "Dental Crowns",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif",
      label: "Laser Dentistry",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2025/06/Invisible-Braces-1.gif",
      label: "Invisible Braces",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Fillings-1-1.gif",
      label: "Dental Fillings",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Wisdom-Tooth-1.gif",
      label: "Wisdom Tooth",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Braces-2.gif",
      label: "Dental Braces",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dental-Implants.gif",
      label: "Dental Implants",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Dentures.gif",
      label: "Dentures",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Kids-Dentistery.gif",
      label: "Kids Dentistry",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2019/02/Mouth-ulcers-1-2.gif",
      label: "Mouth Ulcers",
    },
    {
      src: "https://clovecontent.s3.ap-south-1.amazonaws.com/All/2017/05/Gum-Treatment.gif",
      label: "Gum Treatment",
    },
  ];

  const doctors = [
    {
      name: "Dr. Manish Kaushik",
      img: ManishImage,
      specialty: "Oral Surgery Specialist",
      experience: "13 Years",
    },
    {
      name: "Dr. Supriya Kumar Roy",
      img: RoyImage,
      specialty: "Senior Consultant Oral and Maxillofacial Surgeon",
      experience: "41 Years",
    },
    {
      name: "Brigadier Dr. Rajesh Madan",
      img: rajeshImage,
      specialty: "Prosthodontist Expert",
      experience: "47 Years",
    },
    {
      name: "Dr. Adrita Nag",
      img: adritaImage,
      specialty: "Oral Medicine and Radiologist",
      experience: "23 Years",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-orange-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-700 transition"
    >
      ‹
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-orange-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-700 transition"
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="ToothX Logo" className="h-20 w-20 object-contain" />
            
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  item.external
                    ? window.open(item.external, "_blank")
                    : navigate(item.path)
                }
                className="transition-colors duration-200 hover:text-orange-600"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowCallPopup(true)}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
            >
              <IoCallSharp size={18} /> Call Us
            </button>
            <button
              onClick={() => (window.location.href = "mailto:support@dutydentist.com")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <IoMailOutline size={18} /> Email Us
            </button>
          </div>
        </div>
      </header>

      {showCallPopup && (
        <div className="fixed inset-0 bg-slate-950/70 flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
            <button
              onClick={() => setShowCallPopup(false)}
              className="absolute right-4 top-4 text-slate-500 transition hover:text-slate-900"
            >
              ✕
            </button>
            <div className="flex flex-col items-center gap-3 text-center">
              <MdSupportAgent size={42} className="text-orange-600" />
              <h2 className="text-2xl font-semibold text-slate-900">Contact 24/7 Support</h2>
              <p className="text-sm text-slate-600">
                Our dental care team is ready to help with booking, consultations, and urgent support.
              </p>
              <button
                onClick={() => (window.location.href = "tel:+919480860587")}
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-700"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="space-y-20">
        <section className="relative overflow-hidden">
          <div className="relative h-[430px] md:h-[520px]">
            <img
              src={Banner_wallpaper}
              alt="Dental Banner"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent"></div>
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="max-w-2xl text-green-950">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Trusted dental care anytime, anywhere</p>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Your personal online Dentist</h1>
                  <p className="mt-6 text-base leading-8 text-slate-200 sm:text-lg">
                    Struggling to get a dentist appointment? Fed up with long waits and unclear pricing? ToothX makes same-day online consultations fast, easy, and reliable.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:scale-[1.01]"
                      onClick={() => navigate("/Customer_home")}
                    >
                      <BsPlus size={20} /> Book Online Now
                    </Button>
                    <button
                      onClick={() => setShowCallPopup(true)}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      Speak with support
                    </button>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Instant appointments",
                      "Expert dentists",
                      "Secure online consultations",
                      "Transparent pricing",
                    ].map((item) => (
                      <div key={item} className="rounded-3xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.8)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="rounded-[36px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Fast care for every smile</p>
                    <h2 className="mt-4 text-3xl font-bold text-white">Complete dental support in one place</h2>
                    <p className="mt-4 text-slate-200">
                      Book appointments, view services, connect with specialists, and manage your dental health from home.
                    </p>
                    <div className="mt-8 grid gap-4">
                      <div className="rounded-3xl bg-white/10 px-4 py-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-orange-200">27+ Years</p>
                        <p className="mt-2 text-lg font-semibold text-white">Experienced dental team</p>
                      </div>
                      <div className="rounded-3xl bg-white/10 px-4 py-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-orange-200">99.8%</p>
                        <p className="mt-2 text-lg font-semibold text-white">Patient satisfaction rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Our services</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Expert treatments for every smile</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              From routine care to advanced procedures, ToothX delivers professional service with modern convenience and care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <button
                key={index}
                onClick={() => navigate(servicePathMap[service.label] || "/")}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-50 shadow-inner">
                  <img src={service.src} alt={service.label} className="h-16 w-16 rounded-full object-cover" />
                </div>
                <p className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-orange-600">{service.label}</p>
                <p className="mt-2 text-sm text-slate-500">Experienced care for {service.label.toLowerCase()} and follow-up support.</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white p-6 shadow-xl shadow-slate-200 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-600">Mobile care</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Your dental assistant on the go</h2>
                <p className="mt-4 max-w-2xl text-slate-600">
                  Download the ToothX app to book consultations, manage appointments, and receive reminders from anywhere.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img src={appbanner} alt="App banner scanner" className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Meet the team</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our dentists</h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Highly qualified specialists available for consultations, surgery, and restorative care.
            </p>
          </div>

          <div className="mt-10 px-2">
            <Slider {...doctorSliderSettings}>
              {doctors.map((doc, index) => (
                <div key={index} className="px-3">
                  <Card className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
                    <CardHeader className="relative h-80 bg-orange-700 p-0">
                      <img src={doc.img} alt={`${doc.name} Profile`} className="h-full w-full object-cover" />
                    </CardHeader>
                    <CardBody className="space-y-4 px-6 pb-6 pt-4 text-center">
                      <Typography variant="h6" className="font-semibold text-slate-900">
                        {doc.name}
                      </Typography>
                      <Typography variant="small" className="block text-slate-600">
                        {doc.specialty}
                      </Typography>
                      <Typography variant="small" className="text-orange-600 font-semibold">
                        {doc.experience} experience
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Patient reviews</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">What our patients say</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Trusted by thousands of patients for fast, friendly, and effective dental care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Danny Brook",
                review:
                  "Booking was super easy and the consultation was smooth. The doctor explained everything clearly. Highly recommend ToothX!",
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
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CardBody className="flex flex-col items-center text-center gap-4">
                  <Typography variant="h6" className="font-semibold text-slate-900">
                    {review.name}
                  </Typography>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-xl ${i < review.rating ? "text-yellow-500" : "text-slate-300"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <Typography variant="small" className="text-slate-600 italic">
                    "{review.review}"
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Our partners</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by leading practices</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              We work with top organizations and trusted healthcare brands.
            </p>
          </div>

          <div className="mt-10">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2500}
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
              ]}
            >
              {[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQ-Exq-bRTBdMI9hToshO-uY-K5CyQ6iZHg&s",
                "https://i.pinimg.com/originals/b1/fe/43/b1fe43b1d5c1305009c9d8c8b7cd517a.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cL6Hc7Agl9y0-9A6opnjYV2_PiYLBqazBw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwaJHo04qp9RYN3lX-ZOo9h-3XnALv7W3IA&s",
                "https://marketplace.canva.com/EAE-iqmczr4/1/0/1600w/canva-orange-and-purple-minimalist-dental-clinic-logo-py32dplr4L8.jpg",
                "https://narayandental.com/wp-content/uploads/2022/02/logo.png",
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center px-4 py-8">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <footer className="bg-slate-900 text-slate-300">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <img src={logo} alt="ToothX Logo" className="h-12 w-12 object-contain" />
                <p className="text-sm leading-6 text-slate-400">
                  Trusted dental treatments, expert dentists, and a seamless online booking experience.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>
                    <a href="/HomePage" className="transition hover:text-white">Home</a>
                  </li>
                  <li>
                    <a href="/about" className="transition hover:text-white">About Us</a>
                  </li>
                  <li>
                    <a href="/careers" className="transition hover:text-white">Careers</a>
                  </li>
                  <li>
                    <a href="/blog" className="transition hover:text-white">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Treatments</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>Dental Implants</li>
                  <li>Root Canal</li>
                  <li>Braces</li>
                  <li>Teeth Whitening</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  <li>📍 WTC, Bangalore, India</li>
                  <li>📞 +91 86188 60059</li>
                  <li>
                    <a href="mailto:supportblr@dutydentist.com" className="transition hover:text-white">
                      supportblr@dutydentist.com
                    </a>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {[
                    { icon: FaFacebookF, url: "https://facebook.com", bg: "bg-blue-600" },
                    { icon: FaInstagram, url: "https://instagram.com", bg: "bg-pink-500" },
                    { icon: FaTwitter, url: "https://twitter.com", bg: "bg-sky-500" },
                    { icon: FaLinkedinIn, url: "https://linkedin.com", bg: "bg-blue-700" },
                    { icon: FaYoutube, url: "https://youtube.com", bg: "bg-red-600" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.bg} inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:scale-105`}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} ToothX. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Welcome;
