const Footer = () => {
  const footerLinks = [
    "Privacy Policy",
    "Cookie Policy",
    "Impressum",
    "Terms",
    "Webflow Agency",
  ];

  return (
    <div className="text-zinc-400">
      <div className="max-w-screen-xl px-4 py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div className="ml-8">
            <div className="flex gap-8">
              {footerLinks.map((text, index) => (
                <a
                  key={index}
                  href={`#${text.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-sm font-regular"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
          <div className="mr-6">
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
