import React from "react";

const Menu = ({ title, icon, position, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        `${active ? "bg-redGradient text-white" : "bg-white text-font hover:bg-redStroke hover:text-font"}  flex w-full items-center justify-start p-2.5 gap-3  font-montserrat rounded-lg cursor-pointer   transition-all duration-500 ease-in-out text-sm font-medium leading-6`
      }
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </div>
  );
};

export default Menu;
