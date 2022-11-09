import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../components/Topbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
