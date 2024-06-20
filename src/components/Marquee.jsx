import PropTypes from "prop-types";

const Marquee = ({ imagesurls }) => {
  const duplicatedImages = [...imagesurls, ...imagesurls];

  return (
    <div className="flex flex-wrap gap-20 py-8 overflow-hidden whitespace-normal">
      {duplicatedImages.map((url, index) => (
        <img key={index} src={url} className="w-[6vw] h-auto mx-6" alt={`Image ${index}`} />
      ))}
    </div>
  );
};

Marquee.propTypes = {
  imagesurls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Marquee;
