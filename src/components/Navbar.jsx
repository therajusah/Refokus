import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-screen-xl px-4 py-5 mx-auto border-b-2 border-zinc-700">
      <div className="flex items-start nleft">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokus company logo"
        />
        <div className="flex ml-20 links gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a
              key={index}
              href={`#${elem}`}
              className="flex items-center gap-1 text-sm font-regular"
            >
              {elem.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-700"></span>
              ) : (
                <>
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.35em #00FF19" }}
                      className="inline-block w-2 h-2 bg-green-500 rounded"
                    ></span>
                  )}
                  {elem}
                </>
              )}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
