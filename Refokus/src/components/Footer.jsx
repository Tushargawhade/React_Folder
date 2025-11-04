import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-5 flex gap-8">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>

        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3">
            <h4 className="capitalize mb-10 text-zinc-500">social</h4>
            {["instagram", "twitter (x?)", "linkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="capitalize mb-10 text-zinc-500">sitemaps</h4>
            {["home", "work)", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-300">
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2  flex flex-col items-end">
            <p className="text-right">
              Refokus is a pioneering a agency driven design and empowered by
              technology.
            </p>
            <img
              className="w-22 mt-5 bg-blue-600 p-2 rounded-md px-3"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
