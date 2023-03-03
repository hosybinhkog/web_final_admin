export interface Istate {
  loading?: boolean;
  error?: string;
}

export interface IstateUser extends Istate {
  user?: User | undefined;
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
}
