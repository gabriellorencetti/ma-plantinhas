import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../components/Topbar";
import "../styles/globals.css";
import Footer from "../components/Footer";
import VLibras from 'vlibras-nextjs';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
      <Footer />
      <div className="MyApp">
        <VLibras forceOnload />
      </div>
    </>
  );
}


export default MyApp;
