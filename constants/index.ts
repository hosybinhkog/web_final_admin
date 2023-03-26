import {
  CogIcon,
  GiftIcon,
  HomeIcon,
  NewspaperIcon,
  QrcodeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewListIcon,
  OfficeBuildingIcon,
  UserIcon,
  LogoutIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

export const APP = "HELLLO APP";
export const passwordRegex =
  /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]{8,16}$/;

export const sidebarRoutes = [
  {
    display_name: "Dashboard",
    route: "/",
    icon: HomeIcon,
  },
  {
    display_name: "Customers",
    route: "/customers",
    icon: UserGroupIcon,
  },
  {
    display_name: "Posts",
    route: "/posts",
    icon: NewspaperIcon,
  },
  {
    display_name: "TypeReport",
    route: "/types-report",
    icon: OfficeBuildingIcon,
  },
  {
    display_name: "Lives",
    route: "/lives",
    icon: QrcodeIcon,
  },
  {
    display_name: "Orders",
    route: "/order",
    icon: ShoppingCartIcon,
  },
  {
    display_name: "categories-stream",
    route: "/categories-stream",
    icon: ViewListIcon,
  },
  {
    display_name: "discount",
    route: "/discount",
    icon: GiftIcon,
  },
  {
    display_name: "inventory",
    route: "/inventory",
    icon: OfficeBuildingIcon,
  },

  {
    display_name: "settings",
    route: "/settings",
    icon: CogIcon,
  },
];

export const userMenu = [
  {
    icon: UserIcon,
    content: "Profile",
  },
  // {
  //   icon: Wa,
  //   content: "My Wallet",
  // },
  {
    icon: CogIcon,
    content: "Settings",
  },
  {
    icon: LogoutIcon,
    content: "Logout",
  },
];

export const notifications = [
  {
    icon: ExclamationCircleIcon,
    content: "Curabitur id eros quis nunc suscipit blandit",
  },
  {
    icon: ViewListIcon,
    content: "Duis malesuada justo eu sapien elementum, in semper diam posuere",
  },
  {
    icon: ShoppingCartIcon,
    content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat",
  },
  {
    icon: ExclamationCircleIcon,
    content: "In gravida mauris et nisi",
  },
  {
    icon: ShoppingCartIcon,
    content: "Curabitur id eros quis nunc suscipit blandit",
  },
];
