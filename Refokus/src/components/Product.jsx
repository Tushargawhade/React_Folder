import React from "react";
import Button from "./Button";

function Product({ val , mover , count}) {
  return (
    <div className="w-full py-20 h-[20rem]  ">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-lg mx-auto flex items-center justify-between  ">
        <h1 className="text-5xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-8">{val.description}</p>
          <div className="flex items-center gap-6">
            {val.live && <Button />}
            {val.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
