import React from "react";

const ModuleSwitch = ({ logo, alt, module }) => {
  return (
    <div className=" flex justift-between items-center w-full  self-stretch h-11">
      <div className="flex items-center gap-2">
        <div className="w-auto h-auto flex justify-center items-center border-redStroke p-1 rounded-full border-solid border-[1.5px]">
          <img src={logo} alt={alt} />
        </div>
        <p className="text-font  font-montserrat text-xs font-medium leading-4">
          {module}
        </p>
      </div>
    </div>
  );
};

export default ModuleSwitch;
