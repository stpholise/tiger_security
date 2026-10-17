import { IconType } from "react-icons";

export type QuickLink = {
  title: string;
  url: string;
};

export type Contact = {
  icon?: IconType;
  text: string;
};

export interface SecurityService {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}


// export interface CompanyValue {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   /** Optional accent color classes for the icon container */
//   accent?: {
//     bg: string;
//     text: string;
//   };
// }
