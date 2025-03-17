import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

function Home() {
  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="relative w-screen h-[50vh] overflow-hidden">
      {/* Image Slider */}
      <Slider {...settings} className="w-screen h-full">
        {images.map((image, index) => (
          <div key={index} className="w-screen h-[50vh]">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-screen h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-xl md:text-3xl font-bold text-white">
          Young Women Mediation Network
        </h1>
        <p className="mt-2 text-sm md:text-lg max-w-2xl text-white">
          Empowering young women to lead mediation and peacebuilding efforts worldwide.
        </p>
        <button className="mt-3 bg-[#88C641] text-white px-4 py-2 text-sm md:text-lg rounded-lg hover:bg-[#2B256E]">
          Get Involved
        </button>
      </div>
    </div>
  );
}

export default Home;
