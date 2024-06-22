import PropTypes from "prop-types";
import Button from "./Button";

const Product = ({ val, mover, index }) => {
  if (!val) return null;

  return (
    <div className="w-full py-20 pl-12 h-[23rem]  pr-20 text-white">
      <div onMouseEnter={() => {mover(index)}} className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-medium capitalize">{val.title}</h1>
        <div className="w-1/3 details">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  val: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    live: PropTypes.bool,
    case: PropTypes.bool,
  }).isRequired,
  mover: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Product;
