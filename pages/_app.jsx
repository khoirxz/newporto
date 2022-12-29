import "../styles/globals.css";

import { AppWrapper } from "../context/state";
import Layout from "./layout";

const App = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
};

export default App;
