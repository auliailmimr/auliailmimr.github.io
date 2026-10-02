"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    startDate: "Jun 2021",
    endDate: "Present",
    company: "PKBM SWASTIKA",
    position: "IT & Web Administrator | ICT Teacher",
    type: "Part-time",
    location: "Kab. Malang, Indonesia",
    description:
      "Developed and managed the official school website and e-learning platform. Implemented and maintained IT infrastructure, including user accounts, databases, and digital classrooms. Taught ICT subjects to students while ensuring smooth operation of technology-based learning. Provided technical support, data management, and system improvements to enhance digital education delivery.",
    skills: [
      "Web Development",
      "E-learning Management",
      "IT Infrastructure",
      "Data Management",
      "Technical Support",
      "Teaching ICT",
    ],
  },
  {
    id: 2,
    startDate: "Mar 2024",
    endDate: "Apr 2024",
    company: "Kimia Farma x Rakamin Academy",
    position: "Big Data Analytics Intern",
    type: "Internship",
    location: "Remote, Indonesia",
    description:
      "Applied data warehousing and data mart concepts; processed and analyzed business data; built dashboards to visualize insights.",
    skills: ["Big Data", "Data Warehousing", "Dashboarding", "SQL", "Python"],
  },
  {
    id: 3,
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    company: "UIN Maulana Malik Ibrahim Malang",
    position: "Web Programming Practicum Lab Assistant",
    type: "Academic",
    location: "Malang, Indonesia",
    description:
      "Assisted students with lab materials, demos, and code examples; supported completion of practical assignments; evaluated submissions and provided feedback.",
    skills: ["HTML/CSS/JS", "Teaching", "Mentoring", "Assessment"],
  },
  {
    id: 4,
    startDate: "Feb 2024",
    endDate: "Jul 2024",
    company: "UIN Maulana Malik Ibrahim Malang",
    position: "Software Engineering Practicum Lab Assistant",
    type: "Academic",
    location: "Malang, Indonesia",
    description:
      "Supported understanding of SE concepts; guided lab sessions; evaluated work, corrected assignments, and assisted in progress assessment.",
    skills: ["Software Engineering", "Mentoring", "Communication"],
  },
  {
    id: 5,
    startDate: "Jan 2022",
    endDate: "Dec 2023",
    company: "Cendekia Muda Indonesia",
    position: "Research & Technology Tutor",
    type: "Part-time",
    location: "Malang, Indonesia",
    description:
      "Guided students in research methodology with a strong emphasis on technology-based projects. Mentored on software engineering practices, data analysis, and digital tools to support scientific research. Helped students develop prototypes, technical reports, and presentations that integrated modern technologies into their projects.",
    skills: [
      "Research Methodology",
      "Technology Mentoring",
      "Software Engineering",
      "Data Analysis",
      "Scientific Writing",
      "Presentation Skills",
    ],
  },
  {
    id: 6,
    startDate: "Jul 2021",
    endDate: "Nov 2023",
    company: "PT. Aira Technology Indonesia",
    position: "Digital Marketing & Graphic Designer",
    type: "Full-time",
    location: "Malang, Indonesia",
    description:
      "Executed end-to-end digital marketing campaigns with a strong focus on data-driven decision making. Designed brand assets and visual content for social media platforms (Instagram, TikTok, Twitter). Analyzed campaign performance using digital analytics tools, optimized strategies for better engagement, and produced graphic designs that supported marketing initiatives.",
    skills: [
      "Digital Marketing",
      "Graphic Design",
      "Data Analytics",
      "Content Strategy",
      "Social Media Management",
      "Adobe Creative Suite",
      "Figma",
    ],
  },
  {
    id: 7,
    startDate: "Apr 2024",
    endDate: "Jul 2024",
    company: "PT. Dkenzie Wastu Baswara",
    position: "Social Media & Digital Marketing",
    type: "Contract",
    location: "Batu, East Java, Indonesia",
    description:
      "Developed and executed social media content strategies across Instagram, Facebook, and TikTok. Managed paid ads and tracked campaign performance through analytics tools. Supported website digital marketing by contributing to content updates, SEO optimization, and aligning social media campaigns with website traffic goals to enhance overall brand visibility.",
    skills: [
      "Social Media Marketing",
      "Digital Marketing",
      "SEO",
      "Website Content Management",
      "Ads Management",
      "Analytics & Reporting",
      "Content Planning",
    ],
  },
];

// Newest first, by start date ("Mon YYYY"); parsed by hand because Safari rejects new Date("Jun 2021")
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const toMonthIndex = (date) => {
  const [month, year] = date.split(" ");
  return parseInt(year) * 12 + MONTHS.indexOf(month);
};
experiences.sort((a, b) => toMonthIndex(b.startDate) - toMonthIndex(a.startDate));

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
          }}
        >
          Professional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function TimelineCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`flex ps-10 md:ps-0 ${
        isEven
          ? "md:justify-center md:translate-x-68"
          : "md:justify-center md:-translate-x-68"
      } justify-center mb-4`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm font-bold">{experience.startDate}</div>
            <div className="text-xs text-gray-300">Start</div>
          </div>
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-bold">{experience.endDate}</div>
            <div className="text-xs text-gray-300">End</div>
          </div>{" "}
          <div className="w-px h-8 bg-gray-500"></div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400">
              {experience.location}
            </div>
            <div className="text-xs text-gray-300">Location</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience, index, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative group ${
        isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
      } md:w-1/2`}
    >
      {" "}
      {/* Card */}
      <div
        className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}
      >
        {/* Company & Position */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-black mb-1">
            {experience.company}
          </h3>
          <h4 className="font-medium text-lg text-gray-700">
            {experience.position}
            <span className="text-sm font-normal text-gray-500 ml-2">
              • {experience.type}
            </span>
          </h4>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-justify leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container px-6 py-10">
      <div className="flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <Title />
      <Wrapper>
        {" "}
        <div className="relative w-full max-w-6xl mx-auto">
          {" "}
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
          {/* Experience cards */}
          <div className="space-y-12 md:space-y-16 relative">
            <AnimatePresence>
              {displayedExperiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline period card - flows naturally above content */}
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />

                  {/* Timeline dot - positioned at the start of the experience card */}
                  <div
                    className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
                  />

                  {/* Experience content card */}
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isEven={index % 2 === 1}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
          {/* Expand/Collapse button */}
          {experiences.length > 3 && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    Show Less
                    <svg
                      className="w-4 h-4 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    View More Experience
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </motion.div>
          )}{" "}
          {/* Gradient fade effect at bottom */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
          )}
        </div>
      </Wrapper>
    </>
  );
}
