import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#2B256E] text-center mb-6">
          Our Objectives
        </h1>
        
        <h2 className="text-2xl font-semibold text-[#88C641] mb-4">
          Our Main Objective
        </h2>
        <p className="text-gray-700 mb-6">
          To promote human rights, governance, conflict prevention and peace building for sustainable development.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#88C641] mb-4">Specific Objectives</h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            To empower the community and facilitate recovery, rehabilitation, and development for vulnerable/marginalized groups in fragile, conflict-affected, and post-conflict communities.
          </li>
          <li>
            To support the processes of conflict prevention, resolution, and management, social cohesion, healing, and reconciliation in fragile, conflict-affected, and post-conflict communities.
          </li>
          <li>
            To strengthen gender mainstreaming in peace, human rights, and development in Africa.
          </li>
          <li>
            To mainstream human rights, including the rights of vulnerable and marginalized groups, in peace and development processes in Africa, focusing on fragile, conflict-affected, and post-conflict communities.
          </li>
          <li>
            To support the generation and training of capacities for sustainable peace and development in Africa.
          </li>
          <li>
            To promote good governance and democracy in fragile, conflict-affected, and post-conflict communities.
          </li>
          <li>
            To undertake applied research to support policy development and training on peace, human rights, and development in Africa.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
