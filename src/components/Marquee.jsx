import PropTypes from "prop-types";
import { motion } from "framer-motion";
const Marquee = ({ imagesurls }) => {
  const duplicatedImages = [...imagesurls, ...imagesurls];

  return (
    <motion.div
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      className="flex flex-wrap gap-20 py-8 overflow-hidden whitespace-normal"
    >
      {duplicatedImages.map((url, index) => (
        <img
          key={index}
          src={url}
          className="w-[6vw] h-auto mx-6"
          alt={`Image ${index}`}
        />
      ))}
    </motion.div>
  );
};

Marquee.propTypes = {
  imagesurls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Marquee;
