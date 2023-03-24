import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../styles/app.scss";

import store from "../redux/store";

import { NextPage } from "next";
import { DismissableToast, Loading, Transition } from "../components";
import { loadUser } from "../redux/actions/user.action";
import ModalContext from "../contexts/ModelContext";
import "react-quill/dist/quill.snow.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, []);

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
            <ModalContext>
              <DismissableToast />
              {getLayout(<Component {...pageProps} key={router.asPath} />)}
            </ModalContext>
          </Provider>
        </AnimatePresence>
      </Transition>
    );
  }
}

export default MyApp;
