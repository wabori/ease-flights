import React from "react";
import { Checkbox as UiCheckBox } from "./ui/checkbox";

const Checkbox = ({ id, children, value, setValue, onCheckedChange }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <UiCheckBox onCheckedChange={onCheckedChange} value={value} id={id} />
      <label
        onClick={() => setValue(!value)}
        className="flex text-gray-500 text-[13px] flex-col"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
