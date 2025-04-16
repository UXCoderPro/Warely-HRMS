import { MdSpaceDashboard } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { AiFillSchedule } from "react-icons/ai";
import { SiPivotaltracker } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    position: "left",
    icon: MdSpaceDashboard,
  },
  {
    id: 2,
    title: "Employee",
    position: "left",
    icon: FaBuildingUser,
  },
  {
    id: 3,
    title: "HR Portal",
    position: "left",
    icon: IoTimerSharp,
  },
  {
    id: 4,
    title: "Shift Schedule",
    position: "left",
    icon: AiFillSchedule,
  },
  {
    id: 5,
    title: "Leave Tracker",
    position: "left",
    icon: SiPivotaltracker,
  },
  {
    id: 6,
    title: "Reports",
    position: "left",
    icon: TbReportSearch,
  },
  {
    id: 7,
    title: "Notice",
    position: "left",
    icon: IoNotifications,
  },
  {
    id: 8,
    title: "Settings",
    position: "left",
    icon: IoSettings,
  },
];

export default menuItems;
