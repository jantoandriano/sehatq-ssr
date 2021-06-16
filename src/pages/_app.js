import "../../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../store";
// import { Provider } from "react-redux";
// import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
