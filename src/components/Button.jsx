import PropTypes from "prop-types";
import { IoIosReturnRight } from "react-icons/io";
const Button = ({ title = "Get Started" }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-black rounded-full min-w-40 bg-zinc-100 ">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
