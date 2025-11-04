import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, start, para ,hover="false" }) {
  return (
    <motion.div
      whileHover={{backgroundColor: hover === true && "#7443ff", padding:"20px" }}
      className={`bg-zinc-800 p-4  rounded-xl  ${width} min-h-[26rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading </h3>
          <IoIosArrowRoundForward />
        </div>

        <h1 className="text-3xl  font-semibold mt-5">Any Heading</h1>
      </div>

      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none  ">
              start a project{" "}
            </h1>
            <button className="rounded-full border-[2px] border-zinc-600  py-2 px-5 mt-5  ">
              Contact Us{" "}
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm font-medium text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
