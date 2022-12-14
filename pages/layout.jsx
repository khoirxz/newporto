import { useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";

import { Navbar, Footer } from "../components/Atom";
import { Hero } from "../components/Molecules";

import AppContext from "../context/state";

import styles from "../styles/Landing.module.css";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.01,
    },
  },
};

const Layout = ({ children }) => {
  const route = useRouter();
  const { theme } = useContext(AppContext);
  return (
    <div
      className={`text-[#2e3033] dark:text-[#ffffff] min-h-screen before:dark:bg-black/80 ${styles.bgMesh} relative before:content-[""] before:-z-999 before:absolute before:w-full before:h-full before:bg-[#ffffff86] before:backdrop-blur-md`}
    >
      <Head>
        <title>R KHOIR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="theme-color"
          content={theme === "dark" ? "#000000" : "#ffffff"}
        />
      </Head>
      <motion.div
        variants={sentence}
        viewport={{ once: true }}
        initial="hidden"
        animate="visible"
      >
        <header className="flex flex-col justify-between relative ">
          <Navbar />
          {route.route !== "/" ? null : <Hero />}
        </header>
        <main className="relative z-20 transition-all">{children}</main>
      </motion.div>
      {route.route !== "/" ? null : <Footer />}
    </div>
  );
};

export default Layout;
