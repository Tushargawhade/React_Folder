import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] h-18 px-4 py-4 border-t-[1.25px] border-b-[1.25px] border-r-[1.25px] border-zinc-600 flex items-center justify-between mt-18">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
