import { HiArrowLongRight } from "react-icons/hi2";
import PropTypes from "prop-types";

const Card = ({ width, start, para, hover }) => {
  return (
    <div className={`p-5 bg-zinc-800 hover:${hover} rounded-xl ${width} min-h-[30rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <h3>One Heading</h3>
          <HiArrowLongRight />
        </div>
        <h1 className="mt-5 text-3xl font-medium">Whatever heading</h1>
      </div>
      <div className="w-full down">
        {start && (
          <>
            <h1 className="text-5xl font-semibold leading-none tracking-tight">
              Start a Project
            </h1>
            <button className="px-5 mt-5 py-2 rounded-full border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="mt-3 text-sm font-medium text-zinc-500">
            Lorem ipsum, dolor sit amet
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.string.isRequired, 
  start: PropTypes.bool.isRequired,
  para: PropTypes.bool.isRequired, 
  hover: PropTypes.string, 
};

export default Card;
