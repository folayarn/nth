import { BsArrowDownSquareFill, BsCalculatorFill } from "react-icons/bs";
import { GrCurrency } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import calculator from "../images/calculator.avif";
import exportImg from "../images/exportPic.avif";
import importImg from "../images/importPic.avif";
import tradehub from "../images/tradehub.avif";
import legal from "../images/legal.jpeg";

export const toolsData = [
  {
    icon: <BsCalculatorFill color="#3AC05E" size={50} />,
    title: `Duty Calculator`,
    text: `This is a longer card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
  },
  {
    icon: <BsArrowDownSquareFill color="#3AC05E" size={50} />,
    title: "Import Classification Tool",
    text: `This is a longer card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
  },
  {
    icon: <GrCurrency color="#3AC05E" size={50} />,
    title: "Currency converter",
    text: `This is a longer card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
  },
  {
    icon: <FaTools color="#3AC05E" size={50} />,
    title: "Customs Procedure Codes",
    text: `This is a longer card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer.`,
  },
];

export const slideData = [
  {
    slideImg: tradehub,
    title: `Welcome to Nigeria Trade Hub`,
    description: `Praesent commodo cursus magna, vel scelerisque nisl consectetur.`,
    alt: `Nigeria Trade Hub`,
  },
  {
    slideImg: calculator,
    title: `Duty Calculator Tool`,
    description: ` Nulla vitae elit libero, a pharetra augue mollis interdum.`,
    alt: `Duty Calculator`,
  },
  {
    slideImg: legal,
    title: `Legal Information, Processes & Procedures`,
    description: `Praesent commodo cursus magna, vel scelerisque nisl consectetur.`,
    alt: `Legal Information`,
  },
  {
    slideImg: importImg,
    title: `Import Classification Tool`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    alt: `Import Classification`,
  },
  {
    slideImg: exportImg,
    title: `Export Classification Tool`,
    description: `Praesent commodo cursus magna, vel scelerisque nisl consectetur.`,
    alt: `Export Classification`,
  },
];

export const newsData = [
  {
    newsImg: exportImg,
    title: `Latest Export News`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    newsImg: importImg,
    title: `Latest import News`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    newsImg: calculator,
    title: `Currency News`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    newsImg: exportImg,
    title: `Latest Export News`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

export const footerData = [
  {
    title: "About",
    sections: [
      {
        text: "About NTH",
        link: "/About",
      },
      { text: "Organizations", link: "/Organisations" },
      { text: "News", link: "/News" },
      { text: "Contact Us", link: "/Contact" },
    ],
  },
  {
    title: "Library",
    sections: [
      { text: "Legal Information", link: "/Legal" },
      { text: "Trade Regulation", link: "/Regulation" },
      { text: "Procedures", link: "#" },
      { text: "Officail Publications", link: "#" },
      { text: "Videos", link: "#" },
    ],
  },
  {
    title: "ToolBox",
    sections: [
      { text: "Duty Calculator", link: "#" },
      { text: "Import Classification", link: "#" },
      { text: "Export Classification", link: "#" },
      { text: "Customs Procedure Code", link: "#" },
      { text: "Currency Converter", link: "#" },
      { text: "Freight Rates Tool", link: "#" },
    ],
  },
  {
    title: "Help",
    sections: [
      { text: "FAQs", link: "/Help" },
      { text: "Commonly Used Terms", link: "#" },
      { text: "Useful Links", link: "#" },
      { text: "Support", link: "#" },
    ],
  },
];
