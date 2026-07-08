import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Order/Order";
import Story from "./components/Story/Story";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Story />
      <Order />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
