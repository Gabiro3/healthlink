import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Modalities",
    newTab: false,
    path: "/#about",
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "DICOM Viewer",
        newTab: false,
        path: "/#",
      },
      {
        id: 34,
        title: "X-ray detection Models",
        newTab: false,
        path: "/#",
      },
      {
        id: 35,
        title: "Integrated reporting",
        newTab: false,
        path: "/#",
      },
      {
        id: 35,
        title: "Cloud-based diagnostics",
        newTab: false,
        path: "/#",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
