export interface Istate {
  loading?: boolean;
  error?: string;
}

export interface IstateUser extends Istate {
  user?: User;
  isAuthenticated?: boolean;
}

export interface Avatar {
  public_id: string;
  url: string;
}

export interface User {
  username?: string;
  email?: string;
  avatar?: Avatar;
  phone?: string;
  address?: string;
  profileDescription?: string;
  isStreammer?: boolean;
  role?: string;
}
export interface OptionItem {
  name: string | number;
  value: string | number;
}

export interface ModalProps {
  title?: string;
  textButtonConfirm?: string;
  textButtonCancel?: string;
}

export interface StoreModal {
  modalType?: string | null;
  modalProps?: ModalProps;
}

export interface ModalComponentInterface {
  [key: string]: React.FC<any>;
}

export type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: StoreModal;
};

export interface SelectType {
  name?: string;
  value?: any;
}
