import React, { useState } from "react";
import logo from "../assets/warely.svg";
import Menu from "./UI/Menu";
import menuItems from "../Data/menuData";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ModuleSwitch from "./UI/moduleSwitch";
import ModuleItems from "../Data/moduleData";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(menuItems[0].id);
  return (
    <div className="flex w-60 h-screen flex-col justify-between items-center border-r-redStroke bg-redShade pt-6 border-r border-solid">
      <div className="flex flex-col items-center w-full">
        <div className="w-full justify-center items-center flex px-4 py-6">
          <img src={logo} alt="Warely" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center gap-3 w-52">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Menu
                key={item.id}
                title={item.title}
                position={item.position}
                icon={<Icon size={20} />}
                active={item.id === activeId}
                onClick={() => setActiveId(item.id)}
              />
            );
          })}
        </div>
      </div>

      <div className="w-52 flex h-72 flex-col justify-center items-center gap-9 shrink-0 bg-white px-3.5 py-4 rounded-[20px_20px_0px_0px] border-x-redStroke border-t border-solid border-r border-l">
        <div className="flex flex-col items-center gap-3 w-full">
          <MdKeyboardDoubleArrowDown
            size={20}
            className="text-font cursor-pointer "
          />
          {ModuleItems.map((item) => (
            <ModuleSwitch
              key={item.id}
              module={item.module}
              alt={item.alt}
              logo={item.logo}
            />
          ))}
        </div>

        <h1 className="w-full text-font font-montserrat text-center text-[8px] font-bold leading-4 tracking-[5px]">
          <span className="font-medium">POWERED BY</span> WARELY
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
