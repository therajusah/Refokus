import Cards from "./components/Cards";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="w-full text-white bg-black h-200vh">
      {/* Here in the above code h-screen changed to h-200vh */}
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
};

export default App;
