"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Head from "next/head";
import { Element } from "react-scroll";
import { GlowingOrb } from "../components/glowing-orb";
import { ProjectCard } from "../components/project-card";
import { SkillCategory } from "../components/skill-category";
import { ContactItem } from "../components/contact-item";
import Navbar from "@/components/nav";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaJava,
  FaPhp,
  FaCalendar,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUniversity,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiExpo,
  SiJenkins,
  SiPostman,
  SiGithub,
  SiSqlite,
  SiVercel,
} from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "PHP", icon: FaPhp },
      { name: "SQL", icon: SiPostgresql },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    name: "Front-End Development",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Back-End Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    name: "Mobile Development",
    skills: [{ name: "React Native (Expo)", icon: SiExpo }],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel }, // เพิ่ม Vercel
      { name: "NeonDB", icon: SiPostgresql }, // ใช้ PostgreSQL icon สำหรับ NeonDB
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>f5song</title>
        <meta name="description" content="Portfolio of Puttaraporn Jitpranee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="fixed inset-0 bg-[#0a0118]">
        <GlowingOrb className="top-[20%] left-[10%]" color="purple" />
        <GlowingOrb className="top-[60%] right-[15%]" color="indigo" />
        <GlowingOrb className="bottom-[10%] left-[30%]" color="blue" />
      </div>

      <main
        className={`relative min-h-screen text-white overflow-x-hidden ${inter.className}`}
      >
        {/* Hero Section */}
        <Element name="home">
          <motion.section
            className="flex flex-col items-center justify-center min-h-screen relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hello! I&apos;m
                </span>

                <br />
                <span className="text-white">Puttaraporn Jitpranee</span>
                <br />
                <span className="text-white">(Folksong)</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 opacity-80">
                A passionate developer & technology enthusiast
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <motion.a
                  href="/puttaraporn_jit_resume.pdf"
                  download="puttaraporn_jit_resume.pdf"
                  className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-300 font-semibold hover:bg-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.section>
        </Element>

        {/* About Me Section */}
        <Element name="about">
          <motion.section
            className="py-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src="/images/me.jpg"
                    alt="My Image"
                    className="w-full h-auto"
                  />
                </motion.div>
                <div className="md:w-2/3">
                  <p className="text-purple-200 text-lg leading-relaxed">
                    I&apos;m a final-year IT student at King Mongkut&apos;s
                    Institute of Technology Ladkrabang (KMITL) with a strong
                    passion for full-stack development.
                  </p>

                  <p className="text-purple-200 text-lg leading-relaxed mt-4">
                    With expertise in both frontend and backend technologies, I
                    specialize in building scalable web and mobile applications
                    that deliver seamless user experiences and high-performance
                    backend systems.
                  </p>

                  <p className="text-purple-200 text-lg leading-relaxed mt-4">
                    My technical skill set includes modern frameworks such as{" "}
                    <strong>React, Next.js, and React Native</strong> for
                    frontend development, as well as{" "}
                    <strong>
                      Node.js, Express, and Prisma with PostgreSQL
                    </strong>{" "}
                    for backend architecture. I am also experienced in working
                    with <strong>MongoDB and RESTful APIs</strong>, ensuring
                    robust and scalable system integration.
                  </p>

                  <p className="text-purple-200 text-lg leading-relaxed mt-4">
                    Beyond technical expertise, I am highly motivated to learn
                    and adapt to emerging technologies. I enjoy problem-solving
                    and optimizing application performance to create efficient,
                    user-friendly solutions. Collaborating with innovative teams
                    excites me, as I thrive in environments that encourage
                    creativity, knowledge-sharing, and impactful software
                    development.
                  </p>

                  <p className="text-purple-200 text-lg leading-relaxed mt-4">
                    I am eager to apply my technical skills and problem-solving
                    mindset to real-world projects, contributing to teams that
                    are passionate about technology and innovation. 🚀
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </Element>

        {/* Skills Section */}
        <Element name="skills">
          <motion.section
            className="py-20 relative bg-purple-900/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Skills
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <SkillCategory key={index} category={category} />
                ))}
              </div>
            </div>
          </motion.section>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <motion.section
            className="py-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Featured Projects
              </motion.h2>

              <div className="space-y-32">
                <ProjectCard
                  title="AroiDee"
                  description="A recipe management web app with advanced search, meal planning, calorie tracking, personalized meal suggestions, and user-generated recipes. Designed to help users plan and maintain a healthy diet effortlessly."
                  image="/images/AroiDee.png"
                  imagePosition="left"
                  technologies={[
                    "TypeScript",
                    "Node.js",
                    "React",
                    "Express.js",
                    "PostgreSQL",
                    "NeonDB",
                    "Vercel",
                  ]}
                  slug="AroiDee"
                />
                <ProjectCard
                  title="Connextra"
                  description="A real-time chat application with instant messaging, group chats, friend management, message reactions, and user status updates. Designed for a seamless and interactive communication experience."
                  image="/images/connextra.png"
                  imagePosition="right"
                  technologies={[
                    "TypeScript",
                    "Node.js",
                    "React",
                    "Socket.IO",
                    "AWS",
                  ]}
                  slug="Connextra"
                />

                <ProjectCard
                  title="Job4All"
                  description="Job4ALL is a job-seeking application designed to help people with disabilities find suitable employment opportunities. It features job searching with filters, resume submission, and personalized job recommendations. Employers can post job listings, manage applications, and update hiring statuses, creating an inclusive and efficient recruitment process."
                  image="/images/Job4All.jpg"
                  imagePosition="left"
                  technologies={["React Native (Expo)", "Node.js", "MongoDB"]}
                  slug="Job4All"
                />

                <ProjectCard
                  title="Shopdee"
                  description="An e-commerce web application for buying and selling new and second-hand products."
                  image="/images/shopdee.png"
                  imagePosition="right"
                  technologies={[
                    "Python",
                    "HTML",
                    "CSS",
                    "Tailwind",
                    "PostgreSQL",
                  ]}
                  slug="Shopdee"
                />

                <ProjectCard
                  title="RodRudee"
                  description="A restaurant management web application allowing users to place orders, track order statuses, and manage menus via an admin panel."
                  image="/images/Rodrudee.png"
                  imagePosition="left"
                  technologies={["PHP", "HTML", "CSS", "Bootstrap", "SQLite"]}
                  slug="RodRudee"
                />

                <ProjectCard
                  title="ILandedAirline"
                  description="An Airline Ticket Booking Website is an online platform that allows users to search for available flights, compare prices, book tickets, and select their preferred seats seamlessly."
                  image="/images/ilandedairline.png"
                  imagePosition="right"
                  technologies={["PHP", "HTML", "CSS", "MySQL"]}
                  slug="ILandedAirline"
                />
              </div>
            </div>
          </motion.section>
        </Element>

        {/* Education Section */}
        <Element name="education">
          <motion.section
            className="py-20 relative bg-purple-900/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Education
              </motion.h2>
              <motion.div
                className="bg-purple-800/30 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FaCalendar className="mr-2" /> 2021 - 2025
                  </span>
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <FaGraduationCap className="mr-2" /> Undergraduate
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Bachelor of Science in IT
                </h3>
                <p className="text-purple-200 mb-4">King Mongkut&apos;s Institute of Technology Ladkrabang</p>
                <div className="flex items-center space-x-2 text-purple-200">
                  <FaUniversity className="text-purple-400" />{" "}
                  <span>KMITL</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-purple-200">
                  <FaMapMarkerAlt className="text-pink-400" />{" "}
                  <span>Bangkok, Thailand</span>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <motion.section
            className="py-20 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Connect With Me
              </motion.h2>
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 max-w-md mx-auto">
                <ContactItem
                  icon={FaLinkedin}
                  name="LinkedIn"
                  username="Puttaraporn Jitpranee"
                  link="https://www.linkedin.com/in/puttaraporn-jitpranee/"
                  color="bg-blue-600"
                />
                <ContactItem
                  icon={SiGithub}
                  name="GitHub"
                  username="f5song"
                  link="https://github.com/f5song"
                  color="bg-gray-800"
                />
                <ContactItem
                  icon={FaEnvelope}
                  name="Email"
                  username="puttaraporn.jit@gmail.com"
                  link="mailto:puttaraporn.jit@gmail.com"
                  color="bg-red-500"
                />
                <ContactItem
                  icon={FaInstagram}
                  name="Instagram"
                  username="@f5song"
                  link="https://instagram.com/f5song"
                  color="bg-pink-400"
                />
              </div>
            </div>
          </motion.section>
        </Element>
      </main>
    </>
  );
}
