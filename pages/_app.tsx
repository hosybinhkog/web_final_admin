import "../styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

import store from "../redux/store";
import { Toaster } from "react-hot-toast";

import { Loading } from "../components";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {}, [store]);

  if (!hasWindow) {
    return <Loading />;
  } else {
    return (
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <Provider store={store}>
          <Toaster position='top-center' toastOptions={{ duration: 500 }} />
          <Component {...pageProps} key={router.asPath} />;
        </Provider>
      </AnimatePresence>
    );
  }
}

export default MyApp;
