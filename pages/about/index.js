import React, { useState } from "react";

// next image
import Image from "next/image";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaFigma,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiDjango,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaNodeJs key="nodejs" />,
          <FaPython key="python" />,
          <SiDjango key="django" />,
          <FaLaravel key="laravel" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiAdobeillustrator key="illustrator" />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "SMKN 3 BLK - Computer Network Engineering",
        stage: "2018 - 2021",
      },
      {
        title: "ITB Bina Adinata - Information Systems",
        stage: "2021 - Now",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Computer Technician - LPK79 BULUKUMBA",
        stage: "2020 - 2021",
      },
      {
        title: "Web Developer - PT.FORTINUSA MAKASSAR",
        stage: "2021 - 2022",
      },
      {
        title: "Freelancer - Upwork, Fiver, Dribbble",
        stage: "2022 - Now",
      },
    ],
  },
  {
    title: "certificate",
    info: [
      {
        title: "TKJ CLUB - Aksara Tekno Edukasi",
        stage: "2021",
      },
      {
        title: "Lembaga Pelatihan Kerja - LPK Tujuh Sembilan",
        stage: "2021",
      },
      {
        title: "Web Developer batch#2 - Makassar Developer Enthusiast",
        stage: "2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar imr */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px]" // Sesuaikan posisi agar sesuai
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto md:overflow-visible">
        {" "}
        {/* Menambahkan overflow-y-auto di sini untuk mobile dan md:overflow-visible untuk desktop */}
        <div className="flex-1 flex flex-col justify-center">
          {/* text */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Mengungkap <span className="text-accent"> masalah</span> dengan
            pendekatan inovatif<span className="text-accent">.</span>{" "}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Halo! Saya pengembang web dan ilmuwan data yang menciptakan solusi
            digital inovatif menggabungkan pengembangan web dan analisis data.
            Memecahkan masalah kompleks, menghadirkan produk bernilai tinggi
            melampaui harapan klien.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="tet-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* satisfied client */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="tet-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={17} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Client
                </div>
              </div>
              {/* finished project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="tet-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished project
                </div>
              </div>
              {/* awards */}
              <div className="relative ">
                <div className="tet-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
