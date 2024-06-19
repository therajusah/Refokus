import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-black rounded-full min-w-40 bg-zinc-100 ">
      <span className="text-sm font-medium">Get Started</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
