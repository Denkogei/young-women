import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        className="max-w-6xl w-full bg-white shadow-lg rounded-3xl p-6 md:p-12 space-y-8 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Introduction */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Introduction
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
        </motion.div>

        {/* About the Young Women Mediation Network */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            About the Young Women Mediation Network
          </h2>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg">
            The Young Women Mediation Network, managed by young women at IPHRD-Africa for young women globally, was established in 2017, inspired by the work that young women are already doing in their spaces and at the same time, inspired by the glaring gap on young women’s engagement and participation in peace processes like dialogue and mediation.
          </p>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
            The Network recognizes need for increasing the effective engagement and meaningfully involvement of women in order to make peace processes more inclusive and the peace agreements more sustainable. The Network thus aims to make visible the many qualified young women in Africa and around the world available to support mediation and dialogue processes at different tracks.
          </p>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
            The Network supports the implementation of the United Nations Security Council resolution on Youth, Peace and Security (UNSCR 2250) and UNSCR 2419 (2018) and UNSCR 1325 (2000) on Women, Peace and Security.
          </p>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
            Young women often face various forms of marginalization in terms of being young and being women and are hindered by patriarchy, cultural stereotyping and the assumption that peace is a masculine affair, the Network recognises these challenges and seeks to strengthen the capacities for young women to be effective mediators and mediation experts as well as advocate for policy support for spaces for young women, while documenting the experiences of young women in peace processes.
          </p>
        </motion.div>

        {/* Our Objectives */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Our Objectives
          </h2>
          <div className="space-y-4">
            {["To make young women’s competences in peace processes like mediation and dialogue more visible to mandating institutions and other actors working on dialogue and mediation. This seeks to counter arguments that there are no or few young women with mediation expertise.",
              "To advocate for the increase in the number of young women that are actively involved in and influencing peace processes like mediation and dialogue, including in leadership positions.",
              "To raise awareness on the challenges that young women face when engaging in peace processes and develop strategies for addressing these challenges.",
              "To strengthen the capacities of young women mediating or supporting peace processes in conflict-affected countries through mentorship and other capacity building approaches.",
              "To create a mutually supportive network of young women mediating or supporting peace processes and mediation experts."].map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-900 text-sm md:text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Added Advantage */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Added Advantage
          </h2>
          <div className="space-y-4">
            {["The members will network with their peers, exchange experiences, share lessons learned and provide mutual peer support face to face in forums/meetings or virtually.",
              "The members will have an international network and a platform to discuss different issues with each other and share their different perspectives.",
              "The experiences of the members will be documented and widely disseminated.",
              "The members will benefit from policy discussions on dialogue and mediation.",
              "The members will benefit from the mentorship engagements with seasoned mediators and mediation experts as well as with their peers.",
              "Members will benefit from training on dialogue, mediation and other related areas."].map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-900 text-sm md:text-lg">{advantage}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
