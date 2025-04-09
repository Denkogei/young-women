import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Initiatives = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        className="max-w-6xl w-full bg-white shadow-lg rounded-3xl p-6 md:p-12 space-y-8 border border-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Full Name of Organization */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Full Name of Organization
          </h2>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg">
            International Centre for Peace, Human Rights and Development in Africa (IPHRD-Africa).
          </p>
        </motion.div>

        {/* Overview of Organization */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Overview of Organization
          </h2>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg">
            IPHRD-Africa is a Non-Governmental Organization (NGO) registered and based in Nairobi, Kenya, with a local, national, and international status to operate in Africa. 
            It is involved in policy support on youth engagement in peace processes as well as building capacities for youth to effectively engage in peace processes. This aligns with the implementation of United Nations Security Council Resolutions (UNSCR) 2250 and 2419 on youth, peace, and security, as well as UNSCR 1325 on women, peace, and security, and African Union commitments on youth and women empowerment in peace and security.
          </p>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg mt-4">
            The team at IPHRD-Africa is below 30 years.
          </p>
        </motion.div>

        {/* Areas of Operation */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Areas of Operation
          </h2>
          <p className="text-gray-900 leading-relaxed text-sm md:text-lg">
            IPHRD-Africa currently operates in the Great Lakes and Horn of Africa, building mediation capacity of young women leaders to effectively support track 1, 2, and 3 mediation efforts. 
            Key focus countries include Kenya, Somalia, South Sudan, and Ethiopia, among others.
          </p>
        </motion.div>

        {/* Key Areas of Focus/Programs */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Key Areas of Focus/Programs
          </h2>
          <div className="space-y-4">
            {["Youth, Peace and Security - The role of youth in conflict prevention, dialogue, and mediation",
              "Women, Peace and Security - The roles of young women in peace processes",
              "Youth Leadership in Peace and Security",
              "The inclusion of Persons with Disabilities (PWDs) in peace processes"].map((focus, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-900 text-sm md:text-lg">{focus}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Initiatives Undertaken by the Organization */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Initiatives Undertaken by the Organization
          </h2>
          <div className="space-y-4">
            {["Negotiation and Mediation Training for young women leaders in Horn of Africa, Addis Ababa, Ethiopia, 10-15 June 2019",
              "IPHRD-Africa participated at the African Union Eastern Africa Regional Consultation on the role and contributions of youth to peace and security in Africa; and Mediation Training, Asmara, Eritrea, 10-13 June 2019",
              "Participated at the Validation Meeting on the Thematic Research on Impact of Devolution on Peacebuilding in Kenya held in Nairobi, Kenya, 29 March 2019",
              "IPHRD-Africa participated at the First International Symposium on Youth Participation in Peace Processes held in Helsinki, Finland, 04-06 March 2019",
              "IPHRD-Africa hosted the International Young Women Mediation Forum in partnership with GIZ from 29-31 January 2019 in Nairobi, Kenya",
              "Participated at the IGAD - EU Peer-to-Peer Experience Sharing Workshop on Mediation organized by IGAD Mediation Support Unit, 24 - 25 January 2019, Kampala, Uganda",
              "Participated at the Pre-Symposium Expert Group Meeting and Consultation: Youth Participation in Peace Processes held from 03-04 February 2019 in Doha, Qatar"].map((initiative, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-900 text-sm md:text-lg">{initiative}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Some Key Partners that the Organization Works/Has Worked With */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B256E] mb-4">
            Some Key Partners that the Organization Works/Has Worked With
          </h2>
          <div className="space-y-4">
            {[" IPHRD-Africa is an active member of the United Network of Young Peacebuilders. ",
              "IPHRD-Africa has a strong partnership with Norwegian Church Aid (NCA) in 2018 on implementing a project on Building Mediation Capacity of young women leaders in the great lakes and Horn of Africa. ",
              "IPHRD-Africa has a strong partnership with the Fellowship of Christian Councils and Churches in the Great Lakes and Horn of Africa (FECCLAHA) on implementing a project  on Building Mediation Capacity of young women leaders in the great lakes and Horn of Africa: MOU between IPHRD-Africa and FECCLAHA: 2018 to 2020. ",
              " IPHRD-Africa in partnership with Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH (GIZ) on International Young Women Mediation Forum, 2019.",
              "IPHRD-Africa partnership with Clingendael Academy, The Hague, the Netherlands (2018 and 2019): Negotiation and Mediation Training for young women leaders in Horn of Africa. ",
              "IPHRD-Africa partnership with Hon. Betty Bigombe, Mediator, and (July 2018-December 2018 and January 2019): Mediation Mentorship to the young women leaders during the Negotiation and Mediation training held in Addis Ababa, Ethiopia, 23-27 July 2018 and during the International Young Women Mediation Forum.",
              "IPHRD-Africa partnership with Norwegian Centre for Conflict Resolution (NOREF) (July 2018): Mediation Mentorship to the young women leaders during the Negotiation and Mediation training held in Addis Ababa, Ethiopia, 23-27 July 2018 as well as the Intergenerational forum on mediation and young women led missions to support ongoing national dialogue in Kenya.",
              "IPHRD-Africa partnership with Arigatou International, Kenya (2018): In identification of young women from the horn of Africa for the negotiation and mediation training. ",
              " IPHRD-Africa partnership with the Africa Alliance of YMCAs (AAYMCA) (2018): In identification of young women leaders for the intergenerational forum on mediation. ",
              "IPHRD-Africa partnership with Partnership with Kenya National Commission of Human Rights (KNCHR) and Independent Electoral and Boundaries Commission (IEBC) in 2017: Training and deployment of youth and PWDs as long term election observers in informal settlements to enable them observe elections as well as participate in conflict prevention and resolution before, during and after the 2017 general elections.",
              " IPHRD-Africa partnership with University of Nairobi, Institute of Diplomacy and International Studies (IDIS), IDIS Forum of International Affairs (IFIA) (2017/2018): training students on negotiation, dialogue and mediation. "
            ].map((initiative, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-900 text-sm md:text-lg">{initiative}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="space-y-4">
  {[
    { label: "Name", value: "Felix Kiptoo" },
    { label: "Position", value: "Programmes Coordinator, IPHRD-Africa" },
    { label: "Address", value: "P.O. Box 18829-00100, Nairobi, Kenya" },
    { label: "Email", value: "info@iphrdafrica.org; felix@iphrdafrica.org" },
    { label: "Website", value: "www.iphrdafrica.org" },
    { label: "Facebook", value: "https://www.facebook.com/IPHRDAFRICA/" },
    { label: "Twitter", value: "@iphrdafrica" },
    { label: "Instagram", value: "iphrdafrica" },
    { label: "YouTube", value: "IPHRD-Africa" }
  ].map((contact, index) => (
    <div key={index} className="flex items-start space-x-3">
      <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
      {contact.label === "Facebook" || contact.label === "Website" ? (
        <a
          href={contact.value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 text-sm md:text-lg underline"
        >
          {contact.label}: {contact.value}
        </a>
      ) : (
        <p className="text-gray-900 text-sm md:text-lg">
          <strong>{contact.label}:</strong> {contact.value}
        </p>
      )}
    </div>
  ))}
</div>

      </motion.div>
    </div>
  );
};

export default Initiatives;
