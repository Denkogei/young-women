import React from "react";
import { motion } from "framer-motion";

const initiatives = [
  {
    title: "1. First Ever International Intergenerational Forum on Mediation for Young Women",
    description:
      "An impactful global gathering focused on mediation and peacebuilding by and for young women.",
    videoLink: "https://www.youtube.com/watch?v=fn_WfLihZtk",
    bookletLink: {
      name: "YOUNG WOMEN MEDIATION 2019 BOOKLET",
      link: "https://drive.google.com/file/d/1eYUyPxsSZ13mobGE8dKpI2ZyHk1PYK6D/view",
    },
  },
  {
    title: "2. 2nd International Young Women Mediation Forum 2020",
    description:
      "A creative and empowering platform leveraging art for peace and dialogue.",
    videoLink: "https://www.youtube.com/watch?v=tt075Xj2-m0",
    bookletLink: {
      name: "YOUNG WOMEN IN MEDIATION BOOKLET 2020",
      link: "https://drive.google.com/file/d/1b7Nv7f9rqLFDmpVAKgdXBKiLcw5R2tlV/view",
    },
  },
  {
    title: "3. Young Women Mediation Forum",
    description:
      "Highlighting mentorship journeys and knowledge transfer across generations.",
    videoLink: "https://www.youtube.com/watch?v=cqAlnW4asbY",
  },
  {
    title: "4. Youth and Young Women Leaders Mediation and Regional Advocacy Initiatives (Kenya)",
    description:
      "A localized yet powerful engagement on intergenerational collaboration in peacebuilding.",
    videoLink: "https://www.youtube.com/watch?v=A55ztnAUi9I",
    bookletLink: {
      name: "Youth and Young Women Leaders Mediation and Regional Advocacy",
      link: "https://interculturalinnovation.org/international-centre-for-peace-human-rights-and-development-in-africa-iphrd-africa-youth-and-young-women-leaders-mediation-and-regional-advocacy-initiatives/",
    },
  },
  {
    title: "5. Mediation Mentorship Documentation",
    description:
      "A localized yet powerful engagement on intergenerational collaboration in peacebuilding.",
    videoLink: "https://www.youtube.com/watch?v=lyfpztIzTDg&t=12s",
    booklets: [
      {
        name: "Young Women Mediation Booklet",
        link: "https://drive.google.com/file/d/1NspH-ABQNdlZ8fVdu4oR0arQPr7qNPjW/view",
      },
      {
        name: "YOUNG WOMEN MEDIATION 2018 Booklet",
        link: "https://drive.google.com/file/d/1IJLNUsWWD6sGUezhEU8v70Xh9eCMs903/view",
      },
      {
        name: "Young Women Mediation Booklet",
        link: "https://drive.google.com/file/d/1NspH-ABQNdlZ8fVdu4oR0arQPr7qNPjW/view",
      },
    ],
  },
];

const convertToEmbedUrl = (url) => {
  if (!url) return null;
  const videoId = url.split("v=")[1];
  if (!videoId) return null;
  const ampersandPosition = videoId.indexOf("&");
  const cleanVideoId =
    ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
  return `https://www.youtube.com/embed/${cleanVideoId}`;
};

const Initiatives = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-6 md:p-12 space-y-8 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
          Key Initiatives for Young Women in Peacebuilding
        </h2>

        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300 space-y-4"
          >
            <h3 className="text-xl font-semibold text-[#2B256E]">{item.title}</h3>
            <p className="text-gray-800 text-sm md:text-lg">{item.description}</p>

            {/* Single booklet with custom label */}
            {item.bookletLink && !item.booklets && (
              <a
                href={item.bookletLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm md:text-base text-[#2B256E] bg-white border border-[#2B256E] rounded-full hover:bg-[#2B256E] hover:text-white transition duration-200"
              >
                <span>📘</span>
                <span>{item.bookletLink.name}</span>
              </a>
            )}

            {/* Multiple booklets */}
            {item.booklets && item.booklets.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.booklets.map((booklet, idx) => (
                  <a
                    key={idx}
                    href={booklet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm md:text-base text-[#2B256E] bg-white border border-[#2B256E] rounded-full hover:bg-[#2B256E] hover:text-white transition duration-200"
                  >
                    <span>📘</span>
                    <span>{booklet.name}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Embedded YouTube video */}
            {item.videoLink && (
              <div className="mt-4 w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={convertToEmbedUrl(item.videoLink)}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Initiatives;
