import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Lorem  ipsum d olor sit adipisicing eli amet consectetur ipsum dolor sit amet consectetur adipisicing elit",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Iusto minima illo suscipit explicabo placeat dolorum pariatur accusamus quam nemo ab aspernatur corporis blanditiis quasi laboriosam alias sed similique nt in exercitationem!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Aperiam placeat illum magni quisquam, quos provident odit praesentium? Ipsa praesentium nulla numquam repellendus cum!",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem  ipsum d olor sit adipisicing hic laborum ullam nisi, repellendus optio explicabo  eli amet sicing elit",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-20 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} key={index} val={elem} />
      ))}

      <div className="absolute top-0  w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute  w-[25rem] h-[20rem] bg-white left-[46%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-100 "
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-200 "
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-300 "
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration:.5}}
            className="w-full h-full bg-sky-400 "
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
