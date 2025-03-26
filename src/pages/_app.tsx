import type { AppProps } from "next/app";
import "../styles/App.scss";
// import "../styles/asad.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/responsive.scss";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import LoadInitialData from "@/components/LoadInitialData/LoadInitialData";
// Component to fetch data on app load

export default function App({ Component, pageProps }: AppProps) {
  console.log("Redux Store State at Start:", store.getState());

  return (
    <Provider store={store}>
      <LoadInitialData />
      <Component {...pageProps} />
    </Provider>
  );
}
