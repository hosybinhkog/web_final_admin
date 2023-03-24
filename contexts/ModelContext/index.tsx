import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { MODEL_COMPONENTS } from "../../constants/modals";
import { GlobalModalContext, StoreModal } from "../../interface";

const inititalState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(inititalState);
export const useGlocalModalContext = () => useContext(GlobalModalContext);

interface ModalContextProps {
  children: ReactNode;
}

const ModalContext: React.FC<ModalContextProps> = ({ children }) => {
  const [store, setStore] = useState<StoreModal>({});
  const { modalType, modalProps } = store;

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme");
    const html = window.document.documentElement;
    const next = isDarkMode ? isDarkMode : "light";
    html.classList.add(next);
  }, []);

  const renderComponent = () => {
    const ModalComponent = modalType && MODEL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id='global-modal' {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};

export default ModalContext;
