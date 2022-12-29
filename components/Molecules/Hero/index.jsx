import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/rootbackdor/",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/rizqi.khoir/",
  },
  {
    id: 4,
    name: "Github",
    link: "https://www.github.com/khoirxz/",
  },
  {
    id: 5,
    name: "Khoirurrohman@gmail.com",
    link: "mailto:khoirurrohman@gmail.com",
  },
  {
    id: 6,
    name: "CV",
    link: "/resume.pdf",
  },
];

const name = "Rizqi Khoirurrohman";
const line1 = "I'm a full stack engineer with strong experience.";
const line2 =
  "make something by combining creativity and technology to create something unique and can be enjoyed by everyone.";

const letter = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[800px] h-[30rem] w-full mx-auto px-6 lg:px-0 flex flex-row items-center">
        <div>
          <h1 className="font-semibold text-2xl my-2">
            {name.split("").map((char, i) => (
              <motion.span
                key={char + "_" + i}
                variants={letter}
                viewport={{ once: true }}
                exit={{ opacity: 1 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <p className="font-body text-xl text-gray-600 dark:text-gray-400 my-2">
            {line1.split("").map((char, i) => (
              <motion.span
                key={char + "_" + i}
                variants={letter}
                dangerouslySetInnerHTML={{ __html: char }}
              ></motion.span>
            ))}
          </p>
          <p className="font-body text-xl text-gray-600 dark:text-gray-400 my-2">
            {line2.split("").map((char, i) => (
              <motion.span
                key={char + "_" + i}
                variants={letter}
                dangerouslySetInnerHTML={{ __html: char }}
              ></motion.span>
            ))}
          </p>

          <div className="flex gap-2 items-center mt-5 flex-wrap">
            {data.map((item) => (
              <motion.span variants={letter} key={item.id}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="transition-all rounded-lg font-medium bg-black/20 dark:bg-white/20 hover:bg-black/10 hover:dark:bg-white/10 px-3 py-2"
                >
                  {item.name}
                </Link>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
