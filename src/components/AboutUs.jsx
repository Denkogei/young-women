import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10 mt-20">
      <motion.div
        className="max-w-6xl bg-white shadow-2xl rounded-3xl p-12 space-y-10 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-[#2B256E] text-center mb-8 uppercase tracking-wide">
          Our Objectives
        </h1>

        {/* Main Objective */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-semibold text-[#88C641] mb-4">Our Main Objective</h2>
          <p className="text-gray-900 leading-relaxed text-lg">
            To promote human rights, governance, conflict prevention, and peacebuilding for sustainable development.
          </p>
        </motion.div>

        {/* Specific Objectives */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-semibold text-[#88C641] mb-4">Specific Objectives</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-900 text-lg">
            <li>Empower communities and support rehabilitation for vulnerable groups in fragile and post-conflict areas.</li>
            <li>Strengthen gender mainstreaming in peace, human rights, and development in Africa.</li>
            <li>Promote human rights and inclusion in development processes.</li>
            <li>Advance research and training for sustainable peace.</li>
            <li>Promote good governance and democracy.</li>
          </ul>
        </motion.div>

        {/* Young Women Mediation Network */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold text-[#2B256E] mb-4">Young Women Mediation Network</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-900 text-lg">
            <li>Advocate for young women’s participation in peace processes.</li>
            <li>Strengthen mediation skills through mentorship.</li>
            <li>Create a network of young women mediators.</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
