import { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "arquitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 23);
  };

  return (
    <div className="relative mt-20">
      {products.map((product, index) => (
        <Product key={index} val={product} mover={mover} index={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none"></div>
      <motion.div
        initial={{ y: 0, x: "-50%" }}
        animate={{ y: pos + `rem` }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        className="window w-[23rem] h-[23rem] bg-white left-[44%] overflow-hidden absolute top-0"
      >
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full bg-sky-100"
        ></motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full bg-sky-200"
        ></motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          className="w-full h-full bg-sky-300"
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        ></motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          className="w-full h-full bg-sky-400"
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Products;
