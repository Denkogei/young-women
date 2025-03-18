import React, { useState } from "react";

const membersData = [
  {
    name: "Irene Wanjiku Kirumba",
    position: "Programmes Officer",
    phone: "+254 720247 718",
    email: "wanjikukirumba89@gmail.com",
    address: "Kiambu, Kenya",
    image: "/members/irene-wanjiku.png",
    profile: `Irene Wanjiku Kirumba is a passionate and strong contributor to numerous programs that make the world a better place. 
              With her Master of Arts Degree in International Relations with a concentration in Peace and Conflict and a Bachelor of Arts 
              Degree in Social Sciences with a major in Political Science and a minor in Sociology. She is also a Certified Professional 
              Mediator and a trained Project Manager. Irene’s impact on governments, communities, women and youth has been through participating in a range of advocacy, governance, peace and security programs in an official as well as volunteer capacity.
             Irene’s contribution, has been more prominence to programs through effective program branding, relationship building, media liaison and reporting. She has been recognized for her strong leadership, public speaking as well as research and writing capabilities
             Irene is inspired by other people’s experiences and legacies. And in her free time you will find her enjoying nature walks, hiking, biking, dancing or reading a good book.`,
  },
  {
    name: "Lidya Getahun Amare",
    position: "Programmes Officer",
    phone: "+251 912 001684",
    email: "lidyagetahun8222@gmail.com",
    address: "Addis Ababa, Ethiopia",
    image: "/members/lidya-getahun.jpeg",
    profile: `I am a dedicated and driven professional with a proven track record of designing and implementing successful programs. 
              With expertise in managing diverse projects across various contexts and phases, I have consistently led teams in achieving 
              collective programming goals. Equipped with a deep understanding of Ethiopia's political dynamics, I bring strong analytical, interpersonal, and communication skills to the table. I am committed to continuous learning and personal growth, and I actively foster a collaborative and inclusive environment that promotes teamwork and co-creation.`,
  },
  {
    name: "Linda Kageha Mugatsia",
    position: "Programmes Officer",
    phone: "+254 728 912334",
    email: "lidyagetahun8222@gmail.com",
    address: "Nakuru, Kenya",
    image: "/members/linda-kageha.png",
    profile: `Linda Kageha Mugatsia is a Kenyan citizen and a holder of a Bachelor’s degree in Business Management and Information Technology 
              from Kabarak University, currently pursuing her Masters in Strategic Management at Kenyatta University. 
              She is a member of the County Engagement Forum heading the Economic pillar, working on countering violent extremism. 
              Previously, she was a County Executive Officer at the Kenya National Chamber of Commerce and Industry Nakuru Chapter. Linda represents the Private sector as a Board of Trustees at the Nakuru Endelevu Trust Initiative (NETI) a local development organization that fosters community-owned, community-led, and community-managed development. At the Agricultural Society of Kenya (ASK) Central Rift region, she is a show organizing committee member.
Linda is a Young Women Mediation Ambassador Kenya having been at the forefront of championing matters of peace. She has proven skills in Management, Lobbying and Advocacy, Mediation, Leadership, and Governance that enable her to handle challenging and demanding tasks.`,
  },
  {
    name: "Brenda Mongina Ondieki",
    position: "Programmes Officer",
    phone: "+254 795 164505",
    email: "brendaondieki2@gmail.com",
    address: "Nakuru, Kenya",
    image: "/members/brenda-mongina.png",
    profile: `I am a Young Woman Mediator and a Human Rights Defender from Nakuru County but my community and friends would describe me as an easy-going, a good listener, a mediator ninja and lastly a waffle maker extraordinaire. 
              Growing up in a humble background and privileged to be part of the Muslim Community has taught me that hard work and thrift are sometimes the only things a person can afford. My job as a Programme Officer has allowed me to have a better understanding on empathy and connection that I had. When my colleagues or youth in the community start acting up, I understand better how to help them without sounding bossy or controlling.
              Having been given the privilege of being in diverse environments in various capacities, I have been equipped with skills and knowledge of how to handle small as well as large groups of people from both humanistic and work perspective. By living, studying and working in multicultural societies I have learned tolerance, patience, flexibility and respect through giving out information, instructing, advising, listening and assisting in problem-solving.
              I work equally well on my own or as a member of a team. I am organized, honest, dependable and capable of keeping deadlines and carrying out big responsibilities. And most importantly I possess a creative open and proactive mindset, a positive attitude and a good sense of humor. I have excellent public speaking skills both in English and Kiswahili.`
  },
  {
    name: "Wendy Aura",
    position: "Executive Director",
    phone: "+254 700 489582",
    email: "wendyjoyce44@gmail.com",
    address: "Nairobi, Kenya",
    image: "/members/wendy-aura.png",
    profile: `Highly skilled and professional development program leader with over 6 years multifaceted experience in providing training and leadership in the development, articulation & implementation of youth and Women empowerment programs on education, governance and Sexual and reproductive health. Certified trainer by the Clingendael Institute, Netherlands and trained mentor of youths. Alumni of the American Express Leadership Academy and Global Youth Ambassador of Theirworld. Holds a Bachelor of Commerce from the University of Nairobi and Diplôme D'Etudes En L'angue Française DELF A2 from Alliance Française.  
              Wendy is a Rise Up Leader 2024 and Speaker and moderator of various youth forums and media platforms. Has won accolades including the National Diversity and Inclusion Awards Youth in Leadership category; Top 25 Most Influential Female Student Leaders 2019 and Open Source Leader 2019 by Common Purpose. Executive Director of Young Women Leaders Connect, YWLC, a youth led organization that aims at socio- economic and political empowerment of the Young people. Sits at the board of the Hope for Kenya Slum Adolescents Initiative HKSAI and Legal Sister and serves as the Vice President- East Africa of the Pan African Female Youth Leaders PANAFYL where she fiercely champions for gender equality in Africa. Her story has been published on The People’s Daily Magazine; premier issue of We Are Magazine; LeaderStories (global storytelling platform for young leaders); podcast LeaderVoices (a production of The American Express Leadership Academy alumni network) and Nairobi News. Has vast experience in mentorship, events management, graphic designing and moderation.`
  },
  {
    name: "Rachel Hakim Edward",
    position: "CEO",
    phone: "+211 920 285046",
    email: "rachelmundua@gmail.com",
    address: "Hai Mouna, Juba, South Sudan",
    image: "/members/rachel-hakim.png",
    profile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl suscipit malesuada id a justo. Donec suscipit egestas tortor.`
  },
  {
    name: "Berlinda Woelinam Azumah",
    position: "Coordinator for Women and Youth Empowerment, Women Peace and Security",
    phone: "+233 244 925512",
    email: "berzumah@gmail.com",
    address: "Accra, Ghana",
    image: "/members/berlinda-woelinam.png",
    profile: `Mama Klebetesi III, Divisional Queen mother of the Mafi Traditional Area and Queen of Mafi Sasekpe of the Volta Region of Ghana (known in private life as Berlinda Woelinam Azumah) is a youth and women development practitioner. Holding a Masters Degree in Peace, Security and Intelligence Management from the University of Professional Studies, Ghana. She is also the coordinator in charge of Youth and Women Empowerment for Trans4orm Ghana, a youth and peace building oriented organization based in Ghana with an affiliate in Niger (Trans4orm Niger) As a member of the west African women working group and a certified commonwealth mediator. And part of her mandate as a queen mother of her traditional area, her main focus is the welfare of youth, women and children with special focus on education, peacebuilding and their economic wellbeing. She has collaborated with some individuals and institutions to undertake projects that are tailored to empower women and children. These projects include, the teenage mothers back to school project, the original sasekpe Gari, Cassava flour and corn flour productions, the smart youth project, community business, training traditional leaders in peace building, mediation, conflict resolution and community development. .` 
  },
  {
    name: "Mekides Berhanu Alemu",
    position: "Grant and Partnership Officer",
    phone: "+251 923 113487",
    email: "berhanumekides48@gmail.com",
    address: "Addis Ababa, Ethiopia",
    image: "/members/mekides-berhanu.png",
    profile: `
      Growing up in Addis Ababa, Mekides Berhanu Alemu witnessed the transformative power of peacemaking firsthand through her grandfather, a community-respected mediator. His unwavering dedication to resolving conflicts, from marital woes to social clashes, instilled in Mekides a deep aversion to discord and a burning desire for peace. This passion led her on an unconventional path.
  
      While five years in biomedical engineering weren't her ultimate calling, the skills and knowledge she gained became a robust foundation for her true passion: contributing to peacebuilding. Fueled by an MBA that equipped her to tackle complex issues like mass migration and conflict, Mekides found her calling at a local civil society organization dedicated to human rights and good governance. There, she honed her skills and delved deeper into practical peacebuilding, spearheading peace projects and demonstrating her exceptional talent for conflict resolution.
  
      This invaluable experience ultimately led to her prestigious appointment as a Young Women Mediation Ambassador for the Horn of Africa at IPHRD-Africa, where she now plays a crucial role in empowering young women and fostering lasting peace in the region.
  
      Today, Mekides channels her unwavering dedication through a local civil society organization, fostering meaningful youth and women's participation in peacebuilding. A vocal advocate for their inclusion in peace processes, she serves as a beacon of hope, a testament to the transformative power of unwavering dedication and the potential of peacemaking to shape a brighter future.
    `
  },
  {
    name: "Agau Bul Deng",
    position: "Programme Coordinator",
    email: "agaubul8@gmail.com",
    address: "Juba, South Sudan",
    image: "/members/agau-bul-deng.png",
    profile: `Agau Bul Deng recently worked at African Centre for the Constructive Resolution of Disputes (ACCORD), as a programmes intern in Preventive Action and Mediation unit in Durban South Africa. Prior to joining ACCORD, she worked as an intern in Mediation Support Unit (MSU) under Peace and Security Division of the Intergovernmental Authority on Development (IGAD). She supported the organization and implementation of knowledge sharing and capacity building workshops across the Horn of Africa region, fostering the greater inclusion of youth and young women as participants and facilitators for these workshops.
  
  Agau is also a part of the South Sudan Women Research Network with Rift Valley Institute, where her research explores the role of women in peace engagement and conflict resolution in South Sudan, focused on the case study of Bor, Jonglei State. Additionally, she is a member of a social enterprise, Ma ’Mara Sakit Village, an Arabic Phrase loosely translated as Not Just a Woman, where she leads the Women Community program. 
  
  Agau previously trained in peacebuilding with Search for Common Ground in South Sudan and, as a volunteer, has contributed technical advice to Search’s youth-led radio program and collaborated with Search to promote local-level understanding of an engagement around the Revitalized Peace Agreement.  
  
  Agau holds a Bachelor’s Degree in Peace and Conflict Studies. At the university level, she coordinated public lectures and organized extra curriculum activities to promote experience sharing with prominent youth leaders in peacebuilding realm and inter-university engagements on the role of youth as agents of change. Agau recognizes women as great ingredients to a sustainable and lasting peace on the Continent, and therefore, their involvement and participation in Peace and Security needs to be embraced.`
  },
  {
    name: "Hallima Nyota Anguria",
    position: "Executive Director",
    phone: "+254 702 207894",
    email: "nyotahallima@gmail.com",
    address: "Kakamega County, Kenya",
    image: "/members/hallima-nyota-anguria.png",
    profile: `Hallima advocates for United Nations Sustainable Development Goal Number 5 on gender equality, and number 16 on Peace and Security respectively. Nyota works with vulnerable women and girls, youth, people with disabilities as well as adolescent girls living in the rural and informal settlements. 
  
  She aims to contribute to a fairer, safer, and more inclusive world by 2030 through movement building and strategic partnership. She is an experienced peacebuilding and gender, equality and inclusion trainer. Her report writing and linguistic skills are impeccable with a high command of English and Kiswahili. 
  
  This together with her rich interpersonal skills places her at an advantage of delivering in a wide range of humanitarian and social change interventions.`
  },
  {
    name: "Achien Winnie Tokmac",
    position: "Claims Officer",
    phone: "+211 928 688754",
    email: "achientokmac17@gmail.com",
    address: "Jobororona, South Sudan",
    image: "/members/achien-winnie-tokmac.png",
    profile: `I am a dedicated Human Resources and administration professional with over 4+ years of experience implementing, administration and staff training, and development to mention but a few. 
  
  This experience and relevance of the field of a course that I pursued makes me qualified for any administrative position due to my familiarity with the few companies and NGOs. The professional skills that I acquired in the course of my previous employments have enabled me to perform my duties and responsibilities with due diligence, care, and competence, as well as being observant of the core values of employers. 
  
  I am equipped with a solid commitment to providing high-quality support to the management for consistent implementation of organizations’ policies and procedures, employee coaching, and training with various organizations across the country. I have demonstrated success in helping employees and employers comply with internal rules, policies, procedures, and labor laws. Additionally, I have demonstrated success in managing both financial and human resources of organizations.`
  },
  {
    name: "Hawa TRAORE",
    position: "Chargée de Genre et Inclusion",
    phone: "+223 76 84 50 59",
    email: "hawagoundam10@gmail.com",
    address: "Bamako, Mali",
    image: "/members/hawa-traore.png",
    profile: `Born on October 10, 1990, in Goundam, in the region of Timbuktu in Northern Mali, I am a jurist who attended the Faculty of Legal and Political Sciences of Bamako, specializing in Business Law. 
  
  I am a young woman committed to defending women's rights within movements and associations for the protection of women's rights for over 10 years, and I am a feminist. Since late 2018, I have been the Gender Officer and focal point for Gender-Based Violence (GBV) at the NGO WOIYO KONDEYE (Space for Reflection and Mutual Assistance with Women), an organization that promotes gender equality and defends women's rights. Additionally, I have served as the Gender lead for the National Network for Democratic and Patriotic Awakening (RENEDEP) Mali since late 2019.
  
  I am a staunch advocate for women's rights and have had the opportunity to work with several organizations of young and women human rights defenders. I was an active member of the National Youth Council of Timbuktu in 2014, a member of the Hakew SABATILI Framework, and an engaged contributor to the Mali Justice Project (MJP). Furthermore, I am an active member of the GBVIMS sub-Cluster, a member of the Steering Committee of the AVENIR JUSTE program, the JE M'ENGAGE MALI movement, and the PSEA focal point.
  
  My work extends to the effective implementation of the National Action Plan for UN Resolutions 1325 and 2250 throughout Mali, as well as advocating for the proper application of Law 052 of December 2015, which mandates a 30% gender quota in decision-making bodies in Mali.
  
  At the Regional Level, I lead the WARIKO campaign in Mali for the XOESE Fund for Francophone Women based in Togo, serve as the focal point for RENDEP Mali at the Gorée Institute in Senegal, and was a 2023 beneficiary of the Gorée Institute Youth Leadership Academy (GYLA) through the POWER OF DIALOGUE program. I am also a member of HWPL, an international organization that promotes peace and social cohesion worldwide.
  
  The words that define me are: courage, humility, perseverance, and feminism. I speak French, English, Bamana Kan, and Sonrhai, my native language. My hobbies include reading, sports, and cinema.`
  },
  {
    name: "Viola Sang",
    position: "Director",
    phone: "+254 712 821014",
    email: "violasang@gmail.com",
    address: "Eldoret, Kenya",
    image: "/members/viola-sang.png",
    profile: `aring professional prepared to deliver case management and client advocacy. Dedicated to helping others achieve progress toward goals and meet specific needs. Wide-ranging knowledge of applicable services and professionals appropriate
     for clients. Experience in service coordination and support. Expert at conducting assessments, developing individualized care plans, and coordinating referrals. Upbeat and encouraging with attention on modeling and coaching appropriate behavior and practices.`
  },
  {
    name: "Zelpha Ingasiah Vukono",
    position: "Coordinator",
    phone: "+254 700 669095",
    email: "zellyingasiah@gmail.com",
    address: "Nairobi, Kenya",
    image: "/members/zelpha-vukono.png",
    profile: `was among the youth who were trained by the ministry of youth in basic skills in disaster  response, countering violent extremism and conflict management back in 2011. Over the years I have advanced further in these fields through personal exploration, trainings in workshops convened by institutions and practicing. I have a certificate in Conflict transformation, forgiveness and reconciliation from Hekima Institute of peace studies. To prepare me for the work that I gave done in peace building, I have been trained in sustained dialogue, trauma informed resiliency framework and humanitarian response. In addition, I have a diploma in community development and education (DCDE) from Tangaza.  
    I have been part of research work on violent extremism, urban violence and resilience tool kit as a respondent. I have been actively involved in community driven initiatives to prevent and counter violent extremism and currently I am part of the county engagement forum (CEF) representing the education pillar. I have been involved in programs like Kenya Tuna uwezo (Global communities), Kenya Transition Initiative (Chemonics Africa), Tubonge mtaani (Life & Peace Institute) among others as a community resource person doing facilitation of dialogues, develop concepts to for early warning early response, prevent and counter violent extremism, build relationship between police/administration and the community (especially youth), conduct community outreaches through community workshops. I was also the youth and women representative of the Nyumba kumi cluster in my neighborhood in Majengo. Currently I serve as the coordinator of Usawa CBO a women-led CBO that I was part of founding which advances gender equity and equality by implementing projects in peace building, governance and Sexual reproductive health rights (SRHR).  
    Through the work I do, I convened a meeting of Muslim clerics and mediated on the conflict at the heart of radicalization in 2012. My contribution in Kenya Tuna Uwezo program earned me a slot as part of the delegates that attended a meeting with representatives of the Senate in USA to share more on the soft approach to preventing and countering Violent extremism. In addition, I attended a workshop in Kaduna, Nigeria on conflict transformation. Being part of the founders of a women-led community-based organization working to advance gender equity and equality is a huge plus. Not only for as a founder but also for the demographic we represent and reach out to. Moreover, having an opportunity to do community projects that localize global laws such as UNSCR 1325 and 2250. Furthermore, making my small contribution to lasting peace such as mediating the clerics, doing interventions as responses to looming threats and averting the threats at the local context. `
  },
  {
    name: "Fartun Mohamed Ibrahim",
    position: "Career Development Advisor",
    phone: "+252 618 900977",
    email: "fartunm@gmail.com",
    address: "Wadajir District, Muqdisho, Somalia",
    image: "/members/fartun-ibrahim.png",
    profile: `artun Ibrahim lives in Somalia; she is a results-oriented and compassionate Career Development Advisor, and a member of the Young Women Meditation Network and Her Network -Somali Women Professionals. 
Fartun Ibrahim's diverse work as a Career Development Advisor at the City University of Muqdisho provided comprehensive career counselling, also demonstrated strong leadership as a Community Social Worker, advocating for social justice and raising awareness on critical issues at the Ministry of Women's Human Rights. Their role as a Monitoring and Evaluation Officer at the Association of Somali Women Lawyers highlighted their commitment to ensuring the effectiveness of social initiatives through meticulous planning and analysis. Additionally, as a Finance Officer at the Peace and Human Rights Network, Fartun exhibited proficiency in financial management, emphasizing transparency and integrity. Through their versatile skills and dedication, Fartun Ibrahim has made significant contributions to professional growth, social justice, and accountability within their community.
Fartun Ibrahim holds a Bachelor of Social Work from City University Mogadishu, showcasing their dedication to understanding social issues and human behavior. Additionally, they possess a Bachelor of Science in Accounting from SIMAD University, reflecting a multidisciplinary approach to addressing social and economic challenges. Their academic achievements underscore a commitment to lifelong learning, preparing them to contribute meaningfully to their field Top of Form. 
Overall, Fartun Ibrahim is a dedicated professional with a strong commitment to social justice and community empowerment. Their diverse background, coupled with their passion for helping others, positions them as a valuable asset in any organization striving to make a positive impact on society.`
  },
  {
    name: "Yelyzaveta Glybchenko",
    position: "Artist",
    phone: "+252 618 900977",
    email: "glybchenko.liza@gmail.com",
    address: "Tampere, Finland",
    image: "/members/yelyzaveta-glybchenko.png",
    profile: "Yelyzaveta Glybchenko is a creative artist based in Tampere, Finland. [Add more details about her artistic style, notable works, exhibitions, or projects if available.]"
  },
  {
    name: "Francesca Caruso",
    position: "Analyst",
    phone: "+252 618 900977",
    email: "fr.caruso1@gmail.com",
    address: "Via Galvani, Rome",
    image: "/members/francesca-caruso.png",
    profile: "Francesca Caruso is an experienced analyst based in Rome, Italy. [Add more details about her expertise, industries she works in, and key projects if available.]"
  },
  {
    name: "Mercy Jerop Sirgoi",
    position: "Graduate Student",
    phone: "+1 574 621 0643",
    email: "mj3038@gmail.com",
    address: "Indiana, USA",
    image: "/members/mercy-jerop-sirgoi.png",
    profile: "Mercy Jerop Sirgoi is a dedicated advocate for peace and gender equality with eight years of experience in promoting equal access to education and empowering women and girls in decision-making, peacebuilding, and leadership roles. She previously served as the Executive Director of Rural Women Peace Link, a grassroots, women-led organization in Kenya focused on addressing the needs of women and girls during conflict and emergencies. Mercy is a Young Woman Mediation Ambassador with the International Centre for Peace, Human Rights, and Development (IPHRD Africa) and a beneficiary of the East Africa Young Women Leadership and Mentoring Initiative with Akili Dada. She is also a recipient of the Kroc Institute Fellowship Award. Currently pursuing a Master of Global Affairs in International Peace Studies at the University of Notre Dame, she builds upon her Bachelor of Arts in Education from Moi University to further her mission of fostering peace and gender equality on a global scale."
  },
  {
    name: "Nasra Saeed Elmi",
    position: "Project Manager",
    phone: "+252 63 4412917",
    email: "nasrosaeed@gmail.com",
    address: "New Hargeisa, Hargeisa, Somaliland",
    image: "/members/nasra-saeed-elmi.png",
    profile: `Nasra Saeed Elmi is a dedicated economist with a profound commitment to community development and peacebuilding initiatives. With a Bachelor's degree in Economics from Nairobi University, Nasra has honed her skills and expertise over the years through extensive work experience and continuous professional development.
    Nasra's academic journey began in her hometown of Erigavo, Somalia, where she completed her primary and intermediate education. She pursued her secondary education at SOS HG Sheikh Secondary School in Sheikh, Somalia, earning her General Certificate of Secondary Education (GCSE) and International General Certificate of Secondary Education (IGCSE). Later, she excelled in her A Levels at Nairobi Jaffery Academy, Nairobi, Kenya, before obtaining her Bachelor of Science in Economics from Nairobi University's School of Economics.
    Nasra possesses a diverse skill set that includes proficiency in computer applications, strong planning and organizational abilities, effective communication skills in English, Somali, Arabic, and little bit of Swahili, and adept presentation capabilities. Her leadership qualities, adaptability, and risk management acumen further complement her skill repertoire.
    With a career spanning several roles within Taakulo Somali Community and Small and medium enterprise facility (SMEF), Nasra has demonstrated her leadership and project management capabilities. Starting as a Youth Specialist, she progressed to become a Project Officer, where she oversaw food security and livelihood projects while championing child protection initiatives. Currently serving as a Project Manager, Nasra leads multiple projects, overseeing planning, organizing, budgeting, monitoring, and stakeholder management with finesse. Her additional responsibilities include conducting peace training sessions, leading awareness campaigns, and promoting youth participation in peace dialogues and elections.
    Nasra's commitment to personal and professional growth is evident through her participation in numerous workshops, trainings, and short courses focused on inclusive governance, gender, protection, negotiation, advocacy, child rights, and more. These experiences have enriched her understanding of conflict dynamics, gender roles, and community development strategies, enabling her to contribute effectively to peacebuilding efforts.
    Born and raised in Erigavo, Nasra is deeply rooted in her community. Her passion for economic development, peacebuilding, and human rights protection drives her dedication to making a positive impact. Beyond her professional pursuits, Nasra enjoys sports, reading, and volunteering with local organizations to promote social and economic development.`
  }
  
];

function Members() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold text-[#2B256E] text-center mb-12 uppercase tracking-wide mt-20">
        Our Members
      </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {membersData.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ member }) {
    const [showFullProfile, setShowFullProfile] = useState(false);
    const shortProfile = member.profile.substring(0, 307) + "...";
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <div className="flex flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          <h2 className="text-lg font-bold mt-3 text-[#2B256E]">{member.name}</h2>
          <p className="text-sm text-gray-600 mt-1 font-semibold">{member.position}</p>
        </div>
  
        <div className="mt-4 space-y-2 text-gray-700 text-sm">
          <p><span className="font-semibold">📞 PHONE:</span> {member.phone}</p>
          <p><span className="font-semibold">📧 EMAIL:</span> <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a></p>
          <p><span className="font-semibold">📍 ADDRESS:</span> {member.address}</p>
        </div>
  
        <div className="mt-4 text-gray-800 text-sm">
          <h3 className="font-bold text-lg text-[#2B256E] uppercase">Profile:</h3>
          <p>{showFullProfile ? member.profile : shortProfile}</p>
          <button 
            onClick={() => setShowFullProfile(!showFullProfile)}
            className="text-blue-600 hover:underline font-medium mt-2"
          >
            {showFullProfile ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  }
  
export default Members;