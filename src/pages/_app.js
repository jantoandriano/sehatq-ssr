import "../../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default MyApp;
