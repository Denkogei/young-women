import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

function Home() {
  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-[50vh]">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[50vh]">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-40">
          <h1 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Young Women Mediation Network
          </h1>
          <p className="mt-3 text-sm md:text-base font-light text-white max-w-2xl leading-relaxed">
            Empowering young women to lead mediation and peacebuilding efforts worldwide.
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-[#88C641] text-white px-5 py-2 text-sm md:text-base rounded-full shadow-lg hover:bg-[#2B256E] transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="p-6 md:p-8 max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4 text-center">
          About Women, Youth  Peace and Security
        </h2>
        <p className="text-gray-900 leading-relaxed text-sm md:text-lg">
          Founded in 2017 by young women at IPHRD-Africa, the Network equips women with skills in peacebuilding, mediation, and conflict resolution. It advances UNSCR 1325, 2250, and 2419 on Women, Peace, and Security.
        </p>
        <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
          Despite these resolutions, women remain underrepresented due to systemic barriers. The Network fosters change by training mediators, advocating for policy reforms, and amplifying women’s voices in peace efforts.
        </p>
        <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
          Through mentorship, workshops, grassroots initiatives, and strategic partnerships, the Network strengthens women’s role in mediation and drives lasting social change.
        </p>
      </div>
    </div>
  );
}

export default Home;
