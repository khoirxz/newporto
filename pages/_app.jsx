import "../styles/globals.css";
import { motion } from "framer-motion";

import { AppWrapper } from "../context/state";
import Layout from "./layout";

const App = ({ Component, pageProps, router }) => {
  return (
    <AppWrapper>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AppWrapper>
  );
};

export default App;
