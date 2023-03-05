import "../styles/app.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";

import store from "../redux/store";
import { Toaster } from "react-hot-toast";

import { Loading, Transition } from "../components";
import { loadUser } from "../redux/actions/user.action";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, [store]);

  if (!hasWindow) {
    return <Loading />;
  } else {
    return (
      <Transition location={router.pathname}>
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
      </Transition>
    );
  }
}

export default MyApp;
