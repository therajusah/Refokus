import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-white bg-black h-200vh">
      {/* Here in the above code h-screen changed to h-200vh */}
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
