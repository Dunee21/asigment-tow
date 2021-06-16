import {
  FiHome,
  FiSettings,
  FiDollarSign,
  FiLayout,
  FiAlignJustify,
} from "react-icons/all";
export const navitems = [
  { id: 1, path: "/", icon: <FiHome size={30} />, title: "Dashboard" },
  { id: 2, path: "/income", icon: <FiDollarSign size={30} />, title: "Income" },
  { id: 3, path: "/expenses", icon: <FiLayout size={30} />, title: "Expenses" },
  {
    id: 4,
    path: "/history",
    icon: <FiAlignJustify size={30} />,
    title: "History",
  },
  {
    id: 5,
    path: "/settings",
    icon: <FiSettings size={30} />,
    title: "Settings",
  },
];
