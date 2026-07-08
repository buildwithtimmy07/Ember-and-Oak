import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>EMBER & OAK</h2>
          <p>
            Crafted slowly. Served beautifully. Every cup is an invitation to
            pause, connect and enjoy the moment.
          </p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#order">Order</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p>Mon – Fri</p>
          <span>7:00 AM – 8:00 PM</span>
          <p>Saturday</p>
          <span>8:00 AM – 9:00 PM</span>
          <p>Sunday</p>
          <span>9:00 AM – 6:00 PM</span>
        </div>
        <div className="footer-contact">
          <h3>Visit Us</h3>
          <p>14 Oak Street</p>
          <p>Lagos, Nigeria</p>
          <p>+234 800 123 4567</p>
          <p>hello@emberandoak.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Ember & Oak. Designed & Developed by BuildWithTimmy.</p>
      </div>
    </footer>
  );
}

export default Footer;
