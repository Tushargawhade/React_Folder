import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="bg-zinc-100 w-36 rounded-full px-3 py-1 text-black flex items-center justify-between ">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
