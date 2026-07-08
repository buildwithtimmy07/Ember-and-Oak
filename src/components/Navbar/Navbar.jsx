import "./Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">
        <h2>
          EMBER
          <span>& OAK</span>
        </h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#story">Story</a>
        </li>
        <li>
          <a href="#order">Order</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
      <a href="#order" className="order-btn">
        Order Now
      </a>
    </nav>
  );
}

export default Navbar;
