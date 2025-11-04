import React from "react";
import Button from "./Button";
import { FaArrowUpShortWide } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="max-w-screen-lg  mx-auto py-6 flex items-center  justify-between border-b-[1px] border-zinc-700 ">
      <div className="nleft flex items-center">
        <div className="flex gap-2 items-center">
          <span>
            <FaArrowUpShortWide />
          </span>
          <span>Refokus</span>
        </div>

        <div className="links flex  gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="bg-zinc-700 w-[2px] h-8"></span>
            ) : (
              <a
                key={index}
                className="font-regular text-sm flex  items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.35em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full  "
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button title="Start a project" />
    </div>
  );
}

export default Navbar;
